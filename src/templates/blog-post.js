import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const BlogPost = props => {
  const post = props.data.microcmsBlog
  return (
    <Layout>
      <div>
        <h2>{post.title}</h2>
        <div>
          <span>{post.category.name}</span>
        </div>
        <img src={post.pict.url} alt="pictの画像" width={160} height={110} />
        <div
          dangerouslySetInnerHTML={{
            __html: `${post.body}`,
          }}
        ></div>
      </div>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query($id: String!) {
    microcmsBlog(id: { eq: $id }) {
      title
      category {
        name
      }
      pict {
        url
      }
      body
    }
  }
`
