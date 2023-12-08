import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    'News': 'News',
                    'Read more': 'Read more',
                    'Author': 'Author',
                    'Source': 'Source',
                    'APPLE': 'APPLE',
                    'META': 'META',
                    'NETFLIX': 'NETFLIX',
                    'GOOGLE': 'GOOGLE',
                    'TWITTER': 'TWITTER',
                    'TESLA': 'TESLA'
                },
            },
            ar: {
                translation: {
                    'News': 'أخبار',
                    'Read more': 'اقرأ أكثر',
                    'Author': 'مؤلف',
                    'Source': 'مصدر',
                    'APPLE': 'ابل',
                    'META': 'ميتا',
                    'NETFLIX': 'نتفليكس',
                    'GOOGLE': 'جوجل',
                    'TWITTER': 'تويتر',
                    'TESLA': 'تسلا'
                },
            },
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;