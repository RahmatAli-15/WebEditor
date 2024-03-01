import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='cont'>
    <h1>Contact Us</h1>
    

    <div className="containerConctact" >
      <div className="contactForm">
        <form className='formInput' action="" method="POSt">
          <input className='name' type="text" name="username" placeholder='Name' autoComplete='off' required />
          <input className='phone' type="text" name="phone" placeholder='Mobile No' autoComplete='off' required />
          <input  className='email' type="email" name="email" placeholder='Email' autoComplete='off' />
          <input className='location' type="text" name="location" placeholder='Your City' autoComplete='off' required />
          <textarea className='message'  name="message" placeholder='Message' cols="30" rows="10" autoComplete='off' required></textarea>
          <input className='sub' type="submit" value="send" />
        </form>
      </div>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56082.60568644846!2d77.16861583854131!3d28.534824309470938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce21e7d306d03%3A0x94b8ccb323d7648!2sMalviya%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110017!5e0!3m2!1sen!2sin!4v1708521872154!5m2!1sen!2sin" 
    width="100%" 
    height="450" 
    style={{border:0}} 
    allowFullScreen="" 
    loading="lazy"
     referrerPolicy="no-referrer-when-downgrade">
    </iframe>
    </div>
  
  )
}

export default Contact