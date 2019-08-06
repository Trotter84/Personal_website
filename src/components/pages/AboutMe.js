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
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This section will be info about myself. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </>
    )
  }
};

export default AboutMe;
