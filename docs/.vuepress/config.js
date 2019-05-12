const { fs, path } = require('@vuepress/shared-utils')
// const glob = require('glob');
// let projectsList = glob.sync('docs/projects/README.md').map(f => '/' + f); 
// // update the docs/**/*.md pattern with your folder structure 

// still not working
const projectsList = fs
  .readdirSync(path.resolve(__dirname, '../projects'))
  .map(filename => '/projects' + filename.slice(0, -3))
  .sort()
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

module.exports = {
  dest: 'docs/.vuepress/dist',
  title: 'CryptoEcon DB',
  description: 'База Знаний по Криптоэкономике',
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
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
  plugins: [  ['@vuepress/back-to-top', true],
              ['@vuepress/google-analytics', 
                {
                      ga: 'UA-65451691-2'
                }]
            ],
  extraWatchFiles: [
    '.vuepress/nav/menu.js',
  ],
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
        nav: require('./nav/menu'),
        sidebar: 'auto'
      }
    }
  }
}