import React from 'react'
import Link from 'gatsby-link'

import  './sidebar.css';

const Sidebar = (props) => {
  console.log("Sidebar props", props);

  const projects = props.projects || [];
  const myProjectLinks = projects.map( project => <li key={project.node.id}><a href={project.node.frontmatter.path}> {project.node.frontmatter.title}</a></li>);

  return (
    <div
      style={{
        borderRight: '2px solid #e6e6e6',
        width: '20%',
        padding: '0.5rem'
      }}
      >
      <h3>Projects</h3>
      <ul className="sidebar-list">
        {myProjectLinks}
      </ul>
    </div>
  );
};

export default Sidebar
