import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import Comment from './Comment'
import Spinner from './Spinner'

class CommentThread extends Component {

  constructor( props ) {
		super( props )
		this.state = {
			hasMore: true,
      loadMore: true
		}
	}

  loadItems( page ) {
    if (( this.props.video.id ) && ( this.state.loadMore)) {
      if ( this.props.commentList.nextPageToken ) {
        this.setState({ loadMore: false })
        this.props.fetchComments( this.props.video.id.videoId, this.props.commentList.nextPageToken )
          .then( output => { this.setState({ loadMore: true })})
      } else if (!this.props.commentList.items){
        this.setState({ loadMore: false })
        this.props.fetchComments( this.props.video.id.videoId )
          .then( output => { this.setState({ loadMore: true })})
      } else {
        this.setState({ hasMore: false })
      }
    }
  }

  render() {
    const spinner = <Spinner/>
    var items = []
    if ( this.props.commentList.items ) {
      for ( var index = 0; index < this.props.commentList.items.length; index++ ) {
        items.push(
          <Comment
            key = { this.props.commentList.items[ index ].id }
            comment = { this.props.commentList.items[ index ] }
          />
        )
      }
    }
    return (
      <div>
        <InfiniteScroll
          loadMore = { this.loadItems.bind( this ) }
          hasMore = { this.state.hasMore }
          initialLoad = { true }
          loader = { spinner }
        >
          <ul>
            { items }
          </ul>
        </InfiniteScroll>
      </div>
    )
  }
}

export default CommentThread
