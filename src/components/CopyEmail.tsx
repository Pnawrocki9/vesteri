'use client';

import { useEffect, useState } from 'react';

// Copy-to-clipboard affordance next to the contact address.
//
// A mailto link does nothing at all when the visitor's system has no mail
// handler registered, and the click looks broken. This button always works.
// It is rendered only after mount, so with JavaScript disabled the address
// stays a plain mailto link rather than a dead control.
export default function CopyEmail({
  value,
  copyLabel,
  copiedLabel,
}: {
  value: string;
  copyLabel: string;
  copiedLabel: string;
}) {
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  if (!mounted) return null;

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      // Clipboard denied or unavailable — the address stays selectable.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className="rounded-btn cursor-pointer border border-surface-dark px-2 py-1 text-[10px] font-semibold tracking-[0.1em] text-muted-dark uppercase transition-[border-color,color] hover:border-accent-light hover:text-accent-light"
    >
      {copied ? copiedLabel : copyLabel}
    </button>
  );
}
