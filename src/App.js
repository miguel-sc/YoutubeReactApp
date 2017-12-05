import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components'
import './App.css'
import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';
import VideoPage from './pages/VideoPage';

class App extends Component {
  render() {
    return (
      <Router>
        <AppContainer>
          <Route exact path="/" component={HomePage} />
          <Route path="/search=:id" component={SearchResultsPage} />
          <Route path="/video=:id" component={VideoPage} />
        </AppContainer>
      </Router>
    )
  }
}

export default App

const AppContainer = styled.div`
  width: 240px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 25px;
  padding-right: 25px;

  @media (min-width: 540px) {
		width: 490px;
	}

  @media (min-width: 790px) {
		width: 740px;
	}

  @media (min-width: 1040px) {
		width: 990px;
	}
`
