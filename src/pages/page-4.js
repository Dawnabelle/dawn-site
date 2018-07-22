import React from 'react'
import Link from 'gatsby-link'

const FourthPage = () => (
<div>
  <p>Future home of Contact page</p>
  <img src='https://images.unsplash.com/photo-1526538964379-c7f71c1d7983?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a9c91c6d967db3671802918d9263970f&auto=format&fit=crop&w=1050&q=80' alt='small tree' width='500' />
  <br />
  <Link to='/page-2/'>Visit Page 2</Link>
  <br/>
  <Link to='/'>return home</Link>
</div>
)

export default FourthPage
