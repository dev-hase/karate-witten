module.exports = {
  title: 'Karate-Dō Witten',
  description: 'Abteilung Karate der Turngemeinde Witten e.V.',

  extend: '@vuepress/theme-default',

    locales: {
      "/": {
        lang: "de-DE"
      }
    },

  head: [
    ['link', { rel: 'icon', href: '/img/icon-512x512.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#8cce82' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'white' }],
    ['link', { rel: 'apple-touch-icon', href: '/img/icon-192x192.png' }],
    ['link', { rel: 'mask-icon', href: '/img/icon-512x512.png', color: '#8cce82' }],
    ['meta', { name: 'msapplication-TileImage', content: '/img/icon-192x192.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
  ],
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: "Inhalte wurden geändert",
          buttonText: "nachladen..."
        }
      }
    ]
  ],

  themeConfig: {

  	displayAllHeaders: true,
  	logo: '/img/logo.png',
  	nav: [
        { text: 'Wiki', link: '/wiki.html' },

    ],
    sidebar: [
        {
            title: 'Kata',
            children: [
                ['/kata/taikyoku', 'Taikyoku'],
                ['/kata/gekisai', 'Gekisai'],
                ['/kata/saifa', 'Saifā'],
                ['/kata/sanchin', 'Sanchin'],
                ['/kata/tensho', 'Tenshō'],
                ['/kata/senseru', 'Sansēru'],
                ['/kata/seisan', 'Seisan'],
                ['/kata/seiyunchin', 'Seiyunchin'],
                ['/kata/sepai', 'Sēpai'],
                ['/kata/shisochin', 'Shisōchin'],
                ['/kata/suparinpei', 'Sūpārinpei'],
                ['/kata/kururunfa', 'Kururunfā'],
            ]
        },
        {
            title: 'Kumite',
            children: [
                ['/kumite/kumite-ura', 'Kumite Ura'],
                ['/kumite/kumite-ura-1-3', 'Kumite Ura 1-3'],
                ['/kumite/kumite-ura-4-6', 'Kumite Ura 4-6'],
                ['/kumite/kumite-ura-7-9', 'Kumite Ura 7-9'],
                ['/kumite/kumite-ura-10-12', 'Kumite Ura 10-12'],
                ['/kumite/nage-waza', 'Nage Waza'],
                ['/kumite/nage-waza-1-3', 'Nage Waza 1-3'],
                ['/kumite/nage-waza-4-6', 'Nage Waza 4-6'],
                ['/kumite/nage-waza-7-9', 'Nage Waza 7-9'],
                ['/kumite/nage-waza-10-12', 'Nage Waza 10-12'],
            ]
        },
        {
            title: 'Grundlagen',
            children: [
                ['/grundlagen/angriffsstufen', 'Angriffsstufen'],
                ['/grundlagen/staende', 'Stände'],
                ['/grundlagen/tsuki', 'Tsuki'],
                ['/grundlagen/handtechniken', 'Handtechniken'],
                ['/grundlagen/mawashi-uke', 'Mawashi Uke'],
                ['/grundlagen/kakie', 'Kakie'],
                ['/grundlagen/gedan-barei', 'Gedan Barei'],
                ['/grundlagen/age-uke', 'Age Uke'],
                ['/grundlagen/yoko-uke', 'Yoko Uke'],
                ['/grundlagen/shuto-uke', 'Shuto Uke'],
                ['/grundlagen/mae-geri', 'Mae Geri'],
                ['/grundlagen/yoko-geri', 'Yoko Geri'],
                ['/grundlagen/mawashi-geri', 'Mawashi Geri'],
                ['/grundlagen/ushiro-geri', 'Ushiro Geri'],
                ['/grundlagen/kansetsu-geri', 'Kansetsu Geri'],
                ['/grundlagen/fallschule', 'Fallschule'],
                ['/grundlagen/vitalpunkte', 'Vitalpunkte'],
            ]
        },
        {
            title: 'Prüfungsordnung',
            children: [
                ['/pruefung/1kyu', '1. Kyu (Braungurt)'],
                ['/pruefung/2kyu', '2. Kyu (Braungurt)'],
                ['/pruefung/3kyu', '3. Kyu (Braungurt)'],
                ['/pruefung/4kyu', '4. Kyu (Blaugurt)'],
                ['/pruefung/5kyu', '5. Kyu (Blaugurt)'],
                ['/pruefung/6kyu', '6. Kyu (Grüngurt)'],
                ['/pruefung/7kyu', '7. Kyu (Orangegurt)'],
                ['/pruefung/8kyu', '8. Kyu (Gelbgurt)'],
                ['/pruefung/9kyu', '9. Kyu (Weißgurt)'],
            ]
        },

    ],

  }
 }
