const path = require(`path`)
const _ = require("lodash")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve(`src/templates/blogTemplate.js`);
  const cardListTemplate = path.resolve(`src/templates/cardListTemplate.js`);
  const tagSearchTemplate = path.resolve(`src/templates/tagSearchTemplate.js`)

  const getAllNodes = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
              type
              tags
            }
          }
        }
      }
    }
  `);

  const getAllTags = await graphql(`
    {
      allMarkdownRemark {
        group(field: frontmatter___tags) {
          tag: fieldValue
          totalCount
        }
      }
    }
  `);

  if (getAllNodes.errors || getAllTags.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  getAllNodes.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogTemplate,
      context: { slug : node.frontmatter.slug }
    })
  });

  getAllNodes.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.type,
      component: cardListTemplate,
      context: { type : node.frontmatter.type }
    })
  });

  getAllTags.data.allMarkdownRemark.group.forEach(item => {
    createPage({
      path: `/tags/${_.kebabCase(item.tag)}/`,
      component: tagSearchTemplate,
      context: {
        tag: item.tag,
      },
    })
  });

}