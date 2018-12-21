import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div>
    <div className="header">
      <div>
        <Link to="#top">
          {siteTitle}
        </Link>
      </div>
      <div className='headLinks'>
        <div>
          <Link to="#featuredProjects">
            Projects
          </Link>
        </div>
        <div>
          <Link to="#aboutMe">
            Contact
          </Link>
        </div>
      </div>
    </div>
  </div >
)

export default Header
