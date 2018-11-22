import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import backgroundHeadshot from '../images/headshot.jpg'

const IndexPage = () => (
  <Layout className='body-area'>
    <div className="hero-image">
      <img className='headshotImage' src={backgroundHeadshot} />
      <div className="hero-text">
        <h1>Ed.Whe</h1>
        <p>Edward Whelan</p>
      </div>
    </div>
    {/* hero image with adaptive views */}
    <div>
      {/* small about me section */}
    </div>
    <div>
      {/* projects section. Show projects in cell format. Single Column on mobile */}
    </div>
    <div>
      {/* contact information */}
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout >
)

export default IndexPage
