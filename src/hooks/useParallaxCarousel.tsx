import { useEffect, useRef } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

export const useParallaxCarousel = (api: CarouselApi | undefined) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isScrollingCarousel = useRef(false);

  useEffect(() => {
    if (!api || !sectionRef.current) return;

    const section = sectionRef.current;
    const scrollContainer = api.scrollSnapList();
    const totalSlides = scrollContainer.length;

    const handleScroll = (e: WheelEvent) => {
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const isInView = rect.top <= 100 && rect.bottom >= window.innerHeight * 0.5;

      if (!isInView) {
        isScrollingCarousel.current = false;
        return;
      }

      const currentIndex = api.selectedScrollSnap();
      const isAtStart = currentIndex === 0 && e.deltaY < 0;
      const isAtEnd = currentIndex === totalSlides - 1 && e.deltaY > 0;

      if (isAtStart || isAtEnd) {
        isScrollingCarousel.current = false;
        return;
      }

      // We're in the carousel zone
      e.preventDefault();
      isScrollingCarousel.current = true;

      // Scroll the carousel based on wheel delta
      if (e.deltaY > 0) {
        api.scrollNext();
      } else {
        api.scrollPrev();
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [api]);

  return sectionRef;
};
