import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Sidebar from '../components/sidebar'
import TemplateWrapper from '../components/template-wrapper'

import '../layouts/index.css'
import "../styles/layout-overide.css";

const ProjectMarkdown = ({ data, children }) => {
  const myProjects = data.allMarkdownRemark.edges;

  return (
      <div className="myContent" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
  );
}

ProjectMarkdown.propTypes = {
  children: PropTypes.func,
}

export default ProjectMarkdown

export const pageQuery = graphql`
query MyProjects($path: String!) {
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
  markdownRemark(frontmatter: { path: { eq: $path }}) {
    id
    html
    frontmatter {
      title
      path
    }
  }
}
`
