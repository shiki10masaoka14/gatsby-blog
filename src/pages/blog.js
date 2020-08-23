import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data }) => (
  <Layout>
    <SEO title="Blog-Index"></SEO>
    {data.allMicrocmsBlog.edges.map(edge => {
      const blog = edge.node
      return (
        <React.Fragment key={blog.id}>
          <div>
            <Link to={`/blog/${blog.id}`}>
              <h2>{blog.title}</h2>
            </Link>
            <div>
              {blog.category.map(category => (
                <React.Fragment key={category.id}>
                  <span>{category.name}</span>
                </React.Fragment>
              ))}
            </div>
            <img src={blog.pict.url} width={160} height={110} alt="pict画像" />
          </div>
        </React.Fragment>
      )
    })}
  </Layout>
)

export const query = graphql`
  {
    allMicrocmsBlog(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
          category {
            id
            name
          }
          pict {
            url
          }
          body
        }
      }
    }
  }
`

export default BlogIndex
