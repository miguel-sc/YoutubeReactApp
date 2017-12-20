import React, { Component } from 'react'
import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/fontawesome-free-solid'

function small2big(url)
{
   return url.replace(/(\/.*s)28(.*\/photo.jpg)$/, '$148$2')
}

class Comment extends Component {

  render() {
    return (
      <CommentContainer>
        <div>
          <img
            src = { small2big(this.props.comment.snippet.topLevelComment.snippet.authorProfileImageUrl) }
            alt = { this.props.comment.snippet.topLevelComment.snippet.authorDisplayName }
          />
        </div>
        <div className = 'comment-text' >
          <p>{ this.props.comment.snippet.topLevelComment.snippet.textDisplay }</p>
          <p className = 'gray-text' >
            <FontAwesomeIcon icon = { faThumbsUp } />
            { ' ' + this.props.comment.snippet.topLevelComment.snippet.likeCount }
            { ' - ' + this.props.comment.snippet.topLevelComment.snippet.authorDisplayName }
          </p>
        </div>
      </CommentContainer>
    )
  }
}

export default Comment

const CommentContainer = styled.li`
  display: inline-block;
  width: 100%;
  margin: 0px;
  padding-bottom: 10px;
  margin-bottom: 10px;

  div {
    display: inline-block;
    vertical-align:top;
  }

  .comment-text {
    margin-left: 10px;
    width: calc( 100% - 48px - 10px );
  }

  img {
    width: 48px;
    height: 48px;
    margin-top: 5px;
    border-radius: 24px;
  }

  .gray-text {
    color: #555;
  }
`
