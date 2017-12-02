import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchForm from './SearchForm'
import VideoList from './VideoList'
import { fetchSearchResults, fetchSearchResultsStatistics } from './actions'
import './App.css'

const mapStateToProps = function(state){
  return {
    searchResults: state.searchResults,
    searchResultsStatistics: state.searchResultsStatistics
  }
}

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({ fetchSearchResults: fetchSearchResults, fetchSearchResultsStatistics: fetchSearchResultsStatistics }, dispatch)
}

class App extends Component {
  render() {
    return (
      <div>
        <SearchForm fetchSearchResults={this.props.fetchSearchResults} fetchSearchResultsStatistics={this.props.fetchSearchResultsStatistics}/>
        <VideoList searchResults={this.props.searchResults} searchResultsStatistics={this.props.searchResultsStatistics}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
