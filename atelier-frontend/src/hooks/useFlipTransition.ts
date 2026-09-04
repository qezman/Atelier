"use client";

import { useEffect } from "react";
import { gsap, Flip } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function useFlipTransition(flipId?: string) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    // Focus moves to the project h1 immediately following the Flip transition
    // to prevent keyboard and screen reader focus from becoming stranded on the removed thumbnail.
    const heading = document.getElementById("project-heading");

    const handoverFocus = () => {
      if (heading) {
        if (!heading.hasAttribute("tabindex")) {
          heading.setAttribute("tabindex", "-1");
        }
        heading.focus({ preventScroll: true });
      }
    };

    if (reducedMotion || !flipId) {
      handoverFocus();
      return;
    }

    const target = document.querySelector(`[data-flip-id="${flipId}"]`);
    if (!target) {
      handoverFocus();
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(target, {
        opacity: 0.9,
        scale: 0.98,
        duration: 0.6,
        ease: "power2.out",
        onComplete: handoverFocus,
      });
    });

    return () => ctx.revert();
  }, [flipId, reducedMotion]);
}
