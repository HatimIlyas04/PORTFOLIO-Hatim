import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div>
    <div className='divider' />

      <footer className='flex'>

        <ul className='flex'>
          <li><a href="">About</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Speaking</a></li>
          <li><a href="">Uses</a></li>
        </ul>

        

        <p className='subtitle'>© 2024 Hatim Ilyas. All rights reserved.</p>
      </footer>
    </div>
    

  )
}

export default Footer