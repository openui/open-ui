import { visit, SKIP } from 'unist-util-visit'

export default function rehypeResponsiveTables() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName.toLowerCase() == 'table') {
        const wrapper = {
          type: 'element',
          tagName: 'table',
          properties: node.properties,
          children: node.children,
        }
        node.tagName = 'div'
        node.properties = {
          class: 'table-responsive',
        }
        node.children = [wrapper]
        return [SKIP]
      }
    })
  }
}
