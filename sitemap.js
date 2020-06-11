// @preval

const fs = require('fs')
const path = require('path')
const util = require('util')
const matter = require('gray-matter')

/**
 * @param {string} string
 * @returns {string}
 */
function formatSlug(string) {
  return string.replace(/ /g, '_').toLowerCase()
}

/**
 * @param {string} string
 * @returns {string}
 */
function formatTitle(string) {
  return string
    .split('_')
    .map(component => component.slice(0, 1).toUpperCase() + component.slice(1))
    .join(' ')
}

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
 * @typedef {{ file: string, title: string, slug: string, parent?: string, previous?: string, next?: string, children: TreeNode[] }} TreeNode
 */

/**
 * @param {string} rootPath
 * @param {string[]} pathComponents
 * @returns {TreeNode[]}
 */
function readTree(rootPath, pathComponents) {
  const files = fs.readdirSync(rootPath)

  const pages = sortFiles(
    rootPath,
    files.filter(f => f.endsWith('.mdx') && f !== 'index.mdx')
  )

  const directories = files.filter(f =>
    fs.statSync(path.join(rootPath, f)).isDirectory()
  )

  return pages.map(file => {
    const basename = path.basename(file, '.mdx')
    const components = [...pathComponents, basename]

    return {
      file,
      title: formatTitle(basename),
      slug: components.map(formatSlug).join('/'),
      parent: components
        .slice(0, -1)
        .map(formatSlug)
        .join('/'),
      children: directories.includes(basename)
        ? readTree(path.join(rootPath, basename), components)
        : [],
    }
  })
}

/**
 * @param {TreeNode[]} nodes
 * @param {string} previous
 * @param {string | undefined} next
 * @returns {TreeNode[]}
 */
function connectNodes(nodes, previous, next) {
  nodes.forEach((node, index) => {
    const isFirst = index === 0
    const isLast = index === nodes.length - 1

    if (isFirst) {
      node.previous = previous
    } else {
      node.previous = nodes[index - 1].slug
    }

    if (isLast) {
      node.next = next

      connectNodes(node.children, node.slug)
    } else {
      const nextNode = nodes[index + 1]

      if (node.children.length === 0) {
        node.next = nextNode.slug
      } else {
        node.next = node.children[0].slug
      }

      connectNodes(node.children, node.slug, nextNode.slug)
    }
  })
}

const pagesPath = path.join(__dirname, 'pages')

const topLevelPages = readTree(pagesPath, [])

connectNodes(topLevelPages, '')

/**
 * @type {TreeNode}
 */
const pagesTree = {
  file: 'index.mdx',
  slug: '',
  title: 'JavaScript Express',
  children: topLevelPages,
  next: topLevelPages[0] ? topLevelPages[0].slug : undefined,
}

// console.log(util.inspect(pagesTree, false, null, true))

module.exports = pagesTree
