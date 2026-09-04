import type { Metadata } from 'next';
import { sanityFetch } from '@/sanity/fetch';
import { STUDIO_MEMBERS_QUERY } from '@/sanity/queries';
import type { StudioMember } from '@/types/studioMember';
import { TeamMemberCard } from '@/components/studio/TeamMemberCard';
import { SectionLabel } from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Studio — Atelier Architecture & Design',
  description: 'Learn about our philosophy, leadership team, and architectural ethos.',
};

export default async function StudioPage() {
  const members = await sanityFetch<StudioMember[]>(
    STUDIO_MEMBERS_QUERY,
    {},
    ['studioMember']
  );

  return (
    <main className="min-h-screen bg-paper py-16 sm:py-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-20 lg:space-y-28">
        {/* Studio Hero Section */}
        <header className="max-w-3xl space-y-6">
          <SectionLabel>ABOUT THE STUDIO</SectionLabel>
          <h1 className="type-hero text-ink">
            The studio
          </h1>
          <p className="type-title text-ink font-normal leading-relaxed">
            We believe that architecture is an act of listening. Before sketching an elevation or defining a boundary, we study prevailing winds, solar angles, and the geological history of the ground beneath our feet.
          </p>
          <p className="type-body text-ink-secondary leading-relaxed">
            Founded across studios in Paris, Basel, and Kyoto, Atelier operates with a quiet conviction: spaces should not shout for attention. True luxury is found in proportions that breathe, light that shifts softly across lime plaster, and materials that age with dignified grace.
          </p>
        </header>

        {/* Team Grid */}
        <section aria-label="Studio Team" className="space-y-12">
          <div className="border-t border-border pt-12">
            <SectionLabel>LEADERSHIP & ARCHITECTURE</SectionLabel>
            <h2 className="type-headline text-ink mb-12">
              The team
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
              {members.map((member) => (
                <TeamMemberCard key={member._id} member={member} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
