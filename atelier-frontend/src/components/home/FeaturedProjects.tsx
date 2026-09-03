import type { Project } from '@/types/project';
import { ProjectCard } from '@/components/work/ProjectCard';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { TextLink } from '@/components/ui/TextLink';

interface FeaturedProjectsProps {
  projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <section
      aria-label="Selected Projects"
      className="w-full bg-paper py-16 sm:py-24 lg:py-32 px-5 sm:px-8 border-b border-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <SectionLabel>SELECTED WORK</SectionLabel>
            <h2 className="type-headline text-ink">
              Quiet sanctuaries, crafted for permanence.
            </h2>
          </div>
          <div>
            <TextLink href="/work">All projects</TextLink>
          </div>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start">
          {projects[0] && (
            <div className="lg:col-span-7">
              <ProjectCard
                project={projects[0]}
                aspectRatio="16/10"
                priority
              />
            </div>
          )}

          {projects[1] && (
            <div className="lg:col-span-5 lg:pt-16">
              <ProjectCard
                project={projects[1]}
                aspectRatio="4/5"
              />
            </div>
          )}

          {projects[2] && (
            <div className="lg:col-span-6">
              <ProjectCard
                project={projects[2]}
                aspectRatio="3/2"
              />
            </div>
          )}

          {projects[3] && (
            <div className="lg:col-span-6 lg:pt-8">
              <ProjectCard
                project={projects[3]}
                aspectRatio="3/2"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
