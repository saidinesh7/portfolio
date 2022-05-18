import React from 'react'
import './profile.css'

function Skills() {
  return (
    <div className='main-container3'>
        <div className='container3'>
          <div className='skills-title'>
              Skills
          </div>
          <div className='skills-area'>
                <div className='html'>
              <img src='https://img.icons8.com/color/48/000000/html-5.png' alt='html'/>
              <span>HTML</span>
                </div>
                <div className='css'>
               <img src='https://img.icons8.com/color/48/000000/css3.png' alt='css'/>
               <span>CSS</span>
                </div>
                <div className='js'>
                  <img src='https://img.icons8.com/color/48/000000/javascript.png' alt='js'/>
                    <span>JavaScript</span>
                </div>
                <div className='react'>
              <img src='https://img.icons8.com/plasticine/344/react.png' alt='react' width='50px'/>
                <span>React</span>
                </div>
                <div className='Java'>
             <img src='https://img.icons8.com/color/48/000000/java.png' alt='java'/>
                <span>Java</span>
                </div>
                <div className='ui'>
             <img src='https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/344/external-ui-online-learning-kiranshastry-lineal-kiranshastry.png' alt='ui' width='50px'/>
                <span>UI Design</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills