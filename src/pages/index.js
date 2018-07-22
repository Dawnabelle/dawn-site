import React from "react";
import Link from "gatsby-link";

export default () =>
  <div style={{
      color: 'teal'
    }}>
    <h1>Hello Gatsby!</h1>
    <p>Will this be fun to use to build my Portfolio for my Capstone project?</p>
    <p>Results in a bit</p>
    <img src='https://images.unsplash.com/photo-1504105547124-fc1aee34470d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5776563a3b4df93f2729a29e9bf5c27b&auto=format&fit=crop&w=1352&q=80' alt='retro room' width='500' />
    <br />
    <div>
      <Link to='/page-2/'>Visit Page 2</Link>
      <br/>
      <Link to='/page-3/'>Vist Page 3</Link>
    </div>
  </div>
