'use client';

export const CATEGORIES = ['All', 'Residential', 'Commercial', 'Interior', 'Landscape'] as const;

export type CategoryFilterType = (typeof CATEGORIES)[number];

interface CategoryFilterProps {
  activeCategory: string;
  onSelectCategory: (category: CategoryFilterType) => void;
  className?: string;
}

export function CategoryFilter({
  activeCategory,
  onSelectCategory,
  className = '',
}: CategoryFilterProps) {
  return (
    <div
      role="group"
      aria-label="Filter projects by category"
      className={`flex flex-wrap items-center gap-2 sm:gap-4 ${className}`}
    >
      {CATEGORIES.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelectCategory(category)}
            aria-pressed={isActive}
            className={`px-3.5 py-1.5 text-[12px] sm:text-[13px] tracking-[0.1em] uppercase transition-all duration-200 rounded-full border focus:outline-none focus-visible:ring-2 focus-visible:ring-clay ${
              isActive
                ? 'border-clay text-clay-text bg-clay-dim font-medium'
                : 'border-border text-ink-secondary hover:text-ink hover:border-border-strong bg-transparent'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
