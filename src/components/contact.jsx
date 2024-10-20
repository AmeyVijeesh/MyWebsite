import React from 'react';
import './CSS/contact.css';

const Contact = () => {
  return (
    <div>
      <div className="contactPageFullContainer">
        <div className="aboutPageContText">
          <div className="tiltedTextContainer">
            <h1 className="contactH1">Contact me on:</h1>
          </div>
          <button
            className="btnContact"
            onClick={() =>
              window.open(
                'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=ameyvijeesh@gmail.com',
                '_blank'
              )
            }
          >
            Google Mail
          </button>
          <button
            className="btnContact"
            onClick={() =>
              window.open('https://github.com/AmeyVijeesh', '_blank')
            }
          >
            Github
          </button>
          <button
            className="btnContact"
            onClick={() => window.open('https://www.outlook.com', '_blank')}
          >
            Outlook
          </button>
          <button
            className="btnContact"
            onClick={() =>
              window.open(
                'https://www.team-bhp.com/forum/members/pythonista.html',
                '_blank'
              )
            }
          >
            Team-BHP
          </button>
          <br />
          <h3>
            Happy with the site? Leave a review{' '}
            <a
              onClick={() => {
                window.open(
                  "mailto:ameyvijeesh@gmail.com?subject=My%20Review%20About%20your%20Website&body=I'd%20like%20to%20give%20this%20website%20..."
                );
              }}
              style={{ color: 'lightblue' }}
            >
              here
            </a>
            !
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
