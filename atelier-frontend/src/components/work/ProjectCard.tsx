import Link from "next/link";
import type { Project } from "@/types/project";
import { RevealImage } from "@/components/ui/RevealImage";
import { urlFor } from "@/sanity/image";

interface ProjectCardProps {
  project: Project;
  aspectRatio?: string;
  className?: string;
  priority?: boolean;
}

export function ProjectCard({
  project,
  aspectRatio = "4/3",
  className = "",
  priority = false,
}: ProjectCardProps) {
  // resolve image URL whether from Sanity asset reference or direct fallback URL
  const imageUrl =
    project.coverImage.asset?.url ||
    (project.coverImage.asset
      ? urlFor(project.coverImage.asset).url()
      : "/images/placeholder.webp");

  const metaItems = [project.category, project.location, project.year]
    .filter(Boolean)
    .join(", ");

  return (
    <article className={`group flex flex-col ${className}`}>
      <Link
        href={`/work/${project.slug.current}`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-clay rounded-sm"
        aria-label={`View project: ${project.title}`}
      >
        <div data-flip-id={`project-${project.slug.current}`}>
          <RevealImage
            src={imageUrl}
            alt={project.coverImage.alt}
            aspectRatio={aspectRatio}
            priority={priority}
            className="w-full"
          />
        </div>

        <div className="mt-3.5 flex items-baseline justify-between text-xs sm:text-sm">
          <h3 className="font-medium text-ink group-hover:text-clay-text transition-colors">
            {project.title}
          </h3>
          {metaItems && (
            <span className="type-caption text-ink-secondary text-right ml-4">
              {metaItems}
            </span>
          )}
        </div>
      </Link>
    </article>
  );
}
