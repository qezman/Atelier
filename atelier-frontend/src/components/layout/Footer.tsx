import Link from 'next/link';
import { IconBrandInstagram, IconBrandPinterest, IconBrandLinkedin } from '@tabler/icons-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-ink-on-dark border-t border-border-on-dark mt-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 pb-12 border-b border-border-on-dark">
          <div className="md:col-span-2 space-y-4">
            <span className="font-display text-2xl tracking-tight text-ink-on-dark block">
              ATELIER
            </span>
            <p className="text-sm text-ink-on-dark-secondary max-w-sm leading-relaxed">
              An architecture and interior design studio crafting timeless spaces shaped by raw materials, daylight, and tectonic discipline.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-ink-on-dark">
              Studio
            </p>
            <p className="text-sm text-ink-on-dark-secondary leading-relaxed">
              42 Rue Jacob, 75006 Paris<br />
              Kanonengasse 19, 4051 Basel<br />
              <a
                href="mailto:hello@atelier.studio"
                className="text-ink-on-dark hover:text-paper underline underline-offset-4 decoration-border-on-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-clay"
              >
                hello@atelier.studio
              </a>
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-ink-on-dark">
              Follow
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Atelier on Instagram"
                className="text-ink-on-dark-secondary hover:text-ink-on-dark transition-colors p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-clay"
              >
                <IconBrandInstagram size={20} stroke={1.5} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Atelier on Pinterest"
                className="text-ink-on-dark-secondary hover:text-ink-on-dark transition-colors p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-clay"
              >
                <IconBrandPinterest size={20} stroke={1.5} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Atelier on LinkedIn"
                className="text-ink-on-dark-secondary hover:text-ink-on-dark transition-colors p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-clay"
              >
                <IconBrandLinkedin size={20} stroke={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-ink-on-dark-secondary gap-4">
          <p>© {currentYear} Atelier Architecture & Design Studio. All rights reserved.</p>
          <p className="tracking-wide">Kyoto · Paris · Basel</p>
        </div>
      </div>
    </footer>
  );
}
