import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchForm from './SearchForm'
import VideoList from './VideoList'
import { fetchSearchResults } from './actions'
import './App.css'

const mapStateToProps = function(state){
  return {
    searchResults: state.searchResults,
  }
}

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({ fetchSearchResults: fetchSearchResults }, dispatch)
}

class App extends Component {
  render() {
    return (
      <div>
        <SearchForm fetchSearchResults={this.props.fetchSearchResults}/>
        <VideoList searchResults={this.props.searchResults}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
