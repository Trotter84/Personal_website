import React, { Component } from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';

import ProfileShot from '../../images/profile_shot.jpg';


const MenuItem = Styled(Link)`
  cursor: pointer;
  transition: all 200ms ease-in-out;
  :hover {
    color: #ffaa32;
  }
`


class AboutMe extends Component {

  componentDidMount() {
    document.title='About Me'
  }

  render() {
    return(
      <>
        <div id='menuBar'>
          <h1 className='title'>About Me</h1>
          <div id='navContainer'>
            <MenuItem to={`/`} className='menuItems'>Home</MenuItem>
            <br />
            <MenuItem to={`my-work`} className='menuItems'>My Work</MenuItem>
          </div>
        </div>
        <div id='aboutmePage'>
          <div id='photoContainer'>
            <img src={ProfileShot} id='profileShotImage' />
          </div>
          <div id='whiteContainer'>
            <div id='textContainer'>
              <p id='aboutmeText'>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am a freelance Full Stack web developer passionate about using programming to solve problems and deliver quality products. I have done a few projects for client, which can be checked out in <MenuItem to={`/my-work`}>My Work</MenuItem>. When I&apos;m not working on a project, I enjoy writing music, playing video games, and skateboarding.
                <br /> <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Currently, I work with mainly React, React Native, JavaScript, HTML/CSS, and Semantic-UI on the front end and with Ruby on Rails and Node.JS for the backend, with experience with Postres.
              </p>
            </div>
          </div>
        </div>
      </>
    )
  }
};

export default AboutMe;
