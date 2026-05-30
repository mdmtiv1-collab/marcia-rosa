import { motion } from 'motion/react';
import { UserCheck, Star, Heart, Award, Shield, Sparkles } from 'lucide-react';
import { brandConfig } from '../data';

export default function AboutMe() {
  const highlights = [
    { text: "Atendimento personalizado da escolha à entrega", icon: UserCheck },
    { text: "Preparo 100% caseiro e artesanal, rico em afeto", icon: Heart },
    { text: "Ingredientes frescos de feira e fornecedores locais", icon: Star },
    { text: "Opções personalizadas para rotina, família ou ocasiões", icon: Sparkles },
    { text: "Organização cirúrgica e higiene em todas as etapas", icon: Shield },
    { text: "Segurança de entrega pontual combinada por região", icon: Award },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Column 1: Image container with golden frames */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[280px] aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-chef-sand">
              <img
                src={brandConfig.heroChefImgUrl}
                alt="Chef Márcia Rosa preparando pratos de alta gastronomia e saudáveis"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chef-green/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 text-white">
                <span className="font-serif text-lg font-bold block">Marcia Rosa</span>
                <span className="text-xs text-chef-gold font-mono uppercase tracking-widest font-medium">Sua Chef Pessoal</span>
              </div>
            </div>
          </div>

          {/* Column 2: Emotional Copywriting in 1st Person */}
          <div className="md:col-span-7">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-chef-green mb-4 leading-tight">
              Sua rotina mais leve, sem abrir mão do <span className="font-serif italic text-chef-gold font-bold">sabor e da saúde</span>.
            </h2>

            <div className="text-sm md:text-base text-chef-muted space-y-4 mb-6 leading-relaxed">
              <p>
                Olá! Eu sou a <strong>Marcia Rosa</strong>, apaixonada por transformar ingredientes simples em refeições vibrantes, cheias de sabor, nutrição de verdade e com aquela memória afetiva deliciosa que acolhe a alma.
              </p>
              <p>
                Diferente de grandes indústrias de comida congelada ou clínicas artificiais de estética, o meu foco é <strong>humano e puro</strong>. Eu cozinho como cozinharia para a minha própria família: com dedicação, higiene impecável, vegetais de verdade e processos que mantêm a integridade nutricional e o verdadeiro sabor da comida.
              </p>
              <p>
                Cada prato é planejado individualmente, respeitando as suas preferências e facilitando o seu dia a dia. Seja para o seu almoço corporativo, marmitas de reeducação para a semana ou pratos especiais de fim de semana, meu compromisso é entregar carinho e praticidade extrema.
              </p>
            </div>

            {/* List of custom bullet differentiators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 border-t border-gray-100">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="p-1 rounded bg-chef-green-light text-chef-green shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5 text-chef-gold" />
                    </div>
                    <span className="text-xs md:text-sm text-chef-dark font-medium leading-normal">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
