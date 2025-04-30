import React from "react";
import "../styles/contact.css";

export default function Contact() {
  return (
    <form className="contact-form">
      <div className="contact-title">Contact with me</div>
      <div className="contact-input">
        <img src="/images/mail.svg" alt="" className="contact-icon"/>
        <input type="text" placeholder="Your email" className="input" />
      </div>
      <div className="contact-input">
        <img src="/images/message.svg" alt="" className="contact-icon"/>
        <textarea placeholder="Your message" defaultValue={""} />
      </div>
      <button className="submit-button">SUBMIT</button>
    </form>
  );
}
