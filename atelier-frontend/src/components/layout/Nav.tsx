'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconMenu2, IconX } from '@tabler/icons-react';

const NAV_LINKS = [
  { href: '/work', label: 'Work' },
  { href: '/studio', label: 'Studio' },
  { href: '/contact', label: 'Contact' },
];

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-paper/90 backdrop-blur-sm border-b border-border transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-2 text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-clay rounded-sm"
          aria-label="Atelier Home"
        >
          <span className="font-display text-2xl tracking-tight text-ink group-hover:text-clay-text transition-colors">
            ATELIER
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={`text-[13px] tracking-[0.14em] uppercase transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-clay rounded-sm ${
                  isActive
                    ? 'text-clay-text font-medium'
                    : 'text-ink-secondary hover:text-ink'
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-clay" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-ink hover:text-clay-text focus:outline-none focus-visible:ring-2 focus-visible:ring-clay rounded-sm"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
        </button>
      </div>

      {/* Mobile Drawer (Editorial & Restrained, not a giant full-screen dark blob) */}
      {mobileOpen && (
        <div className="md:hidden border-b border-border bg-paper px-6 py-6 space-y-4">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-4">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm tracking-[0.14em] uppercase py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-clay ${
                    isActive ? 'text-clay-text font-medium' : 'text-ink-secondary hover:text-ink'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
