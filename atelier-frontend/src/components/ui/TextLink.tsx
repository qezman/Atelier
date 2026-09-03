import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface TextLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onDark?: boolean;
}

export function TextLink({ href, children, className = '', onDark = false }: TextLinkProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-sm tracking-[0.14em] uppercase transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-clay rounded-sm ${
        onDark
          ? 'text-ink-on-dark hover:text-paper'
          : 'text-ink hover:text-clay-text'
      } ${className}`}
    >
      <span className="relative py-0.5">
        {children}
        <span
          className={`absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 ease-out group-hover:w-full ${
            onDark ? 'bg-paper' : 'bg-clay'
          }`}
        />
      </span>
      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
    </Link>
  );
}
