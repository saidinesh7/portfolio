import React from 'react'
import logo from './logo.svg';

import './profile.css';

function About() {
  return (
    <div className='main-container2'>
        <div className='container2'>
                  <div className='About'>
                  <div className='About-Header'>
                      <h1>About</h1>
                  </div>
                    <div className='About-text'>
                      Hello My name is Sai Dinesh, and i'm a web developer. I have a passion for creating web applications and I love to learn new things.
                    </div>
                    </div>
                    <div className='Image2'>
            <img src={logo} alt='logo'/>
          </div>
       </div>
    </div>
  )
}

export default About