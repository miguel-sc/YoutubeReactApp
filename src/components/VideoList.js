import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import VideoListItem from './VideoListItem'

class VideoList extends Component {

  constructor(props) {
		super(props);
		this.state = {
			loadMore: true
		}
	}

  loadItems(page) {
    if (this.state.loadMore) {
      this.setState({loadMore: false})
      this.props.fetchMore(this.props.searchTerm, this.props.searchResults.nextPageToken)
        .then(output => this.props.fetchSearchResultsStats(output)
          .then(this.setState({loadMore: true})))
    }
  }

  render() {
    if (this.props.searchResults.items) {
      const itemList = [...this.props.searchResults.items]
      const loader = <div>Loading ...</div>
      var items = []
      const length = Math.min(this.props.searchResults.items.length, this.props.searchResultsStats.length)
      for (var index = 0; index < length; index++) {
        items.push(
          <VideoListItem
            key={itemList[index].id.videoId}
            video={itemList[index]}
            videoStats={this.props.searchResultsStats[index]}
            selectVideo={this.props.selectVideo}
            selectVideoStats={this.props.selectVideoStats}
          />
        )
      }
      return (
        <div>
          <h2>{'Results for: '+this.props.searchTerm}</h2>
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
    } else {
      return (<div/>)
    }
  }
}

export default VideoList
