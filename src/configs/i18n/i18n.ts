import i18n from "i18next";

import { initReactI18next } from "react-i18next";

import { translationEN } from "./en";
import { translationJP } from "./jp";

const resources = {
  en: { translation: translationEN },
  jp: { translation: translationJP },
};

void i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "jp",
  debug: false,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

const I18n = i18n;
const t = (args: string) => I18n.t(args);

export { I18n, t };
