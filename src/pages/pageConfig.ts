import { ComponentType } from 'react';
import TisselapaletteContent from './char_sheets/tisselapalette';
import VermillonContent from './char_sheets/vermillon';

export const PAGE_IDS = {
  TISSELAPALETTE: '550e8400-e29b-41d4-a716-446655440000',
  VERMILLON: '550e8400-e29b-41d4-a716-446655440001',
};

interface PageConfig {
  component: ComponentType<{}>;
  title: string;
  description: string;
}

export const pageRegistry: Record<string, PageConfig> = {
  [PAGE_IDS.TISSELAPALETTE]: {
    component: TisselapaletteContent,
    title: 'Madame Tisselapalette',
    description: ''
  },
  [PAGE_IDS.VERMILLON]: {
    component: VermillonContent,
    title: 'Monsieur Vermillon',
    description: ''
  },
};