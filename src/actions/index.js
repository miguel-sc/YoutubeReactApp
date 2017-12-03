const API_KEY = 'AIzaSyD7YNsw1SJqchzfVqy3dv5FBV1fiTe4TgA'

export function fetchSearchResults(searchTerm) {
  const url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&type=video&q='+searchTerm+'&key='+API_KEY
  const searchResultsPayload = fetch(url).then(response => response.json())
  return {
    type: 'FETCH_SEARCHRESULTS',
    payload: searchResultsPayload
  }
}

export function fetchSearchResultsStats(action) {
  const items = [...action.payload.items]
  var searchResultsStats = []
  for (var i = 0; i < items.length; i++) {
    const url = 'https://www.googleapis.com/youtube/v3/videos?part=statistics&id='+items[i].id.videoId+'&key='+API_KEY
    searchResultsStats.push(fetch(url).then(response => response.json()))
  }
  return {
    type: 'FETCH_SEARCHRESULTS_STATS',
    payload: Promise.all(searchResultsStats)
  }
}

export function fetchMore(searchTerm, pageToken) {
  const url = 'https://www.googleapis.com/youtube/v3/search?pageToken='+pageToken+'&part=snippet&maxResults=6&type=video&q='+searchTerm+'&key='+API_KEY
  const fetchMorePayload = fetch(url).then(response => response.json())
  return {
    type: 'FETCH_MORE',
    payload: fetchMorePayload
  }
}

export function selectVideo(video) {
  return {
    type: 'SELECTVIDEO',
    payload: video
  }
}

export function selectVideoStats(videoStats) {
  return {
    type: 'SELECTVIDEO_STATS',
    payload: videoStats
  }
}

export function setSearchTerm(searchTerm) {
  return {
    type: 'SEARCHTERM',
    payload: searchTerm
  }
}
