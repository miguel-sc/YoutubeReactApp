import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import VideoListItem from './VideoListItem'
import Spinner from './Spinner'

class VideoList extends Component {

  constructor( props ) {
		super( props )
		this.state = {
			loadMore: true,
      hasMore: true
		}
	}

  loadItems( page ) {
    if (( this.props.searchTerm ) && ( this.state.loadMore)) {
      if ( this.props.searchResults.nextPageToken ) {
        this.setState({ loadMore: false })
        this.props.fetchSearchResults( this.props.searchTerm, this.props.searchResults.nextPageToken )
          .then( output => this.props.fetchSearchResultsStats( output )
            .then( this.setState({ loadMore: true })))
      } else if (!this.props.searchResults.items){
        this.setState({ loadMore: false })
        this.props.fetchSearchResults( this.props.searchTerm )
          .then( output => this.props.fetchSearchResultsStats( output )
            .then( this.setState({ loadMore: true })))
      } else {
        this.setState({ hasMore: false })
      }
    }
  }

  render() {
    const spinner = <Spinner/>
    var items = []
    if (( this.props.searchResults.items ) && ( this.props.searchResultsStats.items )) {
      const length = Math.min( this.props.searchResults.items.length, this.props.searchResultsStats.items.length )
      for ( var index = 0; index < length; index++ ) {
        items.push(
          <VideoListItem
            key = { this.props.searchResults.items[ index ].id.videoId }
            video = { this.props.searchResults.items[ index ]}
            videoStats = { this.props.searchResultsStats.items[ index ]}
            selectVideo = { this.props.selectVideo }
            selectVideoStats = { this.props.selectVideoStats }
          />
        )
      }
    }
    return (
      <div>
        <InfiniteScroll
          loadMore = { this.loadItems.bind( this )}
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
