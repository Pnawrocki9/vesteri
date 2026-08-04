'use client';

import { useEffect, useRef, useState } from 'react';

export type NavLink = { label: string; href: string };

// Hamburger menu for viewports below `lg`, where the inline nav links are
// hidden. Links arrive as plain hrefs already resolved for the active
// locale, so this stays a dumb presentational component.
export default function MobileNav({
  links,
  openLabel,
  closeLabel,
}: {
  links: NavLink[];
  openLabel: string;
  closeLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Escape closes and hands focus back to the trigger; a click outside just
  // closes.
  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    function onPointerDown(event: PointerEvent) {
      const target = event.target as Node;
      if (!panelRef.current?.contains(target) && !buttonRef.current?.contains(target)) {
        setOpen(false);
      }
    }

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [open]);

  const bar =
    'block h-[2px] w-full bg-ink transition-transform duration-200 ease-out motion-reduce:transition-none';

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? closeLabel : openLabel}
        onClick={() => setOpen((value) => !value)}
        className="flex h-8 w-8 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-btn px-1 sm:h-9 sm:w-9 sm:px-1.5 lg:hidden"
      >
        <span
          className={`${bar} ${open ? 'translate-y-[7px] rotate-45' : ''}`}
          aria-hidden="true"
        />
        <span
          className={`${bar} ${open ? 'scale-x-0' : ''} origin-center transition-transform`}
          aria-hidden="true"
        />
        <span
          className={`${bar} ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          ref={panelRef}
          id="mobile-nav"
          className="absolute top-full right-0 left-0 flex flex-col border-b border-line bg-paper-alt px-4 pb-4 sm:px-6 lg:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href + link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-t border-line py-4 text-[13px] font-semibold tracking-[0.1em] uppercase transition-colors hover:text-accent-deep"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
