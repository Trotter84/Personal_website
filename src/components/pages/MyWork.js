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


class MyWork extends Component {

  componentDidMount() {
    document.title='My Work'
  }

  render() {
    return(
      <>
        <div id='menuBar'>
          <h1 className='title'>My Work</h1>
          <div id='rightMenu'>
            <MenuItem to={`/`} className='menuItems'>Home</MenuItem>
            <br />
            <MenuItem to={`/about-me`} className='menuItems'>About Me</MenuItem>
          </div>
        </div>
      </>
    )
  }
};

export default MyWork;
