import React from 'react'
import '../css/Home.css'
const Home = () => {
  return (
    <div>
       <div className='profile-content'>
        <div className='profile-left'>
            <h1>hello!!!</h1>
            <h2>I am <span id='myname'>sachithananthan</span></h2>
            <h2>I am a <span id='role'>Full Stack Developer</span> </h2>
            <div className='social-links'>
                <a href=""><i class="bi bi-github"></i></a>
                <a href=""><i class="bi bi-linkedin"></i></a>
                <a href=""><i class="bi bi-whatsapp"></i></a>
                <a href=""><i class="bi bi-facebook"></i></a>
            </div>
            <button id='Contactme'>Contact Me</button>
            <button id='Resume'>Resume <i class="bi bi-download"></i></button>
        </div>
          <div className='Profile-right'>
            <h1>image</h1>
          </div>
       </div>
    </div>
  )
}

export default Home
