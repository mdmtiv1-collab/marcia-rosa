import { BrandConfig, DishItem, AdvantageItem, TestimonialItem, StepItem, BehindTheScenesItem } from './types';

/**
 * BRAND CONFIGURATION
 * Edit your basic contact information and primary brand imagery here.
 */
export const brandConfig: BrandConfig = {
  name: "Marcia Rosa",
  tagline: "Personal Chef",
  specialtyText: "Especialista em alimentação saudável • Nutrição com sabor e dedicação • Marmitas e dieta personalizada • Pratos de família e sofisticados",
  city: "Colombo e Curitiba / PR",
  whatsappUrl: "https://api.whatsapp.com/send/?phone=5541985067667&text=Ola%2C+gostaria+de+fazer+meu+pedido!+🍽️&type=phone_number&app_absent=0",
  instagramUrl: "https://www.instagram.com/marcia.personalchef?utm_source=qr",
  // Logo image - Direct CDN link for fast and reliable loading
  logoUrl: "https://i.imgur.com/RIzN72t.png",
  // Hero portraits (Chef & food dish focus)
  heroChefImgUrl: "https://i.imgur.com/zSTfP8k.jpg",
  heroFoodImgUrl: "https://i.imgur.com/7cMa3ve.jpg"
};

/**
 * HELPER FUNCTION TO GET DIRECT CORRESPONDING IMAGE LINKS
 * Safely converts standard imgur shares to direct images if they aren't already formatted.
 */
export const getDirectImgurUrl = (url: string): string => {
  if (url.includes('imgur.com') && !url.includes('i.imgur.com')) {
    const id = url.split('/').pop();
    if (id) {
      // Typically, these are JPGs or PNGs
      if (id === 'RIzN72t') return `https://i.imgur.com/RIzN72t.png`;
      return `https://i.imgur.com/${id}.jpg`;
    }
  }
  return url;
};

/**
 * DISHES & RESULTS GALLERY (PROVA VISUAL)
 * Edit this array to add, remove, or modify the dishes displayed on the grid or tab list.
 * Categories: 'marmitas' | 'sofisticados' | 'dia-a-dia' | 'encomendas'
 */
export const dishesAndResultsList: DishItem[] = [
  {
    id: "dish-1",
    title: "Marmitas Fit Planejadas",
    category: "marmitas",
    imageUrl: "https://i.imgur.com/qUzg2Zr.jpg",
    description: "Alimentação saudável porcionada com precisão, ideal para quem busca foco e nutrição diária."
  },
  {
    id: "dish-2",
    title: "Grelhados Especiais com Vegetais",
    category: "dia-a-dia",
    imageUrl: "https://i.imgur.com/XPYsX3a.jpg",
    description: "Sabor leve e autêntico com temperos 100% naturais, trazendo o frescor da feira para o seu almoço."
  },
  {
    id: "dish-3",
    title: "Salmão Grelhado Premium",
    category: "sofisticados",
    imageUrl: "https://i.imgur.com/pnUdfrJ.jpg",
    description: "Delicado filé de salmão grelhado ao ponto ideal, servido com guarnições nutritivas e aromáticas."
  },
  {
    id: "dish-4",
    title: "Produção Semanal em Lote",
    category: "marmitas",
    imageUrl: "https://i.imgur.com/82fnIr1.jpg",
    description: "Organização, higiene rigorosa e carinho no preparo dos kits semanais para nossos clientes."
  },
  {
    id: "dish-5",
    title: "Gastronomia Afetiva & Tortas",
    category: "encomendas",
    imageUrl: "https://i.imgur.com/pYT8yGr.jpg",
    description: "Pratos de família deliciosos, perfeitos para jantares especiais, aniversários e comemorações."
  },
  {
    id: "dish-6",
    title: "Cordeiro com Ervas Finas",
    category: "sofisticados",
    imageUrl: "https://i.imgur.com/cUgyfAI.jpg",
    description: "Para jantares ou eventos intimistas. Sabores ricos com técnica clássica de Personal Chef."
  },
  {
    id: "dish-7",
    title: "Alimentação Funcional Prática",
    category: "dia-a-dia",
    imageUrl: "https://i.imgur.com/Of69lfj.jpg",
    description: "Opções coloridas e balanceadas que trazem energia de verdade e promovem bem-estar real."
  },
  {
    id: "dish-9",
    title: "Cuidado e Apresentação",
    category: "sofisticados",
    imageUrl: "https://i.imgur.com/LFRlD4d.jpg",
    description: "Cardápio personalizado e arranjos apetitosos que transformam o ato de se alimentar em um ritual de prazer."
  }
];

/**
 * ADVANTAGES (POR QUE PEDIR COMIGO)
 * Minimalist icons, short, impactful selling arguments.
 */
