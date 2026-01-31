import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageLightboxProps {
  image: string;
  title?: string;
  details?: string;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

const ImageLightbox = ({ 
  image, 
  title, 
  details, 
  onClose, 
  onPrev, 
  onNext, 
  hasPrev = false, 
  hasNext = false 
}: ImageLightboxProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Animate in on mount
  useEffect(() => {
    requestAnimationFrame(() => setIsVisible(true));
  }, []);

  // Handle close with animation
  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 200);
  }, [onClose]);

  // Handle ESC key and arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      } else if (e.key === "ArrowLeft" && hasPrev && onPrev) {
        onPrev();
      } else if (e.key === "ArrowRight" && hasNext && onNext) {
        onNext();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleClose, hasPrev, hasNext, onPrev, onNext]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8 transition-opacity duration-200 ${
        isVisible && !isClosing ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      {/* Close button */}
      <button
        onClick={handleClose}
        className="absolute top-6 right-6 z-10 text-white/70 hover:text-white transition-colors"
        aria-label="Zamknij podgląd"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Navigation arrows */}
      {hasPrev && onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white transition-colors p-2"
          aria-label="Poprzedni obraz"
        >
          <ChevronLeft size={48} strokeWidth={1} />
        </button>
      )}

      {hasNext && onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white transition-colors p-2"
          aria-label="Następny obraz"
        >
          <ChevronRight size={48} strokeWidth={1} />
        </button>
      )}

      {/* Image container */}
      <div 
        className={`w-full h-full flex items-center justify-center transition-all duration-200 ${
          isVisible && !isClosing ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image}
          alt={title || "Podgląd obrazu"}
          className="max-w-[95vw] max-h-[90vh] object-contain"
          onClick={handleClose}
        />
      </div>

      {/* Info at bottom */}
      {(title || details) && (
        <div className={`absolute bottom-6 left-6 right-6 text-white/80 text-sm transition-opacity duration-200 delay-100 ${
          isVisible && !isClosing ? "opacity-100" : "opacity-0"
        }`}>
          {title && <p className="font-medium text-white">{title}</p>}
          {details && <p className="text-white/60">{details}</p>}
        </div>
      )}
    </div>
  );
};

export default ImageLightbox;
