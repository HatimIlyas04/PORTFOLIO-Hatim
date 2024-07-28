import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
// @ts-ignore
import animationHero from '../ANIMATION/hero.json';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <div className="container">
      <section className="d-flex flex-wrap justify-content-between align-items-center">
        <div className="col-md-6">
          <h1 className="display-4 fw-bold">I’m Hatim Ilyas. I live in CasaBlanca City, where I design the future.</h1>
          <p className="lead">
            I’ve loved making things for as long as I can remember, and wrote my first program when I was 6 years old, just two weeks after my mom brought home the brand new Macintosh LC 550 that I taught myself to type on. <br /><br />
            The only thing I loved more than computers as a kid was space. When I was 8, I climbed the 40-foot oak tree at the back of our yard while wearing my older sister’s motorcycle helmet, counted down from three, and jumped — hoping the tree was tall enough that with just a bit of momentum I’d be able to get to orbit. <br /><br />
            I spent the next few summers indoors working on a rocket design, while I recovered from the multiple surgeries it took to fix my badly broken legs. It took nine iterations, but when I was 15 I sent my dad’s Blackberry into orbit and was able to transmit a photo back down to our family computer from space. <br /><br />
            Today, I’m the founder of Planetaria, where we’re working on civilian space suits and manned shuttle kits you can assemble at home so that the next generation of kids really can make it to orbit — from the comfort of their own backyards.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <motion.div 
            className="mb-4"
            layout
            initial={{ opacity: 0, transform: 'scale(0)' }}
            animate={{ opacity: 1, transform: 'scale(1)' }}
            transition={{ duration: 0.9 }}
          >
            <img id="img" src="/IMAGES-ME/ilyas.jpg" alt="Hatim Ilyas" className="rounded-circle img-fluid" />
          </motion.div>
          <div className="d-flex flex-column align-items-center">
            <a href="https://www.instagram.com/ilyas_hatim_10?igsh=eWhnZjlmdXB2bTZu" className="d-flex align-items-center mb-2">
              <img width="24" height="24" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="Instagram" />&nbsp;&nbsp;<span>Follow me on Instagram</span>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100009365554967&mibextid=ZbWKwL" className="d-flex align-items-center mb-2">
              <img width="24" height="24" src="https://img.icons8.com/fluency/48/facebook-new.png" alt="Facebook" />&nbsp;&nbsp;<span>Follow me on Facebook</span>
            </a>
            <a href="https://github.com/HatimIlyas04" className="d-flex align-items-center mb-2">
              <img width="24" height="24" src="https://img.icons8.com/3d-fluency/94/github.png" alt="GitHub" />&nbsp;&nbsp;<span>Follow me on GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/ilyass-hatim-8446a1295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="d-flex align-items-center mb-2">
              <img width="24" height="24" src="https://img.icons8.com/color/48/linkedin.png" alt="LinkedIn" />&nbsp;&nbsp;<span>Follow me on LinkedIn</span>
            </a>
            <div className="my-2 w-100 border-top"></div>
            <a href="mailto:Hatimilyas766@gmail.com" className="d-flex align-items-center">
              <img width="24" height="24" src="https://img.icons8.com/3d-fluency/94/email.png" alt="Email" />&nbsp;&nbsp;<span>Hatimilyas766@gmail.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
