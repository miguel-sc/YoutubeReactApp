import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchSearchResults, fetchSearchResultsStats, selectVideo, setSearchTerm, selectVideoStats } from './../actions'
import SearchForm from './../components/SearchForm'
import VideoList from './../components/VideoList'

const mapStateToProps = ( state ) => {
  return {
    searchResults: state.searchResults,
    searchResultsStats: state.searchResultsStats,
    searchTerm: state.searchTerm
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return bindActionCreators({
    fetchSearchResults: fetchSearchResults,
    fetchSearchResultsStats: fetchSearchResultsStats,
    selectVideo: selectVideo,
    selectVideoStats: selectVideoStats,
    setSearchTerm: setSearchTerm
  }, dispatch )
}

class SearchResultsPage extends Component {
  render() {
    return (
      <div>
        <SearchForm
          setSearchTerm = { this.props.setSearchTerm }
        />
        <VideoList
          searchResults = { this.props.searchResults }
          searchResultsStats = { this.props.searchResultsStats }
          selectVideo = { this.props.selectVideo }
          searchTerm = { this.props.searchTerm }
          fetchSearchResults = { this.props.fetchSearchResults }
          fetchSearchResultsStats = { this.props.fetchSearchResultsStats }
          selectVideoStats = { this.props.selectVideoStats }
        />
      </div>
    )
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( SearchResultsPage )
