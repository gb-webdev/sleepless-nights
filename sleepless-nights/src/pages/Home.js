import React from 'react'
import './Home.css'
import design from '../assets/SN-design.png'

const Home = () => {
  return (
    <div className='home-wrap'>
      <img className='main-design' src={design} alt='Sleepless Nights logo'/>
    </div>
  )
}

export default Home