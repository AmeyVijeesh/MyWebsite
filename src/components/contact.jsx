import React from 'react';
import './CSS/contact.css';
import {
  faDiscord,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  return (
    <>
      <div className="contactCont">
        <h1 className="contactH1">Contact Me.</h1>
        <p className="contactP">Wanna talk? Connect here.</p>
        <div className="contactBtns">
          <button
            className="contactBtn"
            onClick={() =>
              window.open(
                'https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvqKctKGdxrNgqptwMtwwfDntwBQSxcCXWnhdMkNHMdjPzsnMHXLSSwdqkGbjSSwWvSmSVmail.google.com'
              )
            }
          >
            <FontAwesomeIcon icon={faEnvelope} className="fawesomeicon" />
            Gmail
          </button>
          <button
            className="contactBtn"
            onClick={() => window.open('https://linkedin.com/in/amey-vijeesh/')}
          >
            <FontAwesomeIcon icon={faLinkedin} className="fawesomeicon" />
            LinkedIn
          </button>
          <button
            className="contactBtn"
            onClick={() => {
              window.open('https://github.com/AmeyVijeesh');
            }}
          >
            <FontAwesomeIcon icon={faGithub} className="fawesomeicon" />
            Github
          </button>
          <button
            className="contactBtn"
            onClick={() =>
              window.open(
                'mailto:ameyvijeesh@outlook.com?subject=Subject%20Here&body=Hello%2C%0A%0A'
              )
            }
          >
            <FontAwesomeIcon icon={faEnvelope} className="fawesomeicon" />
            Outlook
          </button>
          <button
            className="contactBtn"
            onClick={() => {
              window.open('https://discord.com/users/827044709406998568');
            }}
          >
            <FontAwesomeIcon icon={faDiscord} className="fawesomeicon" />
            Discord
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
