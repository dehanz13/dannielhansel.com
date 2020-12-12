import React from 'react'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'

//import SocialLinks from "../contants/SocialLinks"
// ...GatsbyImageSharpFluid

const query = graphql`
	{
		file(relativePath: {eq: "dh-headshot.jpg"}) {
			childImageSharp {
				fluid {
					src
				}
			}
		}
  	}
	`
const Hero = () => {
	return <h2>Hero Component</h2>
}

export default Hero