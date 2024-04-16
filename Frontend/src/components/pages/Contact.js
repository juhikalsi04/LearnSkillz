import React from 'react'

import contactImage from '../../components/images/contact-img.png';
const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <hr/>
      
      <h3>How can we help you? Please ask your query here.</h3>
    <div className="contact-container">

    <div className="contact-form">
      <form>
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <input type="text" placeholder="Address" />
      <textarea cols="30" rows="10" placeholder="Write here"></textarea>
      <div className="btn-box formBtn">
        <button type="submit" className="btn">
          Send Message
        </button>
      </div>
    </form>
    </div>
    <div className="contact-image">
    <img src={contactImage} alt="Description of the image" />
    </div>
  </div>
</div>

  )
}

export default Contact


