import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Products from "../components/Products"

const Shop = ({
  data: {
    allStrapiProducts: { nodes: products },
  },
}) => {
  return (
    <Layout>
      <section className="blog-page">
        <Products products={products} title="shop" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProducts {
      nodes {
        slug
        desc
        price
        id
        title
        category
        image {
          url
        }
      }
    }
  }
`

export default Shop
