import React from 'react'
import Link from 'gatsby-link'

const ThirdPage = () => (
<div>
  <p>Hello world from my third Gatsby page. It is currently quite boring.</p>
  <img src='https://images.unsplash.com/photo-1531299411897-f9adcfb1a333?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5d4c981002e3298ac736245e85414c36&auto=format&fit=crop&w=934&q=80' alt='pretty, curly lady- turquoise top, orange skirt' width='500' />
  <br />
  <Link to='/page-2/'>Visit Page 2</Link>
  <br/>
  <Link to='/'>return home</Link>
</div>
)

export default ThirdPage
