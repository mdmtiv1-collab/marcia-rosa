import { motion } from 'motion/react';
import { MapPin, Instagram } from 'lucide-react';
import { brandConfig } from '../data';

export default function Header() {
  return (
    <header className="w-full bg-white/85 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand Logo Identity */}
        <div className="flex items-center gap-3">
          <img
            src={brandConfig.logoUrl}
            alt="Marcia Rosa - Personal Chef Logo"
            referrerPolicy="no-referrer"
            className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border border-chef-gold/25"
          />
          <div>
            <span className="font-serif text-base md:text-lg font-bold tracking-wider text-chef-green block leading-tight">
              {brandConfig.name}
            </span>
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-chef-gold font-medium block">
              {brandConfig.tagline}
            </span>
          </div>
        </div>

        {/* Location & Instagram Quick Meta */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-chef-muted font-medium">
            <MapPin className="w-3.5 h-3.5 text-chef-gold" />
            <span>Colombo / Curitiba</span>
          </div>
          
          <motion.a
            href={brandConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-chef-green-light hover:bg-chef-green/10 text-chef-green text-xs font-semibold tracking-wide transition-colors cursor-pointer"
            aria-label="Acessar Instagram de Marcia Rosa"
          >
            <Instagram className="w-3.5 h-3.5 text-chef-gold" />
            <span className="hidden xs:inline">@marcia.personalchef</span>
          </motion.a>
        </div>
      </div>
    </header>
  );
}
