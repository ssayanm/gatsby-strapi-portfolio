import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaGithubSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaWhatsappSquare className="social-icon"></FaWhatsappSquare>,
    url: "https://wa.me/919831571407",
  },
  {
    id: 2,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/sayan_m87",
  },
  {
    id: 3,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/ssayanm/",
  },
  {
    id: 4,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/sayan.mukherjee1",
  },
  {
    id: 5,
    icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
    url: "https://www.instagram.com/sayan_m87",
  },
  {
    id: 6,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/ssayanm/",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
