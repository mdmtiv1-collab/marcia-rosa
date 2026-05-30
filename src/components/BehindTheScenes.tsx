import { useState } from 'react';
import { motion } from 'motion/react';
import { Eye, Clock } from 'lucide-react';
import { behindTheScenesList } from '../data';
import Lightbox from './Lightbox';

export default function BehindTheScenes() {
  const [activeBtsIndex, setActiveBtsIndex] = useState<number>(-1);

  return (
    <section className="py-12 bg-white px-4 border-b border-gray-100/50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header Block */}
        <span className="text-chef-gold font-mono text-xs uppercase tracking-widest font-semibold block mb-2">
          Higiene & Carinho
        </span>
        <h2 className="font-serif text-3xl font-bold text-chef-green mb-3">
          Bastidores e Dia a Dia na Cozinha
        </h2>
        <p className="text-sm text-chef-muted max-w-xl mx-auto mb-8 leading-relaxed">
          Transparência absoluta. Veja o cuidado com a seleção de embalagens livres de BPA, temperos naturais frescos e a organização intocável do preparo.
        </p>

        {/* Bastidores Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {behindTheScenesList.map((item, idx) => {
            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -4 }}
                onClick={() => setActiveBtsIndex(idx)}
                className="relative cursor-zoom-in group overflow-hidden rounded-2xl border border-gray-150/40 shadow-sm bg-chef-sand"
              >
                {/* Visual Image container */}
                <div className="aspect-square w-full overflow-hidden bg-gray-50 relative">
                  <img
                    src={item.imageUrl}
                    alt={item.caption}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none"
                  />
                  
                  {/* Glassmorphic visual overlay */}
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="flex flex-col items-center gap-1 text-white">
                      <Eye className="w-5 h-5 text-chef-gold" />
                      <span className="text-[10px] font-semibold tracking-wider uppercase">Visualizar</span>
                    </div>
                  </div>

                  {/* Top-Floating Micro category */}
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-chef-green/90 text-white text-[9px] font-mono uppercase tracking-widest font-bold">
                    {item.tag || "Bastidores"}
                  </div>
                </div>

                {/* Subtitle / Caption block */}
                <div className="p-3 text-left bg-white">
                  <p className="text-xs font-bold text-chef-green leading-snug tracking-tight">
                    {item.caption}
                  </p>
                  <span className="text-[10px] text-chef-muted font-medium flex items-center gap-1 mt-1 font-mono uppercase">
                    <Clock className="w-3 h-3 text-chef-gold" />
                    Preparo Fresco
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Behind the scenes Lightbox hook */}
      <Lightbox
        isOpen={activeBtsIndex >= 0}
        onClose={() => setActiveBtsIndex(-1)}
        images={behindTheScenesList.map(item => ({
          url: item.imageUrl,
          title: item.caption,
          caption: `Bastidores Márcia Personal Chef - Cuidado em cada detalhe.`
        }))}
        currentIndex={activeBtsIndex}
        onPrev={() => setActiveBtsIndex(prev => prev > 0 ? prev - 1 : behindTheScenesList.length - 1)}
        onNext={() => setActiveBtsIndex(prev => prev < behindTheScenesList.length - 1 ? prev + 1 : 0)}
      />
    </section>
  );
}
