import React, { Component } from 'react'
import SearchForm from './SearchForm'
import VideoList from './VideoList'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <SearchForm/>
        <VideoList/>
      </div>
    )
  }
}

export default App
