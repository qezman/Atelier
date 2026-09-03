import React from 'react';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <span
      className={`type-label text-clay-text block mb-3 select-none ${className}`}
    >
      {children}
    </span>
  );
}
