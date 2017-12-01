import React, { Component } from 'react'

class VideoListItem extends Component {
  render() {
    return (
      <li>
        <p>{this.props.video}</p>
			</li>
    )
  }
}

export default VideoListItem
