'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Project } from '@/types/project';
import { urlFor } from '@/sanity/image';
import { useFlipTransition } from '@/hooks/useFlipTransition';

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  useFlipTransition(`project-${project.slug.current}`);

  const imageUrl =
    project.coverImage.asset?.url ||
    (project.coverImage.asset ? urlFor(project.coverImage.asset).url() : '/images/placeholder.webp');

  const metaItems = [project.category, project.location, project.year]
    .filter(Boolean)
    .join(' · ');

  return (
    <section
      aria-label={`${project.title} Hero`}
      className="relative w-full min-h-[70vh] lg:min-h-[85vh] bg-charcoal text-ink-on-dark flex flex-col justify-between overflow-hidden"
    >
      {/* Background Image — GSAP Flip landing point */}
      <div
        data-flip-id={`project-${project.slug.current}`}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={imageUrl}
          alt={project.coverImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-75"
        />
        {/* Subtle gradient vignette for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
      </div>

      {/* Top Navigation Bar */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-8 pt-8">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-ink-on-dark hover:text-paper transition-colors py-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-clay rounded-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Work</span>
        </Link>
      </div>

      {/* Bottom Overlaid Metadata */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-8 pb-12 sm:pb-16 pt-32">
        {metaItems && (
          <p className="type-label text-ink-on-dark-secondary mb-3">
            {metaItems}
          </p>
        )}
        <h1
          id="project-heading"
          tabIndex={-1}
          className="type-hero text-ink-on-dark max-w-4xl focus:outline-none"
        >
          {project.title}
        </h1>
      </div>
    </section>
  );
}
