import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchSearchResults, fetchSearchResultsStatistics, selectVideo, setSearchTerm } from './../actions'
import SearchForm from './../components/SearchForm'
import VideoList from './../components/VideoList'

const mapStateToProps = function(state){
  return {
    searchResults: state.searchResults,
    searchResultsStatistics: state.searchResultsStatistics,
    searchTerm: state.searchTerm
  }
}

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    fetchSearchResults: fetchSearchResults,
    fetchSearchResultsStatistics: fetchSearchResultsStatistics,
    selectVideo: selectVideo,
    setSearchTerm: setSearchTerm
  }, dispatch)
}

class SearchResultsPage extends Component {
  render() {
    return (
      <div>
        <SearchForm
          fetchSearchResults={this.props.fetchSearchResults}
          fetchSearchResultsStatistics={this.props.fetchSearchResultsStatistics}
          setSearchTerm={this.props.setSearchTerm}
        />
        <VideoList
          searchResults={this.props.searchResults}
          searchResultsStatistics={this.props.searchResultsStatistics}
          selectVideo={this.props.selectVideo}
          searchTerm={this.props.searchTerm}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsPage)
