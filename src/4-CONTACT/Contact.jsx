import React from 'react';
import './Contact.css';
import { motion } from 'framer-motion';

import { useForm, ValidationError } from '@formspree/react';
import Swal from 'sweetalert2';
import Lottie from "lottie-react";
// @ts-ignore
import animationContactUs from '../ANIMATION/contact.json'



function Contact() {
  const [state, handleSubmit] = useForm("xjvngwvj");
  if (state.succeeded) {
    Swal.fire({
        icon: 'success',
        title: 'Thank you!',
        text: 'Your message has been submitted successfully.',
      });
  }
  return (
    
      <div>
      <div className='divider' />
      <section className='contact-us'>
      <h1 className='titl'>
        <span className='icon-envelope'>
          <img width="24" height="24" src="https://img.icons8.com/fluency-systems-filled/48/FFFFFF/new-post.png" alt="new-post" />
        </span>
        Contact Us
      </h1>
      <p className='subtitle'>Contact us for more information and get notified when I publish something new</p>

      <div className="flex">
        <form action=""  onSubmit={handleSubmit} className=''>
          <div>
            <label htmlFor="email">Email address:</label>
            <input type="email" name='email' id='email' />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className='flex' style={{ marginTop: '20px' }}>
            <label htmlFor="message">Your message:</label>
            <textarea name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button className='submit' disabled={state.submitting}>Submit</button>
        </form>
        <motion.div className=" animation"
        layout
        initial={{ opacity: 0, transform: 'scale(0)' }}
        animate={{ opacity: 1, transform: 'scale(1)' }}
        transition={{ duration: 0.9 }}
        >
        <Lottie
        animationData={animationContactUs}
        style={{ width: '432px'  }}
      />
      
        </motion.div>
      </div>
    </section>
      </div>

    
  );
}

export default Contact;
