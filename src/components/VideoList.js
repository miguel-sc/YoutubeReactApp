import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import VideoListItem from './VideoListItem'
import reactLogo from './../svg/reactLogo.svg'
import { Loader } from './../styles/componentStyles.js'

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
        .then(output => this.props.fetchMoreStats(output)
          .then(this.setState({loadMore: true})))
    }
  }

  render() {
    if ((this.props.searchResults.items)&&(this.props.searchResultsStats.items)) {
      const loader = <Loader src={reactLogo} alt="loader" />
      var items = []
      const length = Math.min(this.props.searchResults.items.length, this.props.searchResultsStats.items.length)
      for (var index = 0; index < length; index++) {
        items.push(
          <VideoListItem
            key={this.props.searchResults.items[index].id.videoId}
            video={this.props.searchResults.items[index]}
            videoStats={this.props.searchResultsStats.items[index]}
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