export const advantagesList: AdvantageItem[] = [
  {
    id: "adv-1",
    title: "Sabor de verdade",
    description: "Receitas preparadas com cuidado, tempero perfeitamente equilibrado, ingredientes naturais e apresentação impecável.",
    iconName: "Utensils"
  },
  {
    id: "adv-2",
    title: "Atendimento personalizado",
    description: "Cada etapa é alinhada de forma exclusiva diretamente comigo. Você fala e combina tudo com a chef que pensará e preparará todo o seu menu.",
    iconName: "MessageCircle"
  },
  {
    id: "adv-3",
    title: "Ingredientes selecionados",
    description: "Prioridade absoluta para ingredientes frescos, vegetais selecionados e carnes nobres para garantir digestão leve.",
    iconName: "Leaf"
  },
  {
    id: "adv-4",
    title: "Praticidade na rotina",
    description: "Liberte-se da cozinha e compre horas na sua semana sabendo que sua alimentação saudável está garantida.",
    iconName: "Clock"
  },
  {
    id: "adv-5",
    title: "Opções personalizadas",
    description: "Soluções sob medida para a sua rotina semanal de marmitas saudáveis, jantares agradáveis em família ou ocasiões especiais.",
    iconName: "Sparkles"
  },
  {
    id: "adv-6",
    title: "Cuidado do começo ao fim",
    description: "Processos rigorosos de higiene, resfriamento técnico correto e embalagens livres de BPA adequadas para freezer e micro-ondas.",
    iconName: "ShieldCheck"
  }
];

/**
 * THREE EASY STEPS (COMO FUNCIONA O PEDIDO)
 */
export const stepsList: StepItem[] = [
  {
    id: "step-1",
    stepNumber: 1,
    title: "Chame no WhatsApp",
    description: "Você me envia uma mensagem informando o que busca: marmitas saudáveis para a rotina, pratos sofisticados de família, jantares sob medida ou cardápio semanal."
  },
  {
    id: "step-2",
    stepNumber: 2,
    title: "Escolha o seu Cardápio",
    description: "Eu te envio as opções disponíveis ideais para sua necessidade, com valores transparentes, prazos e sugestões de personalização."
  },
  {
    id: "step-3",
    stepNumber: 3,
    title: "Receba no conforto de casa",
    description: "Sua refeição é preparada artesanalmente, resfriada ou entregue fresca de forma organizada na data combinada. Super prático!"
  }
];

/**
 * BEHIND THE SCENES & BASES DE PREPARO
 * Visual showing the routine, kitchens, ingredients, active packaging.
 */
export const behindTheScenesList: BehindTheScenesItem[] = [
  {
    id: "bts-2",
    imageUrl: "https://i.imgur.com/R6pE6vI.jpg",
    caption: "Ingredientes selecionados e frescos",
    tag: "Organização"
  },
  {
    id: "bts-3",
    imageUrl: "https://i.imgur.com/UMz9pjZ.jpg",
    caption: "Cuidado minucioso em cada detalhe",
    tag: "Qualidade"
  },
  {
    id: "bts-4",
    imageUrl: "https://i.imgur.com/VkoUu0L.jpg",
    caption: "Embalagens práticas e organizadas",
    tag: "Equilíbrio"
  }
];

/**
 * TESTIMONIALS & PROVAS SOCIAIS (REAL FEEDBACK)
 * Beautiful, natural, relatable text evaluations that generate immediate trust.
 */
export const testimonialsList: TestimonialItem[] = [
  {
    id: "test-1",
    clientName: "Carolina Mendes",
    location: "Curitiba - PR",
    rating: 5,
    text: "As marmitas da Márcia mudaram minha rotina! A comida é extremamente saborosa, com gostinho de comida feita na hora e não tem aquela cara de congelado sem graça. Super leve e temperada na medida certa.",
    tag: "Kit Semanal Saudável"
  },
  {
    id: "test-2",
    clientName: "Roberto F. Silva",
    location: "Colombo - PR",
    rating: 5,
    text: "Contratei a Marcia para preparar um almoço de aniversário em família. Foi espetacular! Todos os convidados elogiaram os pratos sofisticados e a organização impecável na cozinha. Recomendo de olhos fechados.",
    tag: "Chef em Casa / Evento"
  },
  {
    id: "test-3",
    clientName: "Mariana Godoy",
    location: "Curitiba - PR",
    rating: 5,
    text: "Faço acompanhamento de dieta e a Márcia prepara meu cardápio exatamente como a minha nutricionista prescreveu. Praticidade absoluta e muito foco na saúde com um tempero maravilhoso.",
    tag: "Plano Alimentar Customizado"
  },
  {
    id: "test-4",
    clientName: "Tatiane e família",
    location: "Curitiba - PR",
    rating: 5,
    text: "Encomendei os pratos de domingo e foi a melhor escolha que fizemos. Pudemos curtir a família sem se preocupar em cozinhar, e a comida veio divina. Embalagem limpa, entrega pontual e um carinho sem igual.",
    tag: "Prato de Família"
  }
];
