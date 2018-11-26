import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import backgroundHeadshot from '../images/headshot.jpg'

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
      <div>u-mood</div>
      <div>parity</div>
      <div>rare-capsule</div>
      <div>whats the game</div>
    </section>
    <div>
      {/* contact information */}
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout >
)

export default IndexPage
