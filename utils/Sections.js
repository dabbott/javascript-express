import sitemap from '../sitemap'

export default sitemap

/**
 * @param {string} pathname
 * @param {sitemap.TreeNode[]} nodes
 * @returns {sitemap.TreeNode | undefined}
 */
export function getSection(pathname, nodes = sitemap) {
  if (pathname === '') {
    return {
      file: 'index.mdx',
      slug: '',
      title: 'JavaScript Express',
      children: [],
      parent: '',
    }
  }

  return nodes.reduce((result, node) => {
    if (result) return result

    if (node.slug === pathname) return node

    return getSection(pathname, node.children)
  }, undefined)
}
