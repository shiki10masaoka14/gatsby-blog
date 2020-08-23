// pages/patient.js
import React from "react"
import { graphql } from "gatsby"

import Layout from "./src/components/layout"
import SEO from "./src/components/seo"

const PatientsPage = ({ data }) => (
  <Layout>
    <SEO title="consulting" />

    {data.allMicrocmsArticles.edges.map(edge => {
      const articles = edge.node
      const category = edge.node.category[0].name
      console.log("◆categoryは" + category)

      if (category === "consulting") {
        return (
          <React.Fragment key={articles.id}>
            <div>
              <h2>{articles.title}</h2>
              <img
                src={articles.pict.url}
                width={110}
                height={110}
                alt="pict画像"
              />
            </div>
            <div>
              {articles.category.map(category => (
                <React.Fragment key={category.id}>
                  <span>カテゴリー：{category.name}</span>
                </React.Fragment>
              ))}
            </div>
            <hr />
          </React.Fragment>
        )
      } else {
        return
      }
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

export default PatientsPage
