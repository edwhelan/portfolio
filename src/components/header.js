import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div>
    <div className="header">
      <div>
        <Link to="/">
          {siteTitle}
        </Link>
      </div>
      <div className='headLinks'>
        <div>
          <Link to="/">
            Projects
          </Link>
        </div>
        <div>
          <Link to="/">
            Me
          </Link>
        </div>
      </div>
    </div>
  </div >
)

export default Header
