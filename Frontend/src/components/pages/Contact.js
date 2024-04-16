import React from 'react'
// <<<<<<< HEAD

// =======
// >>>>>>> 45f172fdbcea1889ac447396663d6660909b73ca
import contactImage from '../../components/images/contact-img.png';
const Contact = () => {
  return (
    <div>
      {/* <<<<<<< HEAD */}
      <h1>Contact</h1>
      <hr />

      <h3>How can we help you? Please ask your query here.</h3>
      <div className="contact-container">

        {/* ======= */}
        <h1>Contact</h1>
        <hr />
        <h3>How can we help you? Please ask your query here.</h3>
        <div className="contact-container">

          {/* >>>>>>> 45f172fdbcea1889ac447396663d6660909b73ca */}
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
            <img src={contactImage} alt="clipart" />
          </div>
        </div>
      </div>
      /</div>
  )
}

export default Contact


