import React, { Component } from 'react'

class Video extends Component {

  render() {
    if (this.props.video.id) {
      const url = 'https://www.youtube.com/embed/'+this.props.video.id.videoId+'?autoplay=1'
      return (
        <iframe src={url} title={this.props.video.id.videoId}/>
      )
    } else {
      return (<div/>)
    }
  }
}

export default Video
