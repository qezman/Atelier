'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface RevealImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imageClassName?: string;
  aspectRatio?: string;
}

export function RevealImage({
  src,
  alt,
  fill = true,
  width,
  height,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  className = '',
  imageClassName = '',
  aspectRatio,
}: RevealImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const el = imageWrapperRef.current;
    if (!el) return;

    if (reducedMotion) {
      gsap.set(el, { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 });
      return;
    }

    gsap.set(el, { clipPath: 'inset(100% 0% 0% 0%)' });

    const ctx = gsap.context(() => {
      gsap.to(el, {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          once: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <div
      ref={containerRef}
      style={aspectRatio ? { aspectRatio } : undefined}
      className={`relative overflow-hidden bg-border/20 ${className}`}
    >
      <div
        ref={imageWrapperRef}
        className="w-full h-full relative will-change-[clip-path]"
      >
        <Image
          src={src}
          alt={alt}
          fill={fill}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          priority={priority}
          sizes={sizes}
          className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] ${imageClassName}`}
        />
      </div>
    </div>
  );
}
