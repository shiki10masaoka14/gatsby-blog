const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allMicrocmsBlog {
          edges {
            node {
              id
            }
          }
        }
      }
    `
  )
  if (result.errors) {
    throw result.errors
  }

  result.data.allMicrocmsBlog.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.id}`,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        id: edge.node.id,
      },
    })
  })
}
