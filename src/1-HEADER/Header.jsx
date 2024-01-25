import React, { useEffect, useState } from 'react'
import './header.css'
import { Link } from 'react-router-dom'

function Header() {
  const [showModal, setShowModal] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('currentMode') ?? 'dark')

  useEffect(() => {
    if (theme == 'light') {
      document.body.classList.remove('dark')
      document.body.classList.add('light')
    } else {
      document.body.classList.remove('light')
      document.body.classList.add('dark')
    }
  }, [theme])

  const ShowModal = () => {
    setShowModal(true)
  }

  const HideModal = () => {
    setShowModal(false)
  }
  return (
    <header className=' flex'>
      <button className='menu' onClick={ShowModal}>
        <img width="40" height="40" src="https://img.icons8.com/sf-black/64/FFFFFF/menu.png" alt="menu" />
      </button>
      <div />
      <nav>
        <ul className='flex navbar-links'>

          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/About'}>About</Link></li>
          <li><Link to={'/projects'} >Projects</Link></li>
          <li><Link to={'/contact'}>Contact</Link></li>
        </ul>
      </nav>

      <button onClick={() => {
        // Send  value to ls
        localStorage.setItem('currentMode', theme == 'dark' ? 'light' : 'dark')

        setTheme(localStorage.getItem('currentMode'))

      }}>
        <img className='moon' width="40" height="40" src="https://img.icons8.com/sf-black/64/FFFFFF/moon-symbol.png" alt="moon-symbol" />
      </button>

      {showModal && (
        <div className="fixed sidebar">
          <ul className='modal '>
            <li>
              <button className='close' onClick={HideModal}>
                <img width="35" height="35" src="https://img.icons8.com/sf-black-filled/64/FFFFFF/x.png" alt="x" />
              </button>
            </li>
            <li><Link to={'/'} onClick={HideModal}>Home</Link></li>
            <li><Link to={'/About'} onClick={HideModal}>About</Link></li>
            <li><Link to={'/projects'} onClick={HideModal}>Projects</Link></li>
            <li><Link to={'/contact'}onClick={HideModal}>Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  )
}
export default Header;
