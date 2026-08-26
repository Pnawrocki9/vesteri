import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/**/*.test.ts'],
    // The store tests boot a miniflare workerd for a real D1 database.
    testTimeout: 30_000,
    hookTimeout: 60_000,
  },
});
