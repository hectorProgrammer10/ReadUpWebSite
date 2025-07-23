import React from 'react'

import './Home.css'

import HomePage from '../layouts/HomePage'

function Home() {
  return (
    <HomePage>
      <div className='content-home'>
        <div className='nav-home'>
          <div className='user-home'>
            <p>Hola, user</p>
            <p>16/627/2878728</p>
          </div>
          <div id='alert-home'>
            O
          </div>
        </div>
      </div>
    </HomePage>
  )
}

export default Home
