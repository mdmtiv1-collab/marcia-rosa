import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { advantagesList } from '../data';

export default function WhyChooseMe() {
  return (
    <section className="py-12 bg-white px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-chef-gold font-mono text-xs uppercase tracking-widest font-semibold block mb-2">
            Nossos Valores
          </span>
          <h2 className="font-serif text-3xl font-bold text-chef-green">
            Por que pedir comigo?
          </h2>
          <p className="text-sm text-chef-muted max-w-lg mx-auto mt-2 leading-relaxed">
            Diferenciais pensados para elevar a sua rotina e garantir satisfação do primeiro contato até o último garfo.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {advantagesList.map((adv) => {
            // Dynamically resolve icon based on data property name
            const IconComponent = (LucideIcons as any)[adv.iconName] || LucideIcons.HelpCircle;

            return (
              <motion.div
                key={adv.id}
                whileHover={{ y: -4 }}
                className="p-5 rounded-2xl bg-chef-sand/50 h-full border border-gray-150/40 hover:bg-white hover:border-chef-gold/25 hover:shadow-lg hover:shadow-chef-green/5 transition-all flex flex-col items-start text-left"
              >
                {/* Minimalist icon block */}
                <div className="p-3 bg-chef-green-light rounded-xl text-chef-green mb-4 border border-chef-green/5">
                  <IconComponent className="w-5 h-5 text-chef-gold" />
                </div>

                {/* Card Title */}
                <h3 className="font-serif text-lg font-bold text-chef-green mb-2 tracking-tight">
                  {adv.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs md:text-sm text-chef-muted leading-relaxed">
                  {adv.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
