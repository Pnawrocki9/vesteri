'use client';

import { useEffect, useState } from 'react';

// Copy-to-clipboard for the affiliate code — same progressive-enhancement
// pattern as CopyEmail: rendered only after mount, so without JavaScript the
// code is still plain selectable text.
export default function CopyCode({
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
      // Clipboard denied — the code stays selectable.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="rounded-btn border border-line bg-paper px-4 py-2 text-[13px] font-semibold hover:border-accent hover:text-accent-deep"
    >
      {copied ? copiedLabel : copyLabel}
    </button>
  );
}
