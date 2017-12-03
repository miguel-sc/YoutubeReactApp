import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchSearchResults, fetchSearchResultsStats, setSearchTerm } from './../actions'
import SearchForm from './../components/SearchForm'
import Video from './../components/Video'

const mapStateToProps = function(state){
  return {
    searchResults: state.searchResults,
    searchResultsStats: state.searchResultsStats,
    selectedVideo: state.selectedVideo,
    selectedVideoStats: state.selectedVideoStats
  }
}

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    fetchSearchResults: fetchSearchResults,
    fetchSearchResultsStats: fetchSearchResultsStats,
    setSearchTerm: setSearchTerm
  }, dispatch)
}

class VideoPage extends Component {
  render() {
    return (
      <div>
        <SearchForm
          fetchSearchResults={this.props.fetchSearchResults}
          fetchSearchResultsStats={this.props.fetchSearchResultsStats}
          setSearchTerm={this.props.setSearchTerm}
        />
        <Video
          video={this.props.selectedVideo}
          videoStats={this.props.selectedVideoStats}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPage)
