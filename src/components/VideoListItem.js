import React, { Component } from 'react'
import { Link } from 'react-router-dom'

function getDate(string) {
  return string.substring(8,10)+'.'+string.substring(5,7)+'.'+string.substring(0,4)
}

function getViews(string) {
  if (string){
    if (string.length > 9) {
      return string.substring(0,string.length-9)+'.'+string.substring(string.length-9,string.length-8)+'B'
    }
    else if (string.length > 6) {
      return string.substring(0,string.length-6)+'M'
    }
    else if (string.length > 3) {
      return string.substring(0,string.length-3)+'K'
    }
    else {
      return string
    }
  }
  return ''
}

class VideoListItem extends Component {
  render() {
    if ((this.props.videoStats)&&(this.props.video)) {
      return (
        <li>
          <Link
            onClick={() => {this.props.selectVideo(this.props.video);this.props.selectVideoStats(this.props.videoStats)}}
            to={'/video='+this.props.video.id.videoId}
          >
            <img
              src={this.props.video.snippet.thumbnails.high.url}
              alt="Smiley face"
              width={this.props.video.snippet.thumbnails.high.width / 2}
              height={this.props.video.snippet.thumbnails.high.height / 2}
            />
            <p>{this.props.video.snippet.title}</p>
            <p>{this.props.video.snippet.channelTitle}</p>
            <p>{getViews(this.props.videoStats.items[0].statistics.viewCount)+' views'}</p>
            <p>{getDate(this.props.video.snippet.publishedAt)}</p>
          </Link>
			  </li>
      )
    }
    return <li/>
  }
}

export default VideoListItem
