import React from 'react';
import './CSS/pageSec3.css';
import ProjectsShowcase from './projectsShowcase';
import BackToTopButton from './b2tBtn';

class PageSec3 extends React.Component {
  render() {
    return (
      <>
        <center>
          <ProjectsShowcase />
        </center>
        <BackToTopButton />
      </>
    );
  }
}

export default PageSec3;
