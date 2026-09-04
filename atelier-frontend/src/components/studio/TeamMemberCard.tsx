import type { StudioMember } from '@/types/studioMember';
import { RevealImage } from '@/components/ui/RevealImage';
import { urlFor } from '@/sanity/image';

interface TeamMemberCardProps {
  member: StudioMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const imageUrl =
    member.photo?.asset?.url ||
    (member.photo?.asset ? urlFor(member.photo.asset).url() : '/images/placeholder.webp');

  return (
    <article className="group flex flex-col space-y-4">
      {/* Portrait Photo */}
      <RevealImage
        src={imageUrl}
        alt={member.photo?.alt || `Portrait of ${member.name}`}
        aspectRatio="3/4"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="w-full"
      />

      {/* Member Details */}
      <div className="space-y-1.5 pt-1">
        <h2 className="type-title text-ink font-medium text-lg sm:text-xl">
          {member.name}
        </h2>

        {member.role && (
          <p className="type-label text-clay-text text-xs tracking-wider">
            {member.role}
          </p>
        )}

        {member.bio && (
          <p className="type-caption text-ink-secondary text-sm leading-relaxed pt-1">
            {member.bio}
          </p>
        )}
      </div>
    </article>
  );
}
