const { fs, path } = require('@vuepress/shared-utils')

const projectsList = fs
  .readdirSync(path.resolve(__dirname, '../projects'))
  .map(filename => filename.slice(0, -3))
  .sort()
  .filter(notProject => notProject != 'README')

console.log(projectsList)