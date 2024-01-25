import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div>
    <div className='divider' />

      <footer className='flex'>

        <ul className='flex'>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/About'}>About</Link></li>
          <li><Link to={'/projects'} >Projects</Link></li>
          <li><Link to={'/contact'}>Contact</Link></li>
        </ul>

        

        <p className='subtitle'>© 2024 Hatim Ilyas. All rights reserved.</p>
      </footer>
    </div>
    

  )
}

export default Footer