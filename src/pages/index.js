import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import paritySite from '../images/parity.png'
import rarecapsuleSite from '../images/rare-capsule.png'
import umoodSite from '../images/u-mood.png'
import bridge from '../images/bridgeMural.jpg'

const IndexPage = () => (
  <Layout className='body-area'>
    <div className="hero-image">
      {/* hero image with adaptive views */}
      <img className='headshotImage' />
      <div className="hero-text">
        <h1>Ed.Whe</h1>
        <p>Edward Whelan</p>
      </div>
    </div>
    <div className='about-me'>
      <p>Information technology professional with enterprise experience. Broad technology interest with a background in customer relations in multiple settings. Professional, flexible, and detail oriented worker with a strong interest in learning all aspects of technology. Lifelong learner and builder. When I'm not attached to a computer I enjoy hiking, reading and painting.
</p>
      {/* small about me section */}
    </div>
    <section className='project-area'>
      <h2>Featured Projects</h2>
      {/* projects section. Show projects in cell format. Single Column on mobile */}
      <div>
        <a href='http://www.u-mood.com'><img alt='screen shot of u-mood.com landing page' src={umoodSite} /></a>
        <div className='githubLink'>
          <h3>U-Mood<a href='https://github.com/samerickson95/uMood'> (Link to github)</a></h3>
          <p> About: U-Mood is a mental health app to help users track data from a well-being screener.
          <br />
            Built with: Javascript, Node.JS, Express.JS, PostgreSQL, Chart.JS, Git, Amazon Web Services
          </p>
        </div>
      </div>

      <div><a href='http://ec2-18-188-167-90.us-east-2.compute.amazonaws.com/'><img alt='screenshot of parity site landing page' src={paritySite} /></a>
        <div className='githubLink'>
          <h3>Parity<a href='https://github.com/edwhelan/DC-Frontend-Project'> (Link to github)</a></h3>
          <p>About: Parity is a memory game pulling in sound and images from external API's matching them dynamically.
          <br />
            Built with: Javascript, CSSGrid, Git, Amazon Web Services
          </p>
        </div>
      </div>

      <div><a href='http://www.rarecapsule.com'><img alt='screenshot of rarecapsule.com landing page' src={rarecapsuleSite} /></a>
        <div className='githubLink'>
          <h3>RareCapsule<a href='#'> (Link to github)</a></h3>
          <p>About: RareCapsule is a portfolio site for a filmmaker/photographer.
          <br />
            Built with: Javascript, CSSGrid, GatsbyJS
          </p>
        </div>
      </div>
    </section>
    <section className='contactArea'>
      {/* landscape image and contact information */}
      <img className='bridgeMural' alt='mural underneath atlanta bridge' src={bridge} />
      <div className='contactInfo'>
        <p>Information goes here</p>
      </div>
    </section>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout >
)

export default IndexPage
