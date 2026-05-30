import { MapPin, Instagram, MessageCircle, Heart } from 'lucide-react';
import { brandConfig } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-chef-dark text-white py-12 px-4 selection:bg-chef-gold selection:text-chef-dark">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Core Chef Visual Mark */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src={brandConfig.logoUrl}
            alt="Márcia Rosa logo pequena"
            referrerPolicy="no-referrer"
            className="w-12 h-12 rounded-full object-cover border border-chef-gold/30 bg-white"
          />
          <div className="text-left">
            <span className="font-serif text-lg font-bold tracking-wider text-white block">
              {brandConfig.name}
            </span>
            <span className="text-[10px] font-mono text-chef-gold font-bold uppercase tracking-wider block">
              {brandConfig.tagline}
            </span>
          </div>
        </div>

        {/* Professional tag description */}
        <p className="text-xs text-gray-400 max-w-md mx-auto mb-6 leading-relaxed">
          🥦 Especialista em alimentação saudável • Nutrição com sabor e dedicação • 🥕 Marmitas e dieta personalizada • 👩🏻‍🍳 Pratos de família e sofisticados.
        </p>

        {/* Location line */}
        <div className="inline-flex items-center gap-1.5 text-xs text-gray-400 font-medium mb-6">
          <MapPin className="w-3.5 h-3.5 text-chef-gold" />
          <span>Colombo & Curitiba / PR (Região Metropolitana)</span>
        </div>

        {/* Quick Social profiles menu links */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <a
            href={brandConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 text-chef-gold hover:text-white flex items-center justify-center transition-colors shadow-sm"
            aria-label="Acessar Instagram da Chef Marcia Rosa"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href={brandConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 text-chef-gold hover:text-white flex items-center justify-center transition-colors shadow-sm"
            aria-label="Chamar Chef Marcia Rosa no WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
          </a>
        </div>

        {/* Separator Line */}
        <div className="w-full h-[1px] bg-white/10 mb-6"></div>

        {/* Disclaimers & Core Copyright tags */}
        <div className="text-[10px] md:text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between w-full h-full gap-4">
          <p>© {currentYear} {brandConfig.name} — Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito com <Heart className="w-3 h-3 text-red-500 fill-current" /> para Colombo e Curitiba
          </p>
        </div>
      </div>
    </footer>
  );
}
