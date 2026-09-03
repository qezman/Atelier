export function PullQuote() {
  return (
    <section
      aria-label="Studio Philosophy"
      className="w-full bg-paper py-28 md:py-44 px-6 sm:px-8 border-b border-border flex justify-center items-center"
    >
      <div className="max-w-[720px] text-center space-y-6">
        <blockquote className="type-headline italic font-normal text-ink leading-relaxed">
          &ldquo;We design from the inside out &mdash; a room is a feeling before it is a floor plan.&rdquo;
        </blockquote>
        <cite className="type-caption block not-italic tracking-wider uppercase text-[11px] text-ink-tertiary">
          &mdash; Elena Vance, Founding Partner
        </cite>
      </div>
    </section>
  );
}
