import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
const Product = ({ id, title, image, category, price, slug, desc }) => {
  return (
    // <Link to={`/products/${slug}`} key={id} className="blog">
    <article className="blog">
      {image && <Image fluid={image.url} className="blog-img" />}

      <div className="blog-card">
        <h4>{title}</h4>
        <p>{desc}</p>
        <div className="blog-footer">
          <p>${price}</p>
          {console.log(image.url)}
          <button
            className="snipcart-add-item btn"
            data-item-id={id}
            data-item-price={price}
            data-item-url="/paintings/starry-night"
            data-item-description={desc}
            data-item-image={image.url}
            data-item-name={title}
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
    // </Link>
  )
}

Product.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
}

export default Product
