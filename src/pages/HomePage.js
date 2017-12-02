import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchSearchResults, fetchSearchResultsStatistics } from './../actions'
import SearchForm from './../components/SearchForm'

const mapStateToProps = function(state){
  return {
    searchResults: state.searchResults,
    searchResultsStatistics: state.searchResultsStatistics
  }
}

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    fetchSearchResults: fetchSearchResults,
    fetchSearchResultsStatistics: fetchSearchResultsStatistics
  }, dispatch)
}

class HomePage extends Component {
  render() {
    return (
      <div>
        <SearchForm fetchSearchResults={this.props.fetchSearchResults} fetchSearchResultsStatistics={this.props.fetchSearchResultsStatistics}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
