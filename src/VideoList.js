import React, { Component } from 'react'
import VideoListItem from './VideoListItem'

class VideoList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ul>
      {this.props.searchResults.map(video => {
          return (
            <VideoListItem video={video} />
          )
        })}
      </ul>
    )
  }
}

export default VideoList
