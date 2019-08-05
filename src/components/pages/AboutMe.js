import React, { Component } from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';


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
          <div id='rightMenu'>
            <MenuItem to={`/`} className='menuItems'>Home</MenuItem>
            <br />
            <MenuItem to={`my-work`} className='menuItems'>My Work</MenuItem>
          </div>
        </div>
      </>
    )
  }
};

export default AboutMe;
