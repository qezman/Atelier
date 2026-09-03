import { SectionLabel } from '@/components/ui/SectionLabel';
import { TextLink } from '@/components/ui/TextLink';
import { RevealImage } from '@/components/ui/RevealImage';

export function StudioStrip() {
  return (
    <section
      aria-label="Studio Approach"
      className="w-full bg-charcoal text-ink-on-dark py-24 lg:py-32 px-6 sm:px-8 border-b border-border-on-dark"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left column: editorial text */}
        <div className="lg:col-span-7 space-y-6">
          <SectionLabel className="text-clay">OUR PRACTICE</SectionLabel>

          <h2 className="type-headline text-ink-on-dark max-w-xl">
            Material honesty and enduring proportion.
          </h2>

          <p className="type-body text-ink-on-dark-secondary max-w-lg">
            Atelier operates across architecture, interior spatial design, and site ecology. Working from studios in Paris, Basel, and Kyoto, we collaborate directly with local stonemasons, master timber framers, and artisans to realize spaces of uncompromising tectonic integrity.
          </p>

          <div className="pt-4">
            <TextLink href="/studio" onDark>
              Learn about the studio
            </TextLink>
          </div>
        </div>

        {/* Right column: portrait photograph */}
        <div className="lg:col-span-5">
          <RevealImage
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=85"
            alt="Atelier design workshop showcasing raw stone samples, architectural joinery models, and natural daylight"
            aspectRatio="3/4"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
