import { motion } from 'motion/react';
import { MessageCircle, Clock, Check } from 'lucide-react';
import { brandConfig } from '../data';

export default function FinalCTA() {
  return (
    <section className="py-16 bg-white px-4 border-t border-gray-100 relative">
      <div className="max-w-3xl mx-auto text-center">
        {/* Floating Accent Icon */}
        <div className="w-12 h-12 rounded-full bg-chef-green-light text-chef-green flex items-center justify-center mx-auto mb-4 border border-chef-gold/30">
          <MessageCircle className="w-6 h-6 text-chef-gold" />
        </div>

        {/* Dynamic Title */}
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-chef-green mb-3 tracking-tight">
          Pronto para fazer seu pedido ou conhecer o cardápio?
        </h2>

        {/* Direct conversion subtext */}
        <p className="text-sm md:text-base text-chef-muted max-w-xl mx-auto mb-8 leading-relaxed">
          Sem burocracias ou cadastros chatos. Me chama diretamente no WhatsApp agora mesmo para tirar qualquer dúvida e escolher as opções que vão salvar sua rotina, agradar sua família ou coroar sua ocasião especial.
        </p>

        {/* Closing conversion targets */}
        <div className="flex flex-col items-center justify-center gap-3">
          <motion.a
            id="final-cta-btn"
            href={brandConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4.5 bg-emerald-600 hover:bg-emerald-500 text-white text-base font-bold rounded-xl shadow-xl shadow-emerald-600/20 transition-all cursor-pointer"
          >
            <MessageCircle className="w-6 h-6 fill-current" />
            <span>Chamar no WhatsApp agora</span>
          </motion.a>

          {/* Core confidence assertions */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2 text-xs font-semibold text-chef-green">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-chef-gold font-bold" /> Reposta Rápida em Minutos
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-chef-gold font-bold" /> Atendimento 100% Humano e Direto
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
