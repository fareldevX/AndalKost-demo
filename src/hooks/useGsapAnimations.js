import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsapAnimations(containerRef) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!container || prefersReducedMotion) return undefined;

    const context = gsap.context(() => {
      gsap
        .timeline()
        .from(".hero-line-inner", {
          yPercent: 100,
          duration: 1.2,
          stagger: 0.1,
          ease: "power4.out",
          delay: 0.2,
        })
        .from(
          ".hero-img",
          {
            scale: 1.1,
            opacity: 0,
            duration: 1.5,
            ease: "power3.out",
          },
          "-=1",
        )
        .from(
          ".hero-meta",
          { opacity: 0, y: 20, duration: 1, ease: "power2.out" },
          "-=1",
        );

      container.querySelectorAll(".img-parallax").forEach((image) => {
        gsap.to(image, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: image.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      container.querySelectorAll(".reveal-text").forEach((element) => {
        gsap.from(element, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 85%" },
        });
      });

      container.querySelectorAll(".divider-expand").forEach((element) => {
        gsap.fromTo(
          element,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            duration: 1,
            ease: "power3.inOut",
            scrollTrigger: { trigger: element, start: "top 90%" },
          },
        );
      });

      const aboutText = container.querySelector(".about-text");
      if (aboutText) {
        gsap.fromTo(
          aboutText.querySelectorAll(".scrub-word"),
          { opacity: 0.2 },
          {
            opacity: 1,
            stagger: 0.1,
            ease: "none",
            scrollTrigger: {
              trigger: aboutText,
              start: "top 75%",
              end: "bottom 50%",
              scrub: true,
            },
          },
        );
      }
    }, container);

    return () => context.revert();
  }, [containerRef]);
}
