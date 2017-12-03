import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchSearchResults, fetchSearchResultsStats, selectVideo, setSearchTerm, fetchMore, selectVideoStats } from './../actions'
import SearchForm from './../components/SearchForm'
import VideoList from './../components/VideoList'

const mapStateToProps = function(state){
  return {
    searchResults: state.searchResults,
    searchResultsStats: state.searchResultsStats,
    searchTerm: state.searchTerm
  }
}

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    fetchSearchResults: fetchSearchResults,
    fetchSearchResultsStats: fetchSearchResultsStats,
    selectVideo: selectVideo,
    selectVideoStats: selectVideoStats,
    setSearchTerm: setSearchTerm,
    fetchMore: fetchMore
  }, dispatch)
}

class SearchResultsPage extends Component {
  render() {
    return (
      <div>
        <SearchForm
          fetchSearchResults={this.props.fetchSearchResults}
          fetchSearchResultsStats={this.props.fetchSearchResultsStats}
          setSearchTerm={this.props.setSearchTerm}
        />
        <VideoList
          searchResults={this.props.searchResults}
          searchResultsStats={this.props.searchResultsStats}
          selectVideo={this.props.selectVideo}
          searchTerm={this.props.searchTerm}
          fetchMore={this.props.fetchMore}
          fetchSearchResultsStats={this.props.fetchSearchResultsStats}
          selectVideoStats={this.props.selectVideoStats}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsPage)
