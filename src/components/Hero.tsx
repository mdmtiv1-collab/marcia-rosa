import { motion } from 'motion/react';
import { MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { brandConfig } from '../data';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white to-chef-sand py-5 md:py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-6 items-center">
          {/* Mobile-Only Header Block (shows on mobile only, above the culinary image) */}
          <div className="w-full text-center md:hidden mb-1">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-chef-green/10 text-chef-green text-[10px] font-semibold uppercase tracking-wider mb-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-chef-gold animate-pulse"></span>
              Especialista em Nutrição com Sabor
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-2xl font-bold tracking-tight text-chef-green leading-snug px-2"
            >
              Eu sou <span className="text-chef-gold font-serif italic font-bold">Marcia Rosa</span>,<br />e preparo comida de verdade para a sua rotina.
            </motion.h1>
          </div>

          {/* Column 2: Spotlight Culinary Image - Positioned right below headline on mobile */}
          <div className="w-full md:col-span-5 order-2 md:order-2">
            <div className="flex flex-col gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative w-full max-w-xs mx-auto aspect-[1.1/1] xs:aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lg border-4 border-white bg-slate-100"
              >
                {/* Decorative background border */}
                <div className="absolute -inset-2 rounded-[2rem] border-2 border-dashed border-chef-gold/30 -rotate-2 pointer-events-none"></div>

                <img
                  src={brandConfig.heroFoodImgUrl}
                  alt="Delicioso e apetitoso prato saudável preparado pela Chef Marcia"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top select-none"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <span className="absolute bottom-4 left-4 text-[10px] font-mono font-bold uppercase tracking-widest text-black bg-chef-gold px-2.5 py-0.5 rounded-full shadow-lg border border-white/15">
                  Sabor Real & Nutrição
                </span>
              </motion.div>

              {/* Status Badge below the spotlight image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/95 backdrop-blur-sm p-2.5 rounded-xl border border-chef-gold/20 shadow-sm flex items-center justify-between gap-2 max-w-xs mx-auto w-full"
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-[10px] font-bold text-chef-green">Colombo & Curitiba</span>
                </div>
                <span className="text-[9px] font-bold text-chef-gold font-mono uppercase tracking-wider">
                  Pedidos Rápidos
                </span>
              </motion.div>
            </div>
          </div>

          {/* Column 1: Copywriting Text - Placed below image on mobile, left on Desktop */}
          <div className="w-full md:col-span-7 flex flex-col justify-center order-3 md:order-1 text-center md:text-left">
            {/* Desktop-Only Header Block */}
            <div className="hidden md:block">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-chef-green/10 text-chef-green text-xs font-semibold uppercase tracking-wider mb-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-chef-gold animate-pulse"></span>
                Especialista em Nutrição com Sabor
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-serif text-3xl lg:text-4xl font-bold tracking-tight text-chef-green mb-3 leading-tight"
              >
                Eu sou <span className="text-chef-gold font-serif italic font-bold">Marcia Rosa</span>,<br />e preparo comida de verdade para a sua rotina.
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xs md:text-sm text-chef-muted mb-4 leading-relaxed max-w-xl mx-auto md:mx-0 mt-3 md:mt-0"
            >
              Pratos preparados com atenção máxima aos detalhes, ingredientes frescos selecionados e aquele cuidado caseiro essencial que transforma uma refeição saudável em uma verdadeira experiência gastronômica premium.
            </motion.p>

            {/* Quick trust metrics */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4 text-xs text-chef-dark font-medium"
            >
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-chef-gold" />
                <span>Marmitas Personalizadas</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-chef-gold" />
                <span>Pratos de Família Premium</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-chef-gold" />
                <span>Atendimento Personalizado</span>
              </div>
            </motion.div>

            {/* Call to Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center md:items-start gap-2"
            >
              <motion.a
                id="hero-cta-btn"
                href={brandConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all text-sm tracking-wide cursor-pointer group"
              >
                <MessageCircle className="w-4 h-4 fill-current animate-bounce" />
                <span>Pedir cardápio no WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 text-white/75 group-hover:translate-x-0.5 transition-transform" />
              </motion.a>
              <span className="text-[10px] md:text-xs text-chef-muted font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                Atendimento rápido • Sem compromissos ou cadastros
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
