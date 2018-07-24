import React from 'react'
import Link from 'gatsby-link'

const FourthPage = () => (
<div style={{
    textAlign: 'center',
    border: '15px solid turquoise',
    padding: '20px 50px 20px 50px',
  }}>
    <h1>Contact Moi</h1>
    <p><em>Contactez moi</em>, s'il vous plaît...</p>
    <div>
      <img src='https://dawnabelle.github.io/portfolio/img/idaho.jpg'/>
      <p>... if you &hearts; hiking.</p>
      <p>... if you &hearts; puppies.</p>
      <p>... if you &hearts; old dogs</p>
      <p>... if you &hearts; sci-fi.</p>
      <p>... if you &hearts; fantasy.</p>
      <p>... if you &hearts; code.</p>
      <p>... if you &hearts; being nice.</p>
      <p>... if you &hearts; green.</p>
      <p>... if you &hearts; PoC.</p>
      <p>... if you &hearts; freedom.</p>
      <p>... if you &hearts; LGBTQ+.</p>
      <img src='https://dawnabelle.github.io/portfolio/img/tardis.jpg'/>
    </div>
    <div style={{
        padding: '20px',
        margin: 'auto',
      }}>
      <form action="https://formspree.io/dawn.mott@gmail.com"
        method="POST">
        <label>Enter Name: </label><br/>
        <input type="text" name="name" placeholder="Dawnabelle"/><br/><br/>
        <label>Enter Email: </label><br/>
        <input type="email" name="_replyto" placeholder="dawnrparty@gmail.com" />
        <br/><br/>
        <label>Enter Message: </label><br/>
        <textarea name="message" placeholder="Your message"></textarea>
        <br/><br/>

        <input type="submit" value="Send" />
      </form>
    </div>
  </div>
)

export default FourthPage
