import type { Metadata } from 'next';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { EnquiryForm } from '@/components/contact/EnquiryForm';

export const metadata: Metadata = {
  title: 'Contact — Atelier Architecture & Interiors',
  description: 'Initiate a project consultation with Atelier studio partners.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-paper py-16 sm:py-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact details & studio coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <SectionLabel>CONSULTATION</SectionLabel>
              <h1 className="type-headline text-ink mb-6">
                Start a conversation.
              </h1>
              <p className="type-body text-ink-secondary leading-relaxed">
                Whether you are contemplating a private residence, a cultural space, or a comprehensive interior renovation, we welcome initial enquiries.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-border">
              <div>
                <p className="type-label text-ink-secondary mb-1">Paris Studio</p>
                <p className="text-sm text-ink leading-relaxed">
                  42 Rue Jacob, 75006 Paris, France<br />
                  +33 1 42 68 55 00
                </p>
              </div>

              <div>
                <p className="type-label text-ink-secondary mb-1">Basel Studio</p>
                <p className="text-sm text-ink leading-relaxed">
                  Kanonengasse 19, 4051 Basel, Switzerland<br />
                  +41 61 271 88 40
                </p>
              </div>

              <div>
                <p className="type-label text-ink-secondary mb-1">General Inquiries</p>
                <a
                  href="mailto:hello@atelier.studio"
                  className="text-sm text-clay-text hover:text-ink transition-colors underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-clay"
                >
                  hello@atelier.studio
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7 bg-paper-raised p-8 sm:p-12 border border-border">
            <h2 className="type-title text-ink mb-2">Project Brief</h2>
            <p className="type-caption text-ink-secondary mb-8">
              Please share key parameters regarding your project. A studio partner will review and respond within two business days.
            </p>
            <EnquiryForm />
          </div>
        </div>
      </div>
    </main>
  );
}
