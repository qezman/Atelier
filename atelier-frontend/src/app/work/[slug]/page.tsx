import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { sanityFetch } from '@/sanity/fetch';
import { PROJECT_BY_SLUG_QUERY, NEXT_PROJECT_QUERY } from '@/sanity/queries';
import type { Project } from '@/types/project';
import { ProjectHero } from '@/components/project/ProjectHero';
import { ProjectBody } from '@/components/project/ProjectBody';
import { ProjectGallery } from '@/components/project/ProjectGallery';
import { NextProject } from '@/components/project/NextProject';

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const project = await sanityFetch<Project | null>(
    PROJECT_BY_SLUG_QUERY,
    { slug: params.slug },
    ['project']
  );

  if (!project) {
    return {
      title: 'Project Not Found — Atelier',
    };
  }

  return {
    title: `${project.title} — Atelier Architecture`,
    description: project.summary || `${project.title}, ${project.category} project by Atelier.`,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = await sanityFetch<Project | null>(
    PROJECT_BY_SLUG_QUERY,
    { slug: params.slug },
    ['project']
  );

  if (!project) {
    notFound();
  }

  const nextProject = await sanityFetch<Project | null>(
    NEXT_PROJECT_QUERY,
    { currentOrderRank: project.orderRank || 0 },
    ['project']
  );

  return (
    <article className="min-h-screen bg-paper flex flex-col">
      <ProjectHero project={project} />
      <ProjectBody summary={project.summary} body={project.body} />
      <ProjectGallery gallery={project.gallery} />
      {nextProject && <NextProject nextProject={nextProject} />}
    </article>
  );
}
