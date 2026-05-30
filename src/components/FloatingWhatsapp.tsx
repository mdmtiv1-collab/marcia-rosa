import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { brandConfig } from '../data';

export default function FloatingWhatsapp() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-none select-none">
      
      {/* Main floating action button asset */}
      <motion.a
        id="floating-whatsapp-btn"
        href={brandConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full shadow-2xl flex items-center justify-center pointer-events-auto border-2 border-white hover:border-emerald-100 relative group cursor-pointer transition-transform"
        aria-label="Chamar Chef Marcia Rosa no WhatsApp"
      >
        {/* Pulsating background ring overlay */}
        <span className="absolute -inset-1.5 rounded-full border-2 border-emerald-500/30 animate-ping pointer-events-none"></span>
        
        <MessageCircle className="w-7 h-7 fill-current" />
      </motion.a>
    </div>
  );
}
