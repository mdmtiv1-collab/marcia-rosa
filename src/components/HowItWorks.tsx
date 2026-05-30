import { stepsList } from '../data';

export default function HowItWorks() {
  return (
    <section className="py-12 bg-white px-4 border-b border-gray-100/50">
      <div className="max-w-4xl mx-auto">
        {/* Header Block */}
        <div className="text-center mb-10">
          <span className="text-chef-gold font-mono text-xs uppercase tracking-widest font-semibold block mb-2">
            Passo a Passo
          </span>
          <h2 className="font-serif text-3xl font-bold text-chef-green">
            Como funciona o pedido?
          </h2>
          <p className="text-sm text-chef-muted mt-2 max-w-md mx-auto leading-relaxed">
            Preparar pratos de qualidade e saudáveis é o meu trabalho. Pedir para a sua rotina é ultra simples em 3 etapas:
          </p>
        </div>

        {/* Steps container */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
          {/* Decorative Horizontal Line connector (desktop only) */}
          <div className="hidden md:block absolute top-7 left-12 right-12 h-0.5 bg-dashed bg-chef-gold/20 -z-0"></div>

          {stepsList.map((step, idx) => {
            return (
              <div
                key={step.id}
                className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left group"
              >
                {/* Step indicator circle */}
                <div className="w-14 h-14 rounded-full bg-chef-green-light group-hover:bg-chef-green text-chef-green group-hover:text-white flex items-center justify-center font-serif text-xl font-bold border-2 border-chef-gold/25 shadow-sm transition-all duration-300 mb-4 font-mono select-none">
                  {step.stepNumber}
                </div>

                {/* Step Copy */}
                <h3 className="font-serif text-lg font-bold text-chef-green mb-2 tracking-tight group-hover:text-chef-gold transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-xs md:text-sm text-chef-muted leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
