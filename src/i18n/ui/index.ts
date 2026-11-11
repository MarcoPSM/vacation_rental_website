import type { Locale } from '../locales.ts';
import type { UiStrings } from './types.ts';
import { en } from './en.ts'; // lang:en
import { pt } from './pt.ts'; // lang:pt

export type { UiStrings } from './types.ts';

/** Interface texts by language. Register a new language file here. */
export const UI: Partial<Record<Locale, UiStrings>> = {
  en, // lang:en
  pt, // lang:pt
};

export const UI_LOCALES = Object.keys(UI) as Locale[];
