import React, { Component } from 'react'
import styled from 'styled-components'

class Thumbnail extends Component {
  render() {
    return (
      <ThumbnailContainer>
        <img
          src={this.props.video.snippet.thumbnails.high.url}
          alt={this.props.video.snippet.title}
          width={this.props.video.snippet.thumbnails.high.width / 2}
          height={this.props.video.snippet.thumbnails.high.height / 2}
        />
      </ThumbnailContainer>
    )
  }
}

export default Thumbnail

const ThumbnailContainer = styled.div`
  width: 240px;
  height: 134px;
  overflow: hidden;

  img {
    margin-top: -23px;
  }
`
