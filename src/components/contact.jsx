import React from 'react';
import './CSS/contact.css';

const Contact = () => {
  return (
    <>
      <div className="contactCont">
        <h1 className="contactH1">Contact Me</h1>
        <div className="contactBtns">
          <button className="contactBtn">Gmail</button>
          <button className="contactBtn">LinkedIn</button>
          <button className="contactBtn">Outlook</button>
          <button className="contactBtn">Discord</button>
        </div>
      </div>
    </>
  );
};

export default Contact;
