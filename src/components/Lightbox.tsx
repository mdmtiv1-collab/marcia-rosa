import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { brandConfig } from '../data';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: Array<{ url: string; title?: string; caption?: string }>;
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  isOpen,
  onClose,
  images,
  currentIndex,
  onPrev,
  onNext
}: LightboxProps) {
  // Prevent body scroll when lightbox is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  // Helper to make custom WhatsApp message with context
  const getWhatsAppMessageForDish = (title?: string) => {
    const textMsg = title 
      ? `Olá Chef Marcia! Vi a foto de "${title}" no seu site e gostaria de saber as opções de cardápio disponíveis para essa refeição!`
      : "Olá Chef Marcia! Gostaria de fazer meu pedido de marmitas ou pratos personalizados!";
    return `https://api.whatsapp.com/send/?phone=5541985067667&text=${encodeURIComponent(textMsg)}`;
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8 select-none">
        {/* Backdrop background close handler */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 cursor-zoom-out"
          onClick={onClose}
        />

        {/* Floating Close Button */}
        <button
          id="lightbox-close-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          aria-label="Fechar lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Carousel Container */}
        <div className="relative w-full max-w-4xl h-full max-h-[80vh] flex flex-col justify-center items-center z-10">
          
          {/* Main Visual Image */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="relative flex items-center justify-center w-full h-full"
          >
            <img
              src={currentImage.url}
              alt={currentImage.title || "Resultado visual"}
              referrerPolicy="no-referrer"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl select-none"
            />
          </motion.div>

          {/* Navigational Arrows (Only show if multiple images) */}
          {images.length > 1 && (
            <>
              <button
                id="lightbox-prev-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev();
                }}
                className="absolute left-0 md:-left-12 lg:-left-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none cursor-pointer"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
              </button>

              <button
                id="lightbox-next-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                className="absolute right-0 md:-right-12 lg:-right-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none cursor-pointer"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </>
          )}

          {/* Micro Caption Bar (Bottom) */}
          <div className="absolute -bottom-16 left-0 right-0 text-center text-white px-4">
            <h4 className="font-serif text-lg md:text-xl font-medium tracking-wide">
              {currentImage.title || "Resultado Real"}
            </h4>
            {currentImage.caption && (
              <p className="text-xs md:text-sm text-gray-400 mt-1 max-w-md mx-auto line-clamp-2">
                {currentImage.caption}
              </p>
            )}
            
            {/* Quick Context-Based WhatsApp Action */}
            <div className="mt-3 flex justify-center">
              <a
                href={getWhatsAppMessageForDish(currentImage.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold text-white shadow-lg transition-all transform hover:scale-105"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                Quero encomendar este prato
              </a>
            </div>
          </div>
        </div>

        {/* Floating Index Counter */}
        <div className="absolute bottom-4 right-4 text-xs font-mono text-white/50 bg-black/30 px-3 py-1 rounded-full">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </AnimatePresence>
  );
}
