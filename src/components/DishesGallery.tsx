import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Info, MessageSquare } from 'lucide-react';
import { dishesAndResultsList, brandConfig } from '../data';
import Lightbox from './Lightbox';

export default function DishesGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1);

  const filteredDishes = dishesAndResultsList;

  return (
    <section className="py-12 bg-chef-sand px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title Block */}
        <span className="text-chef-gold font-mono text-xs uppercase tracking-widest font-semibold block mb-2">
          Galeria de Sabores
        </span>
        <h2 className="font-serif text-3xl font-bold text-chef-green mb-3">
          Pratos e Resultados Reais
        </h2>
        <p className="text-sm text-chef-muted max-w-xl mx-auto mb-8 leading-relaxed">
          Comida de verdade, preparada com amor de casa e finalização profissional. Clique em qualquer foto para navegar!
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 text-left">
          <AnimatePresence mode="popLayout">
            {filteredDishes.map((dish, index) => {
              // Find the absolute index in main array for Lightbox navigation
              const globalIndex = dishesAndResultsList.findIndex(item => item.id === dish.id);
              
              return (
                <motion.div
                  layout
                  key={dish.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setLightboxIndex(globalIndex)}
                  className="group relative cursor-zoom-in overflow-hidden rounded-xl border-2 border-white shadow-sm hover:shadow-md transition-shadow aspect-[4/3] w-full bg-slate-50"
                >
                  <img
                    src={dish.imageUrl}
                    alt={dish.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Hover Overlay Visual indicator */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-2.5 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30 transform scale-90 group-hover:scale-100 transition-transform">
                      <Search className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Disclaimers Notice */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-chef-muted">
          <Info className="w-4 h-4 shrink-0 text-chef-gold" />
          <span className="italic">
            As opções do cardápio semanal e mensal podem variar conforme a disponibilidade, região e agenda da Chef.
          </span>
        </div>
      </div>

      {/* Reusable Lightbox - Triggered when selectedIndex >= 0 */}
      <Lightbox
        isOpen={lightboxIndex >= 0}
        onClose={() => setLightboxIndex(-1)}
        images={dishesAndResultsList.map(dish => ({
          url: dish.imageUrl,
          title: dish.title,
          caption: dish.description
        }))}
        currentIndex={lightboxIndex}
        onPrev={() => setLightboxIndex(prev => prev > 0 ? prev - 1 : dishesAndResultsList.length - 1)}
        onNext={() => setLightboxIndex(prev => prev < dishesAndResultsList.length - 1 ? prev + 1 : 0)}
      />
    </section>
  );
}
