import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import backgroundHeadshot from '../images/headshot.jpg'
import paritySite from '../images/parity.png'
import rarecapsuleSite from '../images/rare-capsule.png'
import umoodSite from '../images/u-mood.png'

const IndexPage = () => (
  <Layout className='body-area'>
    <div className="hero-image">
      {/* hero image with adaptive views */}
      <img className='headshotImage' src={backgroundHeadshot} />
      <div className="hero-text">
        <h1>Ed.Whe</h1>
        <p>Edward Whelan</p>
      </div>
    </div>
    <div className='about-me'>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
</p>
      {/* small about me section */}
    </div>
    <section className='project-area'>
      {/* projects section. Show projects in cell format. Single Column on mobile */}
      <div>
        <a href='http://www.u-mood.com'><img alt='screen shot of u-mood.com landing page' src={umoodSite} /></a>
        <div className='githubLink'>
          <h3>U-Mood<a href='https://github.com/samerickson95/uMood'>(Link to github)</a></h3>
          <p> About: U-Mood is a mental health app to help users track data from a depression screener.
          <br />
            Built with: Javascript, Node.JS, Express.JS, PostgreSQL, Chart.JS, Git, Amazon Web Services

          </p>
        </div>
      </div>

      <div><a href='http://ec2-18-188-167-90.us-east-2.compute.amazonaws.com/'><img alt='screenshot of parity site landing page' src={paritySite} /></a></div>

      <div><a href='http://www.rarecapsule.com'><img alt='screenshot of rarecapsule.com landing page' src={rarecapsuleSite} /></a></div>

      <div><a href='#'><img src={rarecapsuleSite} /></a></div>

    </section>
    <div>
      {/* contact information */}
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout >
)

export default IndexPage
