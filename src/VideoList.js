import React, { Component } from 'react'
import VideoListItem from './VideoListItem'

class VideoList extends Component {

  render() {
      return (
        <ul>
          {this.props.searchResults.map(
            (video,index) => <VideoListItem key={video.id.videoId} video={video} videoStatistics={this.props.searchResultsStatistics[index]}/>
          )}
        </ul>
      )
  }
}

export default VideoList
