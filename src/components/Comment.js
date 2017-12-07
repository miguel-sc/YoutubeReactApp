import React, { Component } from 'react'

class Comment extends Component {
  
  render() {
    return (
      <li>
        <p>{ this.props.comment.snippet.topLevelComment.snippet.textDisplay }</p>
        <p>{ this.props.comment.snippet.topLevelComment.snippet.likeCount + ' upvotes' }</p>
      </li>
    )
  }
}

export default Comment
