// import i18next from 'i18next';

i18next.init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation: {
        "language": "Language",
        "purePeace": "Pure Peace. Pure Life.",
        "bigHeader": "WORLD WIDE MEDITATION</br>FOR THE BENEFIT OF THE PLANET",
        "smallHeader": "Global prayer-meditation to harmonize the planet",
        "invitation": "Dear friends, We invite you for global meditation April 4th 2020.",
      }
    },
    ru: {
      translation: {
        "language": "Язык",
        "purePeace": "Чистый Мир. Чистая Жизнь.",
        "bigHeader": "ВСЕМИРНАЯ МЕДИТАЦИЯ</br>ВО БЛАГО ПЛАНЕТЫ",
        "smallHeader": "Международная молитва-медитация для гармонизации процессов на планете.",
        "invitation": "Друзья, приглашаем вас на международную молитву-медитацию 4 апреля 2020г в 22:45 EST</br>(5 апреля в 05:45 Москва).",
      }
    }
  }
}, function(err, t) {
  // init set content
  updateContent();
});

function updateContent() {
  document.getElementById('languageSelector').innerHTML = i18next.t('language');
  document.getElementById('purePeace').innerHTML = i18next.t('purePeace');
  document.getElementById('bigHeader').innerHTML = i18next.t('bigHeader');  
  document.getElementById('smallHeader').innerHTML = i18next.t('smallHeader');
  document.getElementById('invitation').innerHTML = i18next.t('invitation');  
}

function changeLng(lng) {
  i18next.changeLanguage(lng);
}

i18next.on('languageChanged', () => {
  updateContent();
});