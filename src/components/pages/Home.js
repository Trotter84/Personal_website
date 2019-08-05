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


class Home extends Component {

  componentDidMount() {
    document.title='Daniel Trotter'
  }

  render() {
    return(
      <>
        <div id='menuBar'>
          <h1 className='title'>Daniel Trotter</h1>
          <div id='navContainer'>
            <MenuItem to={`/about-me`} className='menuItems'>About Me</MenuItem>
            <br />
            <MenuItem to={`/my-work`} className='menuItems'>My Work</MenuItem>
          </div>
        </div>
        <div id='homePage'>

        </div>
      </>
    )
  }
};

export default Home;
