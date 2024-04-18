// import contactImage from '../../components/images/contact-img.png';
// const Contact = () => {
//   return (
//     <div>
//        <h1>Contact</h1>
//       <hr />
//       <h3>How can we help you? Please ask your query here.</h3>
//     <div className="contact-container">

//     <div className="contact-form">
//       <form>
//       <input type="text" placeholder="Your Name" />
//       <input type="email" placeholder="Your Email" />
//       <input type="text" placeholder="Address" />
//       <textarea cols="30" rows="10" placeholder="Write here"></textarea>
//       <div className="btn-box formBtn">
//         <button type="submit" className="btn">
//           Send Message
//         </button>
//       </div>
//     </form>
//     </div>
//     <div className="contact-image">
//     <img src={contactImage} alt="Description of the image" />
//     </div>
//   </div>
// </div>

//   )
// }

import React, { useState } from "react";
import contactImg from "../../components/images/contact-img.png";

const Contact = () => {
  // State variables for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform actions such as sending form data to a server
    console.log("Form submitted with data:", { name, email, query });
    // Reset form fields
    setName("");
    setEmail("");
    setQuery("");
  };

  // State variable for FAQ accordion
  const [faqOpen, setFaqOpen] = useState(null);

  // FAQ data
  const faqData = [
    {
      question: "Are there all questions from the companies",
      answer:
        "we have most of the questions that are asked repeatedly in many companies",
    },
    { question: "Question 2", answer: "Answer to question 2" },
    { question: "Question 3", answer: "Answer to question 3" },
  ];

  // Function to toggle FAQ accordion
  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <div className="container bg-slate-100">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <div>
      <button type="button" className="py-4 px-6 bg-red-300 rounded-[10px] ">
        <a href="">Instagram</a>
      </button>
      <button type="button" className="py-4 px-6 bg-red-300 rounded-[10px]">
        <a href="">Instagram</a>
      </button>
      <button type="button" className="py-4 px-6 bg-red-300 rounded-[10px]">
        <a href="">Instagram</a>
      </button>
      <button type="button" className="py-4 px-6 bg-red-300 rounded-[10px]">
        <a href="">Instagram</a>
      </button>
      <img src={contactImg} alt="here is a pic" className="w-1/3" />

      <h2 className="text-3xl from-stone-500 mt-8 mb-4">
        Frequently Asked Questions
      </h2>
      <div>
        {faqData.map((faq, index) => (
          <div key={index} className="mb-4">
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <span>{faqOpen === index ? "-" : "+"}</span>
            </div>
            {faqOpen === index && <p className="mt-2">{faq.answer}</p>}
          </div>
        ))}
      </div>
      </div>

      
    </div>
  );
};

export default Contact;
