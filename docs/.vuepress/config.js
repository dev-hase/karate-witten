module.exports = {
  title: 'Karate Witten',
  description: 'Abteilung Karate der Turngemeinde Witten e.V.',

  extend: '@vuepress/theme-default',

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
        { text: 'über uns', link: '/about.html' },
        { text: 'wann und wo', link: '/wann-und-wo.html' },
        { text: 'mitmachen', link: '/mitmachen.html' },
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
            title: 'Grundlagen',
            children: [
                ['/grundlagen/angriffsstufen', 'Angriffsstufen'],
                ['/grundlagen/mawashi-uke', 'Mawashi Uke'],
                ['/grundlagen/shuto-uke', 'Shuto Uke'],
                ['/grundlagen/fallschule', 'Fallschule'],
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