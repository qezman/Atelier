import type { SanityImage } from '@/types/project';
import { RevealImage } from '@/components/ui/RevealImage';
import { urlFor } from '@/sanity/image';

interface ProjectGalleryProps {
  gallery?: SanityImage[];
}

export function ProjectGallery({ gallery }: ProjectGalleryProps) {
  if (!gallery || gallery.length === 0) return null;

  return (
    <section
      aria-label="Project Gallery"
      className="w-full bg-paper py-20 lg:py-28 px-6 sm:px-8 border-b border-border"
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {gallery.map((image, index) => {
            const imageUrl =
              image.asset?.url ||
              (image.asset ? urlFor(image.asset).url() : '/images/placeholder.webp');

            // Rhythm: Index 0, 3, 6... span full 12 cols; indices 1, 2 span 6 cols each
            const isFullWidth = index % 3 === 0;
            const colSpan = isFullWidth ? 'lg:col-span-12' : 'lg:col-span-6';
            const aspectRatio = isFullWidth ? '16/9' : '4/5';

            return (
              <figure key={index} className={`${colSpan} w-full space-y-3`}>
                <RevealImage
                  src={imageUrl}
                  alt={image.alt}
                  aspectRatio={aspectRatio}
                  sizes={isFullWidth ? '100vw' : '(max-width: 1024px) 100vw, 50vw'}
                  className="w-full"
                />
                {image.alt && (
                  <figcaption className="type-caption text-ink-secondary text-xs sm:text-sm pl-1">
                    {image.alt}
                  </figcaption>
                )}
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
