module.exports = {
    dest: 'vuepress',
    head: [
      ['link', { rel: 'icon', href: `/logo.png` }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
      ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
      ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
      ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
      ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    serviceWorker: true,
    theme: '',
    plugins: ['@vuepress/back-to-top'],
    themeConfig: {
      repo: 'gerstep/cryptoeconomics',
      editLinks: true,
      docsDir: 'docs',
      locales: {
        '/': {
          label: 'Русский',
          selectText: 'Languages',
          editLinkText: 'Редактировать эту страницу',
          lastUpdated: 'Обновлено',
          serviceWorker: {
            updatePopup: {
              message: "New content is available.",
              buttonText: "Refresh"
            }
          },
          nav: [
            {
              text: 'Главная',
              link: '/',
            },
            {
              text: 'Технологии',
              link: '/tech/',
            },
            {
              text: 'Концепции',
              link: '/concepts/',
            },
            {
              text: 'Проекты',
              link: '/projects/'
            },
            {
              text: 'Митап',
              link: 'http://cryptoecon.ru'
            },
          ],
          sidebar: {
            '/tech/': genSidebarConfig('Tech'),
            '/concepts/': genSidebarConfig('Concepts'),
            '/projects/': genSidebarConfig('Projects'),
            '/': genSidebarConfig('База Знаний'),
          }
        }
      }
    }
  }
  
  function genSidebarConfig (title) {
    return [
      {
        title,
        collapsable: true,
        children: [
          ''
        ]
      }
    ]
  }