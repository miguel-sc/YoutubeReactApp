import React, { Component } from 'react'
import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faEye, faCalendarAlt } from '@fortawesome/fontawesome-free-solid'

function getDate( string ) {
  return string.substring( 8, 10 ) + '.' + string.substring( 5, 7 ) + '.' + string.substring( 0, 4 )
}

function getViews( string ) {
  if ( string ) {
    if ( string.length > 9 ) {
      return string.substring( 0, string.length - 9 ) + '.' + string.substring( string.length - 9, string.length - 8 ) + 'B'
    }
    else if ( string.length > 6 ) {
      return string.substring( 0, string.length - 6 ) + 'M'
    }
    else if ( string.length > 3 ) {
      return string.substring( 0, string.length - 3 ) + 'K'
    }
    else {
      return string
    }
  }
  return ''
}

class Video extends Component {

  render() {
    if (( this.props.video.id ) && ( this.props.videoStats )) {
      const url = `https://www.youtube.com/embed/${ this.props.video.id.videoId }?autoplay=1&iv_load_policy=3&showinfo=0&rel=0`
      return (
        <div>
          <VideoContainer>
            <iframe
              src = { url }
              title = { this.props.video.id.videoId }
              allowFullScreen = 'allowFullScreen'
              frameBorder = '0'
            />
          </VideoContainer>
          <p>{ this.props.video.snippet.title }</p>
          <p>{ this.props.video.snippet.channelTitle }</p>
          <p><FontAwesomeIcon icon = { faEye } />{ ' ' + getViews( this.props.videoStats.statistics.viewCount ) }</p>
          <p><FontAwesomeIcon icon = { faCalendarAlt } />{ ' ' + getDate( this.props.video.snippet.publishedAt )}</p>
        </div>
      )
    } else {
      return ( <div/> )
    }
  }
}

export default Video

const VideoContainer = styled.div`
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  position: relative;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
