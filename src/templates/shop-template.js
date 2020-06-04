import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"

const ShopTemplate = ({ data }) => {
  const { content, title, desc, price } = data.product
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
    product: strapiProducts(slug: { eq: $slug }) {
      content
      title
      desc
      price
    }
  }
`

export default ShopTemplate
