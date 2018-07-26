import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: '#a4eadc',
      marginBottom: '1.45rem',
      padding: '2rem',
    }}
  >
  <h1 className="myH1Class" style={{ margin: 0 }}>
    <Link className="myH1Class"
      to="/"
      style={{
        textDecoration: 'none',
      }}
    >
      Welcome home, Dorothy
    </Link>
  </h1>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        maxWidth: 960,
        padding: '0 1.0875rem',
      }}
    >
      <h1 style={{ paddingRight: '20px', margin: 0 }}>
        <Link  className="myH1Class"
          to="/about"
          style={{
            textDecoration: 'none',
          }}
        >
        About la Dawnabelle
        </Link>
      </h1>
      <h1 style={{ paddingRight: '20px', margin: 0 }}>
        <Link className="myH1Class"
          to="/projects"
          style={{
            textDecoration: 'none',
          }}
        >
        Mes Projets
        </Link>
      </h1>
      <h1 style={{ paddingRight: '20px', margin: 0 }}>
        <Link className="myH1Class"
          to="/contact"
          style={{
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
