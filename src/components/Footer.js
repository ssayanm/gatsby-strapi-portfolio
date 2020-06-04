import React from "react"
import SocialLinks from "../constants/socialLinks"
import { FaHeart } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links" />
        <h4>
          copyright &copy; {new Date().getFullYear()}
          <span>
            Developed with <FaHeart style={{ color: "#ff355e" }} /> by Sayan
            Mukherjee
          </span>
          all rights reserved
        </h4>
      </div>
    </footer>
  )
}

export default Footer
