import { writable } from "svelte/store";
import { translations } from "./translations.ts";

export const currentLang = writable("it");
export const t = writable(translations["it"]);

// Funzione per cambiare lingua
export function setLanguage(lang: "it" | "en") {
  currentLang.set(lang);
  t.set(translations[lang]);
}
