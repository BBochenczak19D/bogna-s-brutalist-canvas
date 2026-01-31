import { useEffect, useState } from "react";

interface ImageLightboxProps {
  image: string;
  title?: string;
  details?: string;
  onClose: () => void;
}

const ImageLightbox = ({ image, title, details, onClose }: ImageLightboxProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Animate in on mount
  useEffect(() => {
    requestAnimationFrame(() => setIsVisible(true));
  }, []);

  // Handle close with animation
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 200);
  };

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

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
