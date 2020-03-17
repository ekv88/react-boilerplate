import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import { initReactI18next } from "react-i18next";
// import * as http from  './http.js';

// Log missing translations to improve website in future
const logMissing = (lng, ns, key, fallbackValue) => {
    if(!i18n || !i18n.language) return false;
    //http.get(`/i18n/missing/${i18n.language}/${ns}/${key}/${fallbackValue}`).then(response => console.log(response)).catch(error => {});
};

i18n
    .use(XHR)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        lng: 'en',
        appendNamespaceToCIMode: true,
        saveMissing: true, // Change to true later
        missingKeyHandler: logMissing, // function(lng, ns, key, fallbackValue) -> override if prefer on handling
        ns: ['home', 'about'],
        fallbackNS: 'global',
        defaultNS: 'global', // NB! default is 'translation' if none defined
        debug: false,
        interpolation: {
            escapeValue: false, // not needed for react!!
            formatSeparator: ',',
            format: (value, format, lng) =>
                format === 'uppercase' ? value.toUpperCase() : value
        },
        backend: {
            // Load translations from public asset folder depending on selected NS and lng
            loadPath: '/i18n/{{ns}}/{{lng}}.json'
        },
        react: {
            useSuspense: false,
            wait: true,
            bindI18n: 'languageChanged loaded'
        }
    } );

export default i18n;