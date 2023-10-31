import "./FormStyles.css";

import React from "react";

const Form = () => {
  return <div className="form">
    <form>
      <label>Your Name :</label>
      <input type="text" placeholder="Type Your Name"/>
      <label>Email :</label>
      <input type="email" placeholder="Type Your Email"/>
      <label>Message :</label>
      <textarea rows="6" placeholder="Type Your Message"></textarea>
      <button className="btn">Submit</button>
    </form>
  </div>;
};

export default Form;
