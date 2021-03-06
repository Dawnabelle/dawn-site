import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#a4eadc',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Welcome home, Dorothy
        </Link>
      </h1>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/about"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
        About la Dawnabelle
        </Link>
      </h1>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/projects"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
        Mes Projets
        </Link>
      </h1>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/contact"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
        Contact Moi
        </Link>
      </h1>

    </div>
  </div>
)

export default Header
