import { motion } from 'motion/react';
import { MessageCircle, HelpCircle } from 'lucide-react';
import { brandConfig } from '../data';

export default function InterstateCTA() {
  return (
    <section className="py-12 bg-chef-green text-white px-4 relative overflow-hidden">
      {/* Decorative Warm Backlight */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-chef-gold/5 blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-chef-gold/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Decorative Badge */}
        <div className="p-2 bg-white/5 inline-flex items-center gap-2 rounded-full border border-white/10 text-chef-gold text-xs font-semibold uppercase tracking-wider mb-4">
          <HelpCircle className="w-3.5 h-3.5" />
          Dúvidas Frequentes
        </div>

        {/* High-Impact Copywriting */}
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 max-w-2xl mx-auto leading-tight">
          Quer comer melhor durante a semana ou encomendar algo especial sem complicação?
        </h2>

        <p className="text-sm md:text-base text-gray-300 mb-8 max-w-lg mx-auto leading-relaxed">
          Me chama no WhatsApp e eu te explico de forma simples e rápida as opções disponíveis de cardápio, valores exatos para sua região e datas de entrega.
        </p>

        {/* Double Contact Target Button */}
        <div className="flex flex-col items-center gap-3">
          <motion.a
            id="interstate-cta-btn"
            href={brandConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-chef-gold hover:bg-chef-gold-hover text-chef-green font-bold rounded-xl shadow-lg shadow-black/10 transition-all text-sm tracking-wide cursor-pointer"
          >
            <MessageCircle className="w-4.5 h-4.5 fill-current" />
            <span>Falar no WhatsApp</span>
          </motion.a>
          
          <span className="text-[11px] md:text-xs text-gray-400 font-medium">
            Atendimento rápido • Sem compromisso • Resposta direta da Chef
          </span>
        </div>
      </div>
    </section>
  );
}
