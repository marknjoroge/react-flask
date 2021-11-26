import React from 'react';
import '../../App.css';
import './ContactUs.css'; 



function Services() {
  return (
      <form className="form">
          <h1> Contact Form </h1>
          <label>Name</label>
          <input type="text" placeholder="Name"/>

          <label>Email</label>
          <input type="Email" placeholder="Email"/>

          <label>Message</label>
          <textarea placeholder="Message"></textarea>

          <button type="submit"> Submit</button>
      </form>

  )
}

export default Services;



