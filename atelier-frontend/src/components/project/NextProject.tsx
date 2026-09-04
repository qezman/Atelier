import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import type { Project } from '@/types/project';
import { urlFor } from '@/sanity/image';

interface NextProjectProps {
  nextProject: Project;
}

export function NextProject({ nextProject }: NextProjectProps) {
  const imageUrl =
    nextProject.coverImage.asset?.url ||
    (nextProject.coverImage.asset
      ? urlFor(nextProject.coverImage.asset).url()
      : '/images/placeholder.webp');

  return (
    <aside
      aria-label="Next Project"
      className="relative w-full bg-charcoal text-ink-on-dark overflow-hidden border-t border-border-on-dark"
    >
      <Link
        href={`/work/${nextProject.slug.current}`}
        className="group relative block w-full py-24 sm:py-32 px-6 sm:px-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-clay"
      >
        {/* Background Image with Hover Scale */}
        <div className="absolute inset-0 w-full h-full opacity-35 transition-transform duration-700 ease-out group-hover:scale-105">
          <Image
            src={imageUrl}
            alt={nextProject.coverImage.alt}
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-charcoal/60 group-hover:bg-charcoal/40 transition-colors duration-500" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="type-label text-ink-on-dark-secondary block">
              NEXT PROJECT
            </span>

            <h2 className="type-headline text-ink-on-dark relative inline-block">
              {nextProject.title}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-paper transition-all duration-300 ease-out group-hover:w-full" />
            </h2>

            <p className="type-caption text-ink-on-dark-secondary">
              {nextProject.category} · {nextProject.location}
            </p>
          </div>

          <div className="flex items-center gap-3 text-ink-on-dark group-hover:text-paper transition-colors">
            <span className="type-label">Explore project</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
          </div>
        </div>
      </Link>
    </aside>
  );
}
