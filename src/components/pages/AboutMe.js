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
          <div id='textContainer'>
          
          </div>
        </div>
      </>
    )
  }
};

export default AboutMe;
