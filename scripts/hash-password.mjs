// Generates the PBKDF2 hash for AFFILIATE_ADMIN_PASSWORD_HASH.
// Mirrors src/lib/affiliate/crypto.ts — same format, same parameters.
//
// Usage (prompts, so the password stays out of shell history):
//   node scripts/hash-password.mjs
// or non-interactively:
//   echo 'the-password' | node scripts/hash-password.mjs

import { webcrypto } from 'node:crypto';
import { createInterface } from 'node:readline';

const ITERATIONS = 100_000;

async function hashPassword(password) {
  const salt = webcrypto.getRandomValues(new Uint8Array(16));
  const key = await webcrypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(password),
    'PBKDF2',
    false,
    ['deriveBits'],
  );
  const bits = await webcrypto.subtle.deriveBits(
    { name: 'PBKDF2', hash: 'SHA-256', salt, iterations: ITERATIONS },
    key,
    256,
  );
  const b64 = (bytes) => Buffer.from(bytes).toString('base64');
  return `pbkdf2$${ITERATIONS}$${b64(salt)}$${b64(new Uint8Array(bits))}`;
}

const rl = createInterface({ input: process.stdin, output: process.stderr });
rl.question('Password: ', async (password) => {
  rl.close();
  if (!password) {
    console.error('Empty password — nothing hashed.');
    process.exit(1);
  }
  console.log(await hashPassword(password));
});
