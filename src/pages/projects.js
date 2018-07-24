import React from 'react'
import Link from 'gatsby-link'

import './projects.css'
import share from '../assets/share-space.png'

const ThirdPage = () => (
<div className="butts" style={{
    textAlign: 'center',
    border: '15px solid turquoise',
    padding: '20px 50px 20px 50px',
  }}>
  <div>
    <h1>Portfolio a&#768; la Dawnabelle</h1>
    <p>My progress as a junior programer, web magician, and project manager.</p>
    <p><em>Interested in my life pre-Epicodus? <a href="">Scope my resume</a></em></p>
  </div>
<br/>
  <div>
    <h2><a href="https://github.com/Dawnabelle/share-space">Share Space</a></h2>
    <div>
      <img src="https://github.com/Dawnabelle/share-space/blob/master/img/desktop.png?raw=true" alt="Thumbnail of Share Space project" width="400" />
    </div>
    <div>
        <p>The goal of this project was to create a website for a fictional shared office client.<br/>
        The work on this site was completed independently in two weeks.</p>
    </div>
  </div>

    <div>
      <h2><a href="https://github.com/Dawnabelle/rebuild-me">Beyonce Dupe</a></h2>
      <div>
        <img src="https://camo.githubusercontent.com/0e89bc9405b4a9131d95c8f10e892f1271e28599/68747470733a2f2f696d6769782e627573746c652e636f6d2f6c6f76656c6163652f75706c6f6164732f3234392f37386432326462302d353631342d303133322d343231342d3065626334656363623432662e706e673f773d363134266669743d6d6178266175746f3d666f726d617426713d3730" alt="Thumbnail of wiki project" width='400' />
      </div>
      <div>
          <p>The goal of this project was duplicate a site of our choosing. I chose Beyonce.com<br/>
          This project was completed independently in two weeks and written using Angular.</p>
      </div>
    </div>
      <div>

        <div>
          <h2><a href="https://github.com/Dawnabelle/vacation-project">Dawn's Bar</a></h2>
          <img src="https://github.com/Dawnabelle/slightly-exaggerated-tap/blob/master/src/assets/donkey-page.png?raw=true" alt="Thumbnail of Dawn's Tap Room Makeover site" width='400'/>
        </div>
        <div>
            <p>The goal of this project was to recreate a former tap room project, this time using React.<br/>
            My favorite bit was my error page.</p>
        </div>
      </div>
      <div>
        <div>
          <h2><a href="https://github.com/Dawnabelle/Resort">Shed Your Shell</a></h2>
          <img src={share} alt="Thumbnail of Shed Your Shell group project" width="400"/>
        </div>
        <div>
          <p>The goal of this project was to create a complete UX/UI desgin as a group.<br/>
          Pipes were used to sort input items.</p>
        </div>
      </div>
    </div>
)

export default ThirdPage
