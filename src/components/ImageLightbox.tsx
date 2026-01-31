import { useEffect } from "react";

interface ImageLightboxProps {
  image: string;
  title?: string;
  details?: string;
  onClose: () => void;
}

const ImageLightbox = ({ image, title, details, onClose }: ImageLightboxProps) => {
  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 text-white/70 hover:text-white transition-colors"
        aria-label="Zamknij podgląd"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Image container */}
      <div 
        className="w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image}
          alt={title || "Podgląd obrazu"}
          className="max-w-[95vw] max-h-[90vh] object-contain"
          onClick={onClose}
        />
      </div>

      {/* Info at bottom */}
      {(title || details) && (
        <div className="absolute bottom-6 left-6 right-6 text-white/80 text-sm">
          {title && <p className="font-medium text-white">{title}</p>}
          {details && <p className="text-white/60">{details}</p>}
        </div>
      )}
    </div>
  );
};

export default ImageLightbox;
