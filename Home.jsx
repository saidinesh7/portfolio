import React from 'react'
import logo from './logo.svg';

import './profile.css';

function Home() {
  return (
    <div className='main-container'>
        <div className='container'>
         <div className='home' >
                <div className='name'>
                <h1 style={{color:'white'}}>Sai Dinesh</h1>
                </div>
                <div className='role'>
                <h2 style={{color:'white'}}>Full Stack Developer </h2>
                </div>
                <div className='Button' >
                <a href='#'>About us</a>
                </div>
                </div>
         <div className='Profile-image'>
                   <img src={logo} className="App-logo" alt="logo" />
                </div>
         </div>
    </div>
    
  )
}

export default Home