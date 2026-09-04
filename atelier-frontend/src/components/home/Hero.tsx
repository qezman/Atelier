import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TextLink } from "@/components/ui/TextLink";

export function Hero() {
  return (
    <section
      aria-label="Studio Introduction"
      className="relative w-full min-h-[calc(100vh-5rem)] flex items-center bg-paper border-b border-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 py-12 sm:py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center">
        {/* Left Column: 55% (~7/12 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center pr-0 lg:pr-8">
          <SectionLabel>ATELIER</SectionLabel>

          <h1 className="type-hero text-ink mb-6 sm:mb-8 max-w-2xl">
            Spaces that hold <em className="italic font-normal">memory</em>.
          </h1>

          <p className="type-body text-ink-secondary max-w-[380px] mb-8 sm:mb-10 text-sm sm:text-base">
            We sculpt light, raw materials, and architectural volume into quiet
            sanctuaries for living and working.
          </p>

          <div>
            <TextLink href="/work">View our work</TextLink>
          </div>
        </div>

        {/* Right Column: 45% (~5/12 cols) tight architectural crop */}
        <div className="lg:col-span-5 h-[320px] sm:h-[460px] lg:h-[640px] relative w-full overflow-hidden bg-border/40">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85"
            alt="Minimalist board-formed concrete pavilion bathed in early morning daylight"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
