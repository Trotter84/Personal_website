import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';


const FooterItem = Styled(Link)`
  cursor: pointer;
  transition: all 200ms ease-in-out;
  :hover {
    color: #5bbae6;
  }
`


class Footer extends Component {

  render() {
    return(
      <>
        <div id='footerBar'>
          <div id='footerNavContainer'>
            <FooterItem to={`/`} className='footerItems'>Home</FooterItem>
            <FooterItem to={`/about-me`} className='footerItems'>About Me</FooterItem>
            <FooterItem to={`/my-work`} className='footerItems'>My Work</FooterItem>
          </div>
        </div>
      </>
    )
  }
};

export default Footer;
