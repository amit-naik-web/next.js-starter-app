import "server-only";
import type { Locale } from "@/i18n.config";

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  fe: () => import("@/dictionaries/fe.json").then((module) => module.default),
};

export default async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}
