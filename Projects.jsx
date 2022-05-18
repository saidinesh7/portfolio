import React from 'react'
import './profile.css'

const Projects_Data=[
    {'image':"https://img.icons8.com/emoji/344/fire.png",'title':'Flames','description':'A web application which takes two names as input and predicts output.'},
    {'image':"https://img.icons8.com/color/344/clouds.png",'title':'Weather Prediction','description':'A python GUI application which predicts the rainfall and various weather parameters.'},
    {'image':"https://img.icons8.com/plasticine/344/instagram-new--v2.png",'title':'instagram-clone','description':'A react-native mobile clone of instagram...'},
    {'image':"https://img.icons8.com/external-glyph-on-circles-amoghdesign/344/external-cartoon-movies-glyph-on-circles-amoghdesign.png",'title':'cartoonizer','description':'A web application which takes any image and converts it into cartoon image which uses a Toonify API'}];

function Projects() {
  return (
    <div className='main-container4'>
        <h1 className='heading'>Projects</h1>
        <div className='project-items'>
        {
            Projects_Data.map((p,key)=>(
                    <div className='project-item' key={key}>
                        <img src={p.image} alt={p.title} />
                        <div className='title-des'>
                            <h1>{p.title}</h1>
                            <div className='des'>{p.description}</div>
                            </div>
                        </div>
                )
            )
        }  
            
        </div>
        <div className='icons-set'>
            <h1>connect us</h1>
            <div className='icons'>
                <img src='https://img.icons8.com/fluency/344/facebook-new.png' />
                <img src='https://img.icons8.com/fluency/344/instagram-new.png' />
                <img src='https://img.icons8.com/color/344/twitter--v1.png' />
                <img src='https://img.icons8.com/color/344/gmail-new.png' />
            </div>
        </div>
    </div>
  )
}

export default Projects