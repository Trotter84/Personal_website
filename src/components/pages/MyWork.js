import React, { Component } from 'react';
import axios from 'axios';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  Container,
  Card,
} from 'semantic-ui-react'

import topProjects from '../TopProjectsArrays.js';


const MenuItem = Styled(Link)`
  cursor: pointer;
  transition: all 200ms ease-in-out;
  :hover {
    color: #CE8351;
  }
`

const styles = {
  container: {
    display: 'flex'
  },
  card: {
    justifyContent: 'center'
  },
}


class MyWork extends Component {
  state = { repos: [] }

  componentDidMount() {

    axios({
      method: 'GET',
      url: 'https://api.github.com/users/Trotter84/repos',

    })

    .then(res => {
      this.setState({ repos: res.data })
    })
    .catch(err => {
      console.error("Error fetching MyWork data: ", err)
    })
  }

  getRepos = () => {


    const { repos } = this.state
    return (
      repos.map((repo, id) => {
        return (
          <Card
            key={repo.id}
            target='_blank'
            href={repo.html_url}
            header={repo.full_name}
            description={repo.description}
            meta={repo.language}
          />
        )
      })
    )
  }



  render() {
    return(
      <>
        <div id='menuBar'>
          <h1 className='title'>My Work</h1>
          <div id='navContainer'>
            <MenuItem to={`/`} className='menuItems'>Home</MenuItem>
            <br />
            <MenuItem to={`/about-me`} className='menuItems'>About Me</MenuItem>
          </div>
        </div>

        <div id='myWorkTopProjectsContainer'>
          <h2 id='myWorkTitle'>My Top Projects</h2>

          <div id='myWorkEachProjectContainer'>
            {topProjects.map(project => {
              return(
                <div id='myWorkProject'>
                  <a id='myWorkProjectWebsite' href={project.url} target='_blank' rel="noopener noreferrer">{project.website}</a>
                  <a id='myWorkProjectUrl' href={project.url} target='_blank' rel="noopener noreferrer">{project.url}</a>
                </div>
              )
            })}
          </div>
        </div>

        <div id='myWorkPage'>
          <div id='myWorkGitContainer'>
            <h1>My Work</h1>
            <Container style={styles.container} >
              <Card.Group style={styles.card}>
                {this.getRepos()}
              </Card.Group>
            </Container>
          </div>
        </div>
      </>
    )
  }
};

export default MyWork;
