import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import VideoListItem from './VideoListItem'
import Spinner from './Spinner'

class VideoList extends Component {

  constructor(props) {
		super(props)
		this.state = {
			loadMore: true,
      hasMore: true
		}
	}

  loadItems(page) {
    if (this.state.loadMore) {
      if (this.props.videoList.nextPageToken) {
        this.setState({ loadMore: false })
        this.props.fetchVideoList(this.props.videoList.nextPageToken)
          .then((output) => this.props.fetchVideoListStats(output)
            .then((output) => this.setState({ loadMore: true })))
      } else if (!this.props.videoList.items) {
        this.setState({ loadMore: false })
        this.props.fetchVideoList()
          .then((output) => this.props.fetchVideoListStats(output)
            .then((output) => this.setState({ loadMore: true })))
      } else {
        this.setState({ hasMore: false })
      }
    }
  }

  render() {
    const spinner = <Spinner/>
    var items = []
    if ((this.props.videoList.items) && (this.props.videoListStats.items)) {
      const length = Math.min(this.props.videoList.items.length, this.props.videoListStats.items.length)
      for (var index = 0; index < length; index++) {
        items.push(
          <VideoListItem
            key = { this.props.videoList.items[index].id.videoId }
            video = { this.props.videoList.items[index] }
            videoStats = { this.props.videoListStats.items[index] }
            selectVideo = { this.props.selectVideo }
            selectVideoStats = { this.props.selectVideoStats }
          />
        )
      }
    }
    if ((!this.props.videoList.items) && (!this.state.hasMore)) {
      this.setState({ hasMore: true })
    }
    return (
      <div>
        <InfiniteScroll
          loadMore = { this.loadItems.bind(this) }
          hasMore = { this.state.hasMore }
          initialLoad = { true }
          loader = { spinner }>
          <ul>
            { items }
          </ul>
        </InfiniteScroll>
      </div>
    )
  }
}

export default VideoList
