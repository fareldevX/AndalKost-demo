import { useEffect } from "react";
import { X } from "lucide-react";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";

/**
 * Reusable dialog shell supporting ESC key dismissal and click-outside backdrop close
 */
export default function Modal({
  isOpen,
  onClose,
  maxWidth = "max-w-lg",
  className = "",
  ariaLabel = "Dialog",
  children,
}) {
  useBodyScrollLock(isOpen);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#171717]/80 p-4 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        aria-label={ariaLabel}
        aria-modal="true"
        className={`relative max-h-[95vh] w-full overflow-y-auto border border-[#171717] bg-[#F5F4EF] ${maxWidth} ${className}`}
        role="dialog"
        tabIndex={-1}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 border border-[#171717] bg-[#F5F4EF] p-2 text-[#171717] transition-colors hover:bg-[#171717] hover:text-[#F5F4EF]"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>
        {children}
      </div>
    </div>
  );
}
