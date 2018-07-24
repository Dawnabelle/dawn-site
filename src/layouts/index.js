import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Sidebar from '../components/sidebar'
import TemplateWrapper from '../components/template-wrapper'

import './index.css'
import "../styles/layout-overide.css";

const Layout = ({ data, children }) => {
  console.log("This is the data in layout", data);
  const myProjects = data.allMarkdownRemark.edges;

  return (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="main" style={{
          display: "flex",
          justifyContent: "space-between"
        }}>
        <Sidebar projects={myProjects} />
          <div
            style={{
              margin: '0 auto',
              width: '100%',
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
            }}
          >
            {children()}
          </div>
      </div>

    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          html
          frontmatter {
            title
            path
            order
          }
        }
      }
    }
  }
`
