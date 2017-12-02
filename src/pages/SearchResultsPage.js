import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchSearchResults, fetchSearchResultsStatistics, selectVideo } from './../actions'
import SearchForm from './../components/SearchForm'
import VideoList from './../components/VideoList'

const mapStateToProps = function(state){
  return {
    searchResults: state.searchResults,
    searchResultsStatistics: state.searchResultsStatistics,
  }
}

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    fetchSearchResults: fetchSearchResults,
    fetchSearchResultsStatistics: fetchSearchResultsStatistics,
    selectVideo: selectVideo
  }, dispatch)
}

class SearchResultsPage extends Component {
  render() {
    return (
      <div>
        <SearchForm fetchSearchResults={this.props.fetchSearchResults} fetchSearchResultsStatistics={this.props.fetchSearchResultsStatistics}/>
        <VideoList searchResults={this.props.searchResults} searchResultsStatistics={this.props.searchResultsStatistics} selectVideo={this.props.selectVideo}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsPage)
