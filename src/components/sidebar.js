import React from 'react'
import Link from 'gatsby-link'

const Sidebar = (props) => (
<div
    style={{
      border: '2px solid #e6e6e6',
      maxWidth: 960,
      padding: '0.5rem',
      marginBottom: '25px',
      height: 100
    }}
    >
    <strong>{props.title}</strong> {props.description}
</div>
);

export default Sidebar
