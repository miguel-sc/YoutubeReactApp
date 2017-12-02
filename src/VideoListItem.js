import React, { Component } from 'react'

function getDate(string) {
  return string.substring(8,10)+' '+string.substring(5,7)+' '+string.substring(0,4)
}

class VideoListItem extends Component {
  render() {
    if ((this.props.videoStatistics)&&(this.props.video)) {
      return (
        <li>
          <a href="#">
            <img
              src={this.props.video.snippet.thumbnails.high.url}
              alt="Smiley face"
              width={this.props.video.snippet.thumbnails.high.width / 2}
              height={this.props.video.snippet.thumbnails.high.height / 2}
            />
            <p>{this.props.video.snippet.title}</p>
            <p>{this.props.video.snippet.channelTitle}</p>
            <p>{this.props.videoStatistics.items[0].statistics.viewCount}</p>
            <p>{getDate(this.props.video.snippet.publishedAt)}</p>
          </a>
			  </li>
      )
    }
    return <li/>
  }
}

export default VideoListItem
