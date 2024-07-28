import React from 'react'
import './hero.css'
import Lottie from "lottie-react";
import { motion } from 'framer-motion';

// @ts-ignore
import animationHero from '../ANIMATION/hero.json'

function Hero() {
  return (
    <div>
      <section className='hero flex'>
        <div className='left-section '>

          <motion.div className='parent-avatar'
          layout
          initial={{ opacity: 0, transform: 'scale(0)' }}
          animate={{ opacity: 1, transform: 'scale(1)' }}
          transition={{ duration: 0.9 }}
          >
            <img src="./IMAGES-CARDS/me.jpg" alt="" className='avatar' />
            <span><img width="15" height="15" src="https://img.icons8.com/ios-glyphs/30/22C3E6/verified-account--v2.png" alt="verified-account--v2" /></span>
          </motion.div>
          <h1 className='title-about my-name'>Full Stack Dev, founder, and amateur astronaut. </h1>
          <p className='subtitle'>I’ Hatim Ilyas, a software designer and entrepreneur based in CasaBlanca City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.</p>
          <div className="icons flex">

            <a href="https://www.instagram.com/ilyas_hatim_10?igsh=eWhnZjlmdXB2bTZu">
              <div className="icon">
                <img width="24" height="24" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new" />
              </div>
            </a>

            <a href="https://www.facebook.com/profile.php?id=100009365554967&mibextid=ZbWKwL">
              <div className="icon">
                <img width="24" height="24" src="https://img.icons8.com/fluency/48/facebook-new.png" alt="facebook-new" />
              </div>
            </a>

            <a href="https://github.com/HatimIlyas04">
              <div className="icon">
                <img width="24" height="24" src="https://img.icons8.com/3d-fluency/94/github.png" alt="github" />
              </div>
            </a>

            <a href="https://www.linkedin.com/in/ilyass-hatim-8446a1295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <div className="icon">
                <img width="24" height="24" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin" />
              </div>
            </a>

          </div>
        </div>

        <motion.div className='right-section '
        layout
        initial={{ opacity: 0, transform: 'scale(1)' }}
        animate={{ opacity: 1, transform: 'scale(1)' }}
        transition={{ duration: 0.9 }}
        >
          <Lottie
            animationData={animationHero}
            style={{ width: '500px' }}

          />
        </motion.div>


      </section>
      <div className='divider' />

    </div>


  )
}

export default Hero
