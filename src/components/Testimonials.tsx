import { Star, Quote, MessageCircle, Heart } from 'lucide-react';
import { testimonialsList } from '../data';

export default function Testimonials() {
  return (
    <section className="py-12 bg-chef-sand px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title Block */}
        <div className="text-center mb-10">
          <span className="text-chef-gold font-mono text-xs uppercase tracking-widest font-semibold block mb-2">
            Opinião de Clientes
          </span>
          <h2 className="font-serif text-3xl font-bold text-chef-green">
            Provas Sociais & Avaliações
          </h2>
          <p className="text-sm text-chef-muted mt-2 max-w-lg mx-auto leading-relaxed">
            Nada fala melhor sobre o nosso cuidado do que a experiência de quem senta à mesa para comer nossos pratos diariamente.
          </p>
        </div>

        {/* Testimonials Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {testimonialsList.map((test) => {
            return (
              <div
                key={test.id}
                className="p-6 rounded-2xl bg-white border border-gray-150/40 shadow-sm flex flex-col justify-between h-full relative group hover:shadow-md transition-shadow"
              >
                {/* Visual Quote Top Right Decorator */}
                <Quote className="absolute top-5 right-5 w-8 h-8 text-chef-gold/10 group-hover:text-chef-gold/25 transition-colors pointer-events-none" />

                {/* Stars and Content */}
                <div>
                  <div className="flex items-center gap-0.5 mb-3.5">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-chef-gold fill-current" />
                    ))}
                  </div>

                  <p className="text-xs md:text-sm text-chef-dark leading-relaxed italic mb-4">
                    "{test.text}"
                  </p>
                </div>

                {/* Client Metas */}
                <div className="flex items-center justify-between pt-3.5 border-t border-gray-100 mt-auto">
                  <div>
                    <span className="block text-xs font-bold text-chef-green leading-tight">
                      {test.clientName}
                    </span>
                    <span className="text-[10px] text-chef-muted font-medium font-mono">
                      {test.location}
                    </span>
                  </div>

                  {/* Tag highlighting their ordered service */}
                  <span className="px-2.5 py-1 rounded bg-chef-green-light text-chef-green text-[10px] font-bold tracking-wide uppercase">
                    {test.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* WhatsApp Direct link prompt */}
        <div className="mt-8 text-center">
          <p className="text-xs text-chef-muted">
            Quer ver mais depoimentos ou fotos de entregas diárias? Me acompanhe no Instagram ou peça referências no privado!
          </p>
        </div>

        {/* Mandated discrete notice terms of variation */}
        <div className="mt-4 text-center">
          <p className="text-[10px] text-chef-muted/75 italic select-none">
            *Experiências podem variar conforme o pedido específico, restrições alimentares do cliente, disponibilidade de agenda e necessidade nutricional de cada cliente.
          </p>
        </div>
      </div>
    </section>
  );
}
