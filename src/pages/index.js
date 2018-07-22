import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div style={{ color: `tomato` }}>
    <h1>Hello Gatsby!</h1>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
