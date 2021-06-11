const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve(`src/templates/blogTemplate.js`)
  // const authorTemplate = path.resolve(`src/templates/authorTemplate.js`)

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    // const pageTemplate = (node.frontmatter.type == 'author' ? authorTemplate : bookTemplate)
    createPage({
      path: node.frontmatter.slug,
      component: blogTemplate,
      context: { slug : node.frontmatter.slug }
    })
  })
}