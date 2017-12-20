import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setSearchTerm, fetchComments } from './../actions'
import SearchForm from './../components/SearchForm'
import Video from './../components/Video'
import CommentThread from './../components/CommentThread'

const mapStateToProps = (state) => {
  return {
    selectedVideo: state.selectedVideo,
    selectedVideoStats: state.selectedVideoStats,
    commentList: state.commentList
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setSearchTerm: setSearchTerm,
    fetchComments: fetchComments
  }, dispatch)
}

class VideoPage extends Component {

  componentWillMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <SearchForm
          setSearchTerm = { this.props.setSearchTerm }
        />
        <Video
          video = { this.props.selectedVideo }
          videoStats = { this.props.selectedVideoStats }
        />
        <CommentThread
          video = { this.props.selectedVideo }
          commentList = { this.props.commentList }
          fetchComments = { this.props.fetchComments }
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPage)
