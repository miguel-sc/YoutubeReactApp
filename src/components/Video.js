import React, { Component } from 'react'

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

class Video extends Component {

  render() {
    if ((this.props.video.id)&&(this.props.videoStats)) {
      const url = 'https://www.youtube.com/embed/'+this.props.video.id.videoId+'?autoplay=1'
      return (
        <div>
          <iframe src={url} title={this.props.video.id.videoId}/>
          <p>{this.props.video.snippet.title}</p>
          <p>{this.props.video.snippet.channelTitle}</p>
          <p>{getViews(this.props.videoStats.statistics.viewCount)+' views'}</p>
          <p>{getDate(this.props.video.snippet.publishedAt)}</p>
        </div>
      )
    } else {
      return (<div/>)
    }
  }
}

export default Video
