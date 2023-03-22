import React from "react";
import s from "./ContactForm.module.scss";
import Wrapper from "../../UI/Wrapper/Wrapper";
const ContactForm = () => {
  return (
    <Wrapper>
      <h1 className={s.heading}>Contact Form</h1>
      <form className={s.form}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message"></textarea>
        </div>

        <button type="submit">Send</button>
      </form>
    </Wrapper>
  );
};

export default ContactForm;
