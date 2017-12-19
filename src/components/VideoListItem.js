import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Thumbnail from './Thumbnail'
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

class VideoListItem extends Component {
  render() {
    if (( this.props.videoStats ) && ( this.props.video )) {
      return (
        <VideoListItemContainer>
          <Link
            onClick = {() => {
              this.props.selectVideo( this.props.video )
              this.props.selectVideoStats( this.props.videoStats )
            }}
            to = { '/video=' + this.props.video.id.videoId }
          >
            <Thumbnail
              video = { this.props.video }
            />
            <p>{ this.props.video.snippet.title }</p>
            <p>{ this.props.video.snippet.channelTitle }</p>
            <p>
              <FontAwesomeIcon icon = { faCalendarAlt } />
              { ' ' + getDate( this.props.video.snippet.publishedAt ) + ' ' }
              <FontAwesomeIcon icon = { faEye } />
              { ' ' + getViews( this.props.videoStats.statistics.viewCount )}
            </p>
          </Link>
			  </VideoListItemContainer>
      )
    }
    return <li/>
  }
}

export default VideoListItem

const VideoListItemContainer = styled.li`
  p {
    margin-top: 5px;
    margin-bottom: 5px;
  }
`
