import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import Comment from './Comment'

class CommentThread extends Component {

  constructor(props) {
		super(props)
		this.state = {
			loadMore: true
		}
	}

  componentDidMount() {
    if ((this.props.video.id)&&(this.props.commentList.items)) {
        if (this.props.video.id.videoId !== this.props.commentList.items[0].snippet.videoId) {
          this.setState({loadMore: false})
          this.props.fetchComments(this.props.video.id.videoId)
            .then(output => {this.setState({loadMore: true})})
        }
      }
  }

  loadItems(page) {
    if ((this.state.loadMore)&&(this.props.video.id)) {
      if (this.props.commentList.items) {
          this.setState({loadMore: false})
          this.props.fetchMoreComments(this.props.video.id.videoId, this.props.commentList.nextPageToken)
            .then(output => {this.setState({loadMore: true})})
      } else {
        this.setState({loadMore: false})
        this.props.fetchComments(this.props.video.id.videoId)
          .then(output => {this.setState({loadMore: true})})
      }
    }
  }

  render() {
    const loader = <div>Loading ...</div>
    var items = []
    if (this.props.commentList.items) {
      for (var index = 0; index < this.props.commentList.items.length; index++) {
        items.push(
          <Comment
            key={this.props.commentList.items[index].id}
            comment={this.props.commentList.items[index]}
          />
        )
      }
    }
      return (
        <div>
          <InfiniteScroll
            loadMore={this.loadItems.bind(this)}
            hasMore={true}
            initialLoad={true}
            loader={loader}>
            <ul>
              {items}
            </ul>
          </InfiniteScroll>
        </div>
      )
  }
}

export default CommentThread
