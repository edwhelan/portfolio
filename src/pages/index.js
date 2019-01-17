import React from 'react'
// import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Layout from '../components/layout'

import paritySite from './parity.png'
import rarecapsuleSite from './rare-capsule.png'
import umoodSite from './u-mood.png'
import bridge from './bridgeMural.jpg'
import naughtySite from './naughtySite.png'

const IndexPage = () => (
  <Layout className='body-area'>
    <div className="hero-image" name='top'>
      {/* hero image with adaptive views */}
      <img className='headshotImage' />
      <div className="hero-text">
        <h1>Ed.Whe</h1>
        <p>Edward Whelan</p>
      </div>
    </div>
    <h2 class='about-me-callout'>About Me</h2>
    <div className='about-me'>
      <p>Information technology professional with enterprise experience. Broad technology interest with a background in customer relations in multiple settings. Professional, flexible, and detail oriented worker with a strong interest in learning all aspects of technology. Lifelong learner and builder. When I'm not attached to a computer I enjoy hiking, reading, and painting.
</p>
      {/* small about me section */}
    </div>
    <section className='project-area' name='featuredProjects'>
      <h2>Featured Projects</h2>
      {/* projects section. Show projects in cell format. Single Column on mobile */}
      <div>
        <a href='http://ec2-52-14-68-130.us-east-2.compute.amazonaws.com'><img alt='screen shot of Naughty or Nice landing page' src={naughtySite} /></a>
        <div className='githubLink'>
          <h3>Naughty or Nice?<a href='https://github.com/edwhelan/snitch-app'> (See Code)</a></h3>
          <p> About: Naughty or Nice? is a social app to allow users to text pictures in to be voted on through Twilio SMS.
          <br />
            Built with: React, Twilio, JavaScript, Node.js, Express, PostgreSQL, Amazon Web Services
          </p>
        </div>
      </div>
      <div>
        <a href='http://www.u-mood.com'><img alt='screen shot of u-mood.com landing page' src={umoodSite} /></a>
        <div className='githubLink'>
          <h3>U-Mood<a href='https://github.com/samerickson95/uMood'> (See Code)</a></h3>
          <p> About: U-Mood is a mental health app to help users track data from a well-being screener.
          <br />
            Built with: JavaScript, Node.js, Express, PostgreSQL, Chart.js, Git, Amazon Web Services
          </p>
        </div>
      </div>

      <div><a href='http://ec2-18-188-167-90.us-east-2.compute.amazonaws.com/'><img alt='screenshot of parity site landing page' src={paritySite} /></a>
        <div className='githubLink'>
          <h3>Parity<a href='https://github.com/edwhelan/DC-Frontend-Project'> (See Code)</a></h3>
          <p>About: Parity is a memory game pulling in sound and images from external API's matching them dynamically.
          <br />
            Built with: Javascript, CSSGrid, Git, Amazon Web Services
          </p>
        </div>
      </div>

      <div><a href='http://www.rarecapsule.com'><img alt='screenshot of rarecapsule.com landing page' src={rarecapsuleSite} /></a>
        <div className='githubLink'>
          <h3>RareCapsule</h3>
          <p>About: RareCapsule is a portfolio site for a filmmaker/photographer.
          <br />
            Built with: Javascript, CSSGrid, GatsbyJS
          </p>
        </div>
      </div>
    </section>
    <section className='contactArea' >
      {/* landscape image and contact information */}
      <img className='bridgeMural' alt='mural underneath atlanta bridge' src={bridge} />
      <div className='contactInfo'>
        <p>
          If you are interested in contacting me please feel free to reach out at any of the following.
          <br />
          <div className='iconRow' name='aboutMe'>
            <a href='mailto:vroxing@gmail.com'><FontAwesomeIcon icon={faEnvelope} /></a>
            <a href='https://www.linkedin.com/in/edward-whelan-240887123/'> <FontAwesomeIcon icon={faLinkedin} /></a>
            <a href='https://github.com/edwhelan'><FontAwesomeIcon icon={faGithub} /></a>
          </div>
        </p>
      </div>
    </section>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout >
)

export default IndexPage
