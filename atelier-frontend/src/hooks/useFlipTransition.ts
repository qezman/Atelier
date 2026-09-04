'use client';

import { useEffect } from 'react';
import { gsap, Flip } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function useFlipTransition(flipId?: string) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    // Focus management: ensure keyboard & screen reader focus is not stranded
    // on the unmounted grid thumbnail after navigation
    const heading = document.getElementById('project-heading');

    if (reducedMotion) {
      if (heading) {
        heading.focus({ preventScroll: true });
      }
      return;
    }

    if (!flipId) {
      if (heading) {
        heading.focus({ preventScroll: true });
      }
      return;
    }

    const target = document.querySelector(`[data-flip-id="${flipId}"]`);
    if (!target) {
      if (heading) {
        heading.focus({ preventScroll: true });
      }
      return;
    }

    // Capture state or animate smoothly into position
    const ctx = gsap.context(() => {
      gsap.from(target, {
        opacity: 0.9,
        scale: 0.98,
        duration: 0.6,
        ease: 'power2.out',
        onComplete: () => {
          if (heading) {
            heading.focus({ preventScroll: true });
          }
        },
      });
    });

    return () => ctx.revert();
  }, [flipId, reducedMotion]);
}
