import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';
import VideoPage from './pages/VideoPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/search=:id" component={SearchResultsPage} />
          <Route path="/video=:id" component={VideoPage} />
        </div>
      </Router>
    )
  }
}

export default App
