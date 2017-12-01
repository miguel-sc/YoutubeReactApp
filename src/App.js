import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchForm from './SearchForm'
import VideoList from './VideoList'
import './App.css'

const mapStateToProps = function(state){
  return {
    searchResults: state.searchResults,
  }
}

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
  }, dispatch)
}

class App extends Component {
  render() {
    return (
      <div>
        <SearchForm/>
        <VideoList searchResults={this.props.searchResults}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
