import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"

const ShopTemplate = ({ data }) => {
  const { content, title, desc } = data.blog
  return (
    <Layout>
      <SEO title={title} description={desc} />
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <ReactMarkdown source={content} />
          </article>
          <Link to="/shop" className="btn center-btn">
            shop
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProduct($slug: String) {
    blog: strapiProducts(slug: { eq: $slug }) {
      content
      title
      desc
    }
  }
`

export default ShopTemplate
