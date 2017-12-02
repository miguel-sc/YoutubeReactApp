import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchSearchResults, fetchSearchResultsStatistics, setSearchTerm } from './../actions'
import SearchForm from './../components/SearchForm'
import Video from './../components/Video'

const mapStateToProps = function(state){
  return {
    searchResults: state.searchResults,
    searchResultsStatistics: state.searchResultsStatistics,
    selectedVideo: state.selectedVideo
  }
}

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    fetchSearchResults: fetchSearchResults,
    fetchSearchResultsStatistics: fetchSearchResultsStatistics,
    setSearchTerm: setSearchTerm
  }, dispatch)
}

class VideoPage extends Component {
  render() {
    return (
      <div>
        <SearchForm
          fetchSearchResults={this.props.fetchSearchResults}
          fetchSearchResultsStatistics={this.props.fetchSearchResultsStatistics}
          setSearchTerm={this.props.setSearchTerm}
        />
        <Video video={this.props.selectedVideo}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPage)
