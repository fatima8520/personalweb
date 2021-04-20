import enUs from "./en";
import faIr from "./fa";

const lang = localStorage.getItem("lang") ? localStorage.getItem("lang") : "en";
export { lang };

const direction = {
  fa: "rtl",
  en: "ltr",
};
function getDirection() {
  return direction[lang];
}
export { getDirection };

const fonts = {
  fa: "iransans",
  en: "Nunito",
};

function getFont() {
  return fonts[lang];
}
export { getFont };

const translates = {
  en: enUs,
  fa: faIr,
};
function getTranslate() {
  return translates[lang];
}
export { getTranslate };

function changeLanguage(newLang) {
  if (newLang === lang) {
    return
  }
  localStorage.setItem("lang", newLang);
  window.location.reload();
}
export { changeLanguage };
