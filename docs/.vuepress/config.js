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
    //theme: 'vue',
    themeConfig: {
      repo: 'gerstep/cryptoeconomics',
      editLinks: true,
      docsDir: 'docs',
      locales: {
        '/': {
          label: 'English',
          selectText: 'Languages',
          editLinkText: 'Edit this page on GitHub',
          lastUpdated: 'Last Updated',
          serviceWorker: {
            updatePopup: {
              message: "New content is available.",
              buttonText: "Refresh"
            }
          },
          nav: [
            {
              text: 'Guide',
              link: '/guide/',
            },
            {
              text: 'Config Reference',
              link: '/config/'
            },
            {
              text: 'Default Theme Config',
              link: '/default-theme-config/'
            },
            {
              text: 'Changelog',
              link: 'https://github.com/vuejs/vuepress/blob/0.x/CHANGELOG.md'
            },
            {
              text: '1.x',
              link: 'https://v1.vuepress.vuejs.org/'
            },
          ],
          sidebar: {
            '/guide/': genSidebarConfig('Guide')
          }
        }
      }
    }
  }
  
  function genSidebarConfig (title) {
    return [
      {
        title,
        collapsable: false,
        children: [
          '',
          'getting-started',
          'basic-config',
          'assets',
          'markdown',
          'using-vue',
          'custom-themes',
          'i18n',
          'deploy'
        ]
      }
    ]
  }