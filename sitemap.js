// @preval

const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

/**
 * @param {string} filePath
 * @returns {{ order?: number }}
 */
function readFrontMatter(filePath) {
  return matter(fs.readFileSync(filePath, 'utf8')).data
}

/**
 * @param {string} directoryPath
 * @param {string[]} files
 * @returns {string[]}
 */
function sortFiles(directoryPath, files) {
  let orderJSON = {}

  try {
    const data = fs.readFileSync(path.join(directoryPath, 'config.json'))
    const config = JSON.parse(data)
    orderJSON = (config.order || []).reduce((result, item, index) => {
      result[item] = index + 1
      return result
    }, {})
  } catch (e) {
    // Pass
  }

  return files
    .map(file => {
      const order =
        orderJSON[path.basename(file, '.mdx')] ||
        readFrontMatter(path.join(directoryPath, file)).order ||
        Infinity

      return { file, order }
    })
    .sort((a, b) => a.order - b.order)
    .map(obj => obj.file)
}

/**
 * @typedef {{ file: string, children: string[] }} TreeNode
 */

/**
 * @param {string} rootPath
 * @returns {TreeNode[]}
 */
function readTree(rootPath) {
  const files = fs.readdirSync(rootPath)
  const pages = sortFiles(rootPath, files.filter(f => f.endsWith('.mdx')))
  const directories = files.filter(f =>
    fs.statSync(path.join(rootPath, f)).isDirectory()
  )

  return pages.map(file => {
    const basename = path.basename(file, '.mdx')

    return {
      file,
      ...(directories.includes(basename) && {
        children: readTree(path.join(rootPath, basename)),
      }),
    }
  })
}

/**
 * @param {TreeNode} node
 * @returns {string[][]}
 */
function flattenNode(node) {
  const { file, children = [] } = node

  return [[file], ...children.flatMap(flattenNode).map(list => [file, ...list])]
}

const pagesPath = path.join(__dirname, 'pages')

const pagesTree = readTree(pagesPath)

const pages = pagesTree.flatMap(flattenNode)

const sections = [
  {
    hidden: true,
    depth: 0,
    title: 'JavaScript Express',
    slug: '',
  },
  ...pages
    .filter(page => !(page.length === 1 && page[0] === 'index.mdx'))
    .map(page => {
      const components = page.map(component => path.basename(component, '.mdx'))

      return createSection(components)
    }),
]

module.exports = sections

// Helpers

function formatSlug(string) {
  return string.replace(/ /g, '_').toLowerCase()
}

function formatTitle(string) {
  return string
    .split('_')
    .map(component => component.slice(0, 1).toUpperCase() + component.slice(1))
    .join(' ')
}

/**
 * @param {string[]} components
 */
function createSection(components) {
  const title = formatTitle(components[components.length - 1])
  const slug = components.map(formatSlug).join('/')
  return { depth: components.length - 1, title, slug }
}
