module.exports = {
  title: 'Karate Witten',
  description: 'Abteilung Karate der Turngemeinde Witten e.V.',

  head: [
    ['link', { rel: 'icon', href: '/img/icon-512x512.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#45f635' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'white' }],
    ['link', { rel: 'apple-touch-icon', href: '/img/icon-192x192.png' }],
    ['link', { rel: 'mask-icon', href: '/img/icon-512x512.png', color: '#45f635' }],
    ['meta', { name: 'msapplication-TileImage', content: '/img/icon-192x192.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }]
  ],
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ]
  ],

  themeConfig: {
  	smoothScroll: true,   
  	displayAllHeaders: true,
  	logo: '/img/logo.svg',
  	nav: [
        { text: 'Über uns', link: '/about.html' },
        { text: 'wann und wo', link: '/wann-und-wo.html' },
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