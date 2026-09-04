// Portable Text is rendered via @portabletext/react rather than
// manually, since Sanity's rich text format has nested mark types
// that are easy to get wrong by hand.
import { PortableText, type PortableTextComponents } from '@portabletext/react';

interface ProjectBodyProps {
  summary?: string;
  body?: any[];
}

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="type-body text-ink mb-6 leading-relaxed">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="type-title text-ink mt-12 mb-4">{children}</h2>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-clay pl-6 my-8 italic text-ink-secondary">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target ? 'noreferrer noopener' : undefined}
          className="text-clay-text underline underline-offset-4 hover:text-ink transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-clay"
        >
          {children}
        </a>
      );
    },
  },
};

export function ProjectBody({ summary, body }: ProjectBodyProps) {
  if (!summary && (!body || body.length === 0)) return null;

  return (
    <section
      aria-label="Project Narrative"
      className="w-full bg-paper py-20 lg:py-28 px-6 sm:px-8 border-b border-border"
    >
      <div className="max-w-[680px] mx-auto">
        {summary && (
          <div className="mb-12">
            <p className="type-title text-ink leading-relaxed font-normal">
              {summary}
            </p>
          </div>
        )}

        {body && body.length > 0 && (
          <div className="prose prose-neutral max-w-none">
            <PortableText value={body} components={portableTextComponents} />
          </div>
        )}
      </div>
    </section>
  );
}
