import { sanityFetch } from '@/sanity/fetch';
import { FEATURED_PROJECTS_QUERY } from '@/sanity/queries';
import type { Project } from '@/types/project';
import { Hero } from '@/components/home/Hero';
import { PullQuote } from '@/components/home/PullQuote';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';

export default async function HomePage() {
  const projects = await sanityFetch<Project[]>(
    FEATURED_PROJECTS_QUERY,
    {},
    ['project']
  );

  return (
    <main>
      <Hero />
      <PullQuote />
      <FeaturedProjects projects={projects} />
    </main>
  );
}
