import { SectionLabel } from '@/components/ui/SectionLabel';
import { TextLink } from '@/components/ui/TextLink';

export function ContactCta() {
  return (
    <section
      aria-label="Contact Studio"
      className="w-full bg-paper py-28 md:py-36 px-6 sm:px-8 flex justify-center items-center text-center"
    >
      <div className="max-w-xl space-y-6">
        <SectionLabel>ENQUIRIES</SectionLabel>

        <h2 className="type-headline text-ink">
          Start a project.
        </h2>

        <p className="type-body text-ink-secondary max-w-md mx-auto">
          We accept a select number of architectural and interior commissions each year to maintain uncompromising craftsmanship.
        </p>

        <div className="pt-4 flex justify-center">
          <TextLink href="/contact">Begin a conversation</TextLink>
        </div>
      </div>
    </section>
  );
}
