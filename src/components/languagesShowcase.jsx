import React from 'react';
import './CSS/languageShowcase.css';
import {
  faPython,
  faJs,
  faJava,
  faCss3,
  faHtml5,
  faNpm,
  faReact,
  faBootstrap,
  faNodeJs,
  faStackOverflow,
  faSwift,
  faNode,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from 'react-tooltip';

const LanguageShowcase = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div className="lsDiv">
          <h1 className="lsh1">I have experience in:</h1>
          <FontAwesomeIcon
            icon={faPython}
            className="lsIcon"
            data-tooltip-id="tooltip-ls"
            data-tooltip-content="Python"
            data-tooltip-place="top"
          />
          <FontAwesomeIcon
            icon={faReact}
            className="lsIcon"
            data-tooltip-id="tooltip-ls"
            data-tooltip-content="React"
            data-tooltip-place="top"
          />
          <FontAwesomeIcon
            icon={faJava}
            className="lsIcon"
            data-tooltip-id="tooltip-ls"
            data-tooltip-content="Java"
            data-tooltip-place="top"
          />
          <FontAwesomeIcon
            icon={faJs}
            className="lsIcon"
            data-tooltip-id="tooltip-ls"
            data-tooltip-content="Javascript"
            data-tooltip-place="top"
          />
          <br />
          <FontAwesomeIcon
            icon={faHtml5}
            className="lsIcon"
            data-tooltip-id="tooltip-ls"
            data-tooltip-content="HTML"
            data-tooltip-place="top"
          />
          <FontAwesomeIcon
            icon={faCss3}
            className="lsIcon"
            data-tooltip-id="tooltip-ls"
            data-tooltip-content="CSS3"
            data-tooltip-place="top"
          />{' '}
          <FontAwesomeIcon
            icon={faSwift}
            className="lsIcon"
            data-tooltip-id="tooltip-ls"
            data-tooltip-content="Swift"
            data-tooltip-place="top"
          />
          <FontAwesomeIcon
            icon={faNpm}
            className="lsIcon"
            data-tooltip-id="tooltip-ls"
            data-tooltip-content="NPM.js"
            data-tooltip-place="top"
          />
          <br />
          <FontAwesomeIcon
            icon={faNodeJs}
            className="lsIcon"
            data-tooltip-id="tooltip-ls"
            data-tooltip-content="Node JS"
            data-tooltip-place="top"
          />
          <FontAwesomeIcon
            icon={faStackOverflow}
            className="lsIcon"
            data-tooltip-id="tooltip-ls"
            data-tooltip-content="Stackoverflow"
            data-tooltip-place="top"
          />{' '}
          <FontAwesomeIcon
            icon={faBootstrap}
            className="lsIcon"
            data-tooltip-id="tooltip-ls"
            data-tooltip-content="Bootstrap 5"
            data-tooltip-place="top"
          />
        </div>
      </div>
      <Tooltip id="tooltip-ls" />
    </>
  );
};

export default LanguageShowcase;
