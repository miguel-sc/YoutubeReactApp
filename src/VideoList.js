import React, { Component } from 'react'
import VideoListItem from './VideoListItem'

class VideoList extends Component {
  render() {
    return (
      <ul>
        {this.props.searchResults.map(
          video => <VideoListItem key={video.id.videoId} video={video} />
        )}
      </ul>
    )
  }
}

export default VideoList
