'use client';

import { useState, useMemo } from 'react';
import type { Project } from '@/types/project';
import { ProjectCard } from '@/components/work/ProjectCard';
import { CategoryFilter, type CategoryFilterType } from '@/components/work/CategoryFilter';

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilterType>('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [projects, activeCategory]);

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Category Filter Pills */}
      <div className="flex justify-start">
        <CategoryFilter
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
      </div>

      {/* Asymmetric Repeating Grid */}
      {filteredProjects.length === 0 ? (
        <div className="py-20 text-center">
          <p className="type-body text-ink-secondary">
            No projects found in the {activeCategory.toLowerCase()} category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {filteredProjects.map((project, index) => {
            // Cycle through asymmetric column layouts: 7/12, 5/12, 6/12, 6/12
            const mod = index % 4;
            let colSpan = 'lg:col-span-6';
            let ptClass = '';
            let aspectRatio = '3/2';

            if (mod === 0) {
              colSpan = 'lg:col-span-7';
              aspectRatio = '16/10';
            } else if (mod === 1) {
              colSpan = 'lg:col-span-5';
              ptClass = 'lg:pt-16';
              aspectRatio = '4/5';
            } else if (mod === 3) {
              ptClass = 'lg:pt-8';
            }

            return (
              <div key={project._id} className={`${colSpan} ${ptClass} w-full`}>
                <ProjectCard
                  project={project}
                  aspectRatio={aspectRatio}
                  priority={index < 2}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
