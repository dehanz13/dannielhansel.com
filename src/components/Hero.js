import React from 'react'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'

//import SocialLinks from "../constants/socialLinks"


const query = graphql`
	{
		file(relativePath: {eq: "dh-headshot-2.jpg"}) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
  	}
`

const Hero = () => {
	//const data = useStaticQuery(query)
	//console.log(data)
	const {file: {childImageSharp: { fluid },},} = useStaticQuery(query)

	return <header className="hero">
			<div className="section-center hero-center">
				<article className="hero-info">
					<div>
						<div className="underline">
							<h1>Hi, I'm Danniel</h1>
							<h4>Freelance, web, mobile UI/UX Designer, and Blogger</h4>
							<Link to="/contact" className="btn">
								Contact Me!
							</Link>
							{/* <SocialLinks /> */}
						</div>
					</div>
				</article>
				<Image fluid={fluid} className="hero-img" />
			</div>
		</header>
}

export default Hero