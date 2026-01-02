import { z } from 'zod';

// ============================================
// ÉNUMÉRATION DES TONALITÉS
// ============================================

export const ToneSchema = z.enum([
  'rouge',
  'orange',
  'jaune',
  'vert',
  'bleu',
  'indigo',
  'violet',
]);

export type Tone = z.infer<typeof ToneSchema>;

// ============================================
// SCHÉMA DU PERSONNAGE
// ============================================

export const PersonnageSchema = z.object({
  id: z.string().min(1, 'ID requis'),
  nom: z.string().min(1, 'Nom requis').max(100, 'Nom trop long'),
  chance: z.number().int().min(0).max(10),
  equipe: z.string().min(1, 'Équipe requise'),
  origine: z.string().min(1, 'Origine requise'),
  traitsParticuliers: z.string().min(1, 'Traits requis'),
  essence: z.string().min(1, 'Essence requise'),
  excentricite: z.string().min(1, 'Excentricité requise'),
  donColore: z.string().optional(),
  image: z.string().min(1).optional().or(z.literal('')),
  tone: ToneSchema,
});

export type Personnage = z.infer<typeof PersonnageSchema>;

// ============================================
// SCHÉMA DE PALETTE DE COULEURS
// ============================================

export const ColorPaletteSchema = z.object({
  primary: z.string().regex(/^#[0-9A-F]{6}$/i, 'Couleur primaire invalide'),
  secondary: z.string().regex(/^#[0-9A-F]{6}$/i, 'Couleur secondaire invalide'),
  accent: z.string().regex(/^#[0-9A-F]{6}$/i, 'Couleur accent invalide'),
  gradient: z.string(),
  border: z.string().regex(/^#[0-9A-F]{6}$/i, 'Couleur border invalide'),
  background: z.string(),
  text: z.string().regex(/^#[0-9A-F]{6}$/i, 'Couleur texte invalide'),
  bgLight: z.string(),
  bgDark: z.string(),
});

export type ColorPalette = z.infer<typeof ColorPaletteSchema>;

// ============================================
// FONCTIONS DE VALIDATION
// ============================================

export const validatePersonnage = (data: unknown): Personnage => {
  const result = PersonnageSchema.parse(data);
  return result;
};

export const validateColorPalette = (data: unknown): ColorPalette => {
  const result = ColorPaletteSchema.parse(data);
  return result;
};

// ============================================
// TYPES POUR LES ERREURS
// ============================================

export type ValidationError = z.ZodError;