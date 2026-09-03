import type { Metadata } from 'next';
import { sanityFetch } from '@/sanity/fetch';
import { ALL_PROJECTS_QUERY } from '@/sanity/queries';
import type { Project } from '@/types/project';
import { ProjectGrid } from '@/components/work/ProjectGrid';
import { SectionLabel } from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Work — Atelier Architecture & Interiors',
  description: 'Selected architecture, interior design, and landscape architecture projects.',
};

export default async function WorkPage() {
  const projects = await sanityFetch<Project[]>(
    ALL_PROJECTS_QUERY,
    {},
    ['project']
  );

  return (
    <main className="min-h-screen bg-paper py-16 sm:py-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <header className="mb-14 sm:mb-20 max-w-2xl">
          <SectionLabel>PORTFOLIO</SectionLabel>
          <h1 className="type-headline text-ink mb-4">
            Work
          </h1>
          <p className="type-body text-ink-secondary">
            A comprehensive survey of built architecture, residential renovations, and bespoke spatial environments.
          </p>
        </header>

        {/* Project Grid with Client Category Filter */}
        <ProjectGrid projects={projects} />
      </div>
    </main>
  );
}
