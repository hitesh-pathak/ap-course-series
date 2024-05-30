import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  // for all options: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        // default NS
        translation: {
          navbar: {
            home: 'Home',
            live_sess: 'Live Sessions',
            video_series: 'Video Series',
            ap_books: 'AP Books',
            ap_articles: 'AP Articles',
            invite: 'Invite',
            in_media: 'In Media',
            careers: 'Careers',
            donate: 'Donate',
          },
        },
      },
      hi: {
        translation: {
          navbar: {
            home: 'होम',
            live_sess: 'लाइव सत्र',
            video_series: 'वीडियो श्रृंखलाएँ',
            ap_books: 'पुस्तकें',
            ap_articles: 'लेख',
            invite: 'आमंत्रित करें',
            in_media: 'प्रेस प्रकाशिनी',
            careers: 'करियर',
            donate: 'योगदान करें',
          },
        },
      },
    },
  });

export default i18n;
