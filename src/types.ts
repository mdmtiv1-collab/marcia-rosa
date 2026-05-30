/**
 * TYPE DEFINITIONS FOR MARCIA ROSA - PERSONAL CHEF
 * This file centralizes all content configurations to make edits simple.
 */

export interface BrandConfig {
  name: string;
  tagline: string;
  specialtyText: string;
  city: string;
  whatsappUrl: string;
  instagramUrl: string;
  logoUrl: string;
  heroChefImgUrl: string;
  heroFoodImgUrl: string;
}

export interface DishItem {
  id: string;
  title: string;
  category: 'marmitas' | 'sofisticados' | 'dia-a-dia' | 'encomendas';
  imageUrl: string;
  description: string;
}

export interface AdvantageItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // mapped to Lucide icons
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  location: string;
  rating: number;
  text: string;
  tag: string; // e.g. "Dieta Personalizada", "Almoço de Família"
}

export interface StepItem {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
}

export interface BehindTheScenesItem {
  id: string;
  imageUrl: string;
  caption: string;
  tag?: string;
}
