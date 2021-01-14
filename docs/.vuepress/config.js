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
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,645;0,700;1,400;1,800&display=swap' }],
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
  	smoothScroll: true,   
  	displayAllHeaders: true,
  	logo: '/img/logo.svg',
  	nav: [
        { text: 'über uns', link: '/about.html' },
        { text: 'wann und wo', link: '/wann-und-wo.html' },
        { text: 'mitmachen', link: '/mitmachen.html' },
        { text: 'Nachschlagewerk', link: '/grundtechniken/schlaege/' },

    ],
    sidebar: [
        {
            title: 'Kata',
            children: [
                ['/kata/taikyoku', 'Taikyoku'],
                ['/kata/gekisai', 'Gekisai'],
            ]
        },
        {
            title: 'Grundtechniken',
            children: [
                ['/grundtechniken/schlaege', 'Schläge'],
                ['/grundtechniken/tritte', 'Tritte'],
            ]
        },            

    ],

  }
 }