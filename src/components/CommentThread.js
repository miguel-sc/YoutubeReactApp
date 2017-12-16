import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import Comment from './Comment'
import Spinner from './Spinner'

class CommentThread extends Component {

  constructor( props ) {
		super( props )
		this.state = {
			loadMore: true
		}
	}

  componentDidMount() {
    if (( this.props.video.id ) && ( this.props.commentList.items )) {
        if ( this.props.video.id.videoId !== this.props.commentList.items[0].snippet.videoId ) {
          this.setState({ loadMore: false })
          this.props.emptyComments()
          this.props.fetchComments( this.props.video.id.videoId )
            .then( output => { this.setState({ loadMore: true })})
        }
      }
  }

  loadItems( page ) {
    if (( this.state.loadMore ) && ( this.props.video.id )) {
      if ( this.props.commentList.items ) {
        this.setState({ loadMore: false })
        this.props.fetchMoreComments( this.props.video.id.videoId, this.props.commentList.nextPageToken )
          .then( output => { this.setState({ loadMore: true })})
      } else {
        this.setState({ loadMore: false })
        this.props.fetchComments( this.props.video.id.videoId )
          .then( output => { this.setState({ loadMore: true })})
      }
    }
  }

  render() {
    const spinner = <Spinner/>
    var items = []
    var hasMore = true
    if ( this.props.commentList.items ) {
      for ( var index = 0; index < this.props.commentList.items.length; index++ ) {
        items.push(
          <Comment
            key = { this.props.commentList.items[ index ].id }
            comment = { this.props.commentList.items[ index ] }
          />
        )
      }
      if ( !this.props.commentList.nextPageToken ) {
        hasMore = false
      }
    }
    return (
      <div>
        <InfiniteScroll
          loadMore = { this.loadItems.bind( this ) }
          hasMore = { hasMore }
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
