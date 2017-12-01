import React, { Component } from 'react'
import VideoListItem from './VideoListItem'

class VideoList extends Component {
  render() {
    return (
      <ul>
        <VideoListItem/>
        <VideoListItem/>
      </ul>
    )
  }
}

export default VideoList
