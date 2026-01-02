import { ColorPalette, validateColorPalette } from '@site/src/types/types-validation';

// ============================================
// UTILITAIRES DE COULEUR
// ============================================

export const hexToRgb = (hex: string): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '0, 0, 0';
};

export const rgbString = (hex: string, opacity: number = 1): string => {
  const rgb = hexToRgb(hex);
  return `rgba(${rgb}, ${opacity})`;
};

// ============================================
// DÉFINITION DES PALETTES
// ============================================

const palettes: Record<string, ColorPalette> = {
  vert: validateColorPalette({
    primary: '#66bb6a',
    secondary: '#52c967',
    accent: '#4db8a0',
    gradient:
      'linear-gradient(90deg, #66bb6a 0%, #52c967 25%, #43c59b 50%, #3cbcad 75%, #34b5c1 100%)',
    border: '#81c784',
    background: 'linear-gradient(135deg, #d4edda 0%, #e2f5e0 50%, #d4edda 100%)',
    bgLight: '#f8fef9',
    bgDark: '#f0fdf2',
    text: '#1a1a1a',
  }),

  rouge: validateColorPalette({
    primary: '#d32f2f',
    secondary: '#f44336',
    accent: '#e64a19',
    gradient:
      'linear-gradient(90deg, #d32f2f 0%, #f44336 25%, #e64a19 50%, #d32f2f 75%, #c62828 100%)',
    border: '#e57373',
    background: 'linear-gradient(135deg, #ffebee 0%, #ffcdd2 50%, #ffebee 100%)',
    bgLight: '#fff8f8',
    bgDark: '#ffe0e0',
    text: '#1a1a1a',
  }),

  orange: validateColorPalette({
    primary: '#fb8c00',
    secondary: '#ff9800',
    accent: '#ff6f00',
    gradient:
      'linear-gradient(90deg, #fb8c00 0%, #ff9800 25%, #ff6f00 50%, #fb8c00 75%, #f57c00 100%)',
    border: '#ffb74d',
    background: 'linear-gradient(135deg, #ffe0b2 0%, #ffd699 50%, #ffe0b2 100%)',
    bgLight: '#fff8f0',
    bgDark: '#ffe8cc',
    text: '#1a1a1a',
  }),

  jaune: validateColorPalette({
    primary: '#fbc02d',
    secondary: '#fdd835',
    accent: '#f9a825',
    gradient:
      'linear-gradient(90deg, #fbc02d 0%, #fdd835 25%, #f9a825 50%, #fbc02d 75%, #f57f17 100%)',
    border: '#fff176',
    background: 'linear-gradient(135deg, #fff9c4 0%, #fffb8f 50%, #fff9c4 100%)',
    bgLight: '#fffef0',
    bgDark: '#fffbda',
    text: '#1a1a1a',
  }),

  bleu: validateColorPalette({
    primary: '#1976d2',
    secondary: '#2196f3',
    accent: '#0288d1',
    gradient:
      'linear-gradient(90deg, #1976d2 0%, #2196f3 25%, #0288d1 50%, #1976d2 75%, #1565c0 100%)',
    border: '#64b5f6',
    background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 50%, #e3f2fd 100%)',
    bgLight: '#f8fbff',
    bgDark: '#e8f4ff',
    text: '#1a1a1a',
  }),

  indigo: validateColorPalette({
    primary: '#3f51b5',
    secondary: '#5c6bc0',
    accent: '#283593',
    gradient:
      'linear-gradient(90deg, #3f51b5 0%, #5c6bc0 25%, #283593 50%, #3f51b5 75%, #3949ab 100%)',
    border: '#7986cb',
    background: 'linear-gradient(135deg, #e8eaf6 0%, #c5cae9 50%, #e8eaf6 100%)',
    bgLight: '#f5f5ff',
    bgDark: '#e8e8ff',
    text: '#1a1a1a',
  }),

  violet: validateColorPalette({
    primary: '#7b1fa2',
    secondary: '#9c27b0',
    accent: '#c2185b',
    gradient:
      'linear-gradient(90deg, #7b1fa2 0%, #9c27b0 25%, #c2185b 50%, #7b1fa2 75%, #6a1b9a 100%)',
    border: '#ce93d8',
    background: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 50%, #f3e5f5 100%)',
    bgLight: '#faf7ff',
    bgDark: '#f3e5f5',
    text: '#1a1a1a',
  }),
};

// ============================================
// EXPORT ET ACCESSEURS
// ============================================

export const getColorPalette = (tone: string): ColorPalette => {
  const palette = palettes[tone];
  if (!palette) {
    console.warn(`Tonalité "${tone}" non trouvée, utilisation de "vert" par défaut`);
    return palettes.vert;
  }
  return palette;
};

export const getAllPalettes = (): Record<string, ColorPalette> => palettes;