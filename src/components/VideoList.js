import React, { Component } from 'react'
import VideoListItem from './VideoListItem'

class VideoList extends Component {

  render() {
    if (this.props.searchResults.items) {
      const itemList = [...this.props.searchResults.items]
      return (
        <div>
          <h2>{'Results for: '+this.props.searchTerm}</h2>
          <ul>
            {itemList.map(
              (video,index) => <VideoListItem
                key={video.id.videoId}
                video={video}
                videoStatistics={this.props.searchResultsStatistics[index]}
                selectVideo={this.props.selectVideo}/>
            )}
          </ul>
        </div>
      )
    } else {
      return (<div/>)
    }
  }
}

export default VideoList
