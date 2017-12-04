const API_KEY = 'AIzaSyD7YNsw1SJqchzfVqy3dv5FBV1fiTe4TgA'

export function fetchSearchResults(searchTerm) {
  const url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&type=video&q='+searchTerm+'&key='+API_KEY
  const searchResultsPayload = fetch(url).then(response => response.json())
  return {
    type: 'FETCH_SEARCHRESULTS',
    payload: searchResultsPayload
  }
}

export function fetchSearchResultsStats(action) {
  const items = action.payload.items
  var id= items[0].id.videoId
  for (var i = 1; i < items.length; i++) {
    id+=','+items[i].id.videoId
  }
  const url = 'https://www.googleapis.com/youtube/v3/videos?part=statistics&id='+id+'&key='+API_KEY
  const searchResultsStats = fetch(url).then(response => response.json())
  return {
    type: 'FETCH_SEARCHRESULTS_STATS',
    payload: searchResultsStats
  }
}

export function fetchMore(searchTerm, pageToken) {
  const url = 'https://www.googleapis.com/youtube/v3/search?pageToken='+pageToken+'&part=snippet&maxResults=12&type=video&q='+searchTerm+'&key='+API_KEY
  const fetchMorePayload = fetch(url).then(response => response.json())
  return {
    type: 'FETCH_MORE',
    payload: fetchMorePayload
  }
}

export function fetchMoreStats(action) {
  const items = action.payload.items
  var id= items[0].id.videoId
  for (var i = items.length-12; i < items.length; i++) {
    id+=','+items[i].id.videoId
  }
  const url = 'https://www.googleapis.com/youtube/v3/videos?part=statistics&id='+id+'&key='+API_KEY
  const fetchMoreStatsPayload = fetch(url).then(response => response.json())
  return {
    type: 'FETCH_MORE_STATS',
    payload: fetchMoreStatsPayload
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

export function emptyComments() {
  return {
    type: 'EMPTYCOMMENTS'
  }
}

export function fetchComments(videoId) {
  const url = 'https://www.googleapis.com/youtube/v3/commentThreads?order=relevance&maxResults=24&textFormat=plainText&part=snippet&videoId='+videoId+'&key='+API_KEY
  const commentsPayload = fetch(url).then(response => response.json())
  return {
    type: 'FETCH_COMMENTS',
    payload: commentsPayload
  }
}

export function fetchMoreComments(videoId, pageToken) {
  const url = 'https://www.googleapis.com/youtube/v3/commentThreads?order=relevance&maxResults=24&textFormat=plainText&part=snippet&videoId='+videoId+'&pageToken='+pageToken+'&key='+API_KEY
  const moreCommentsPayload = fetch(url).then(response => response.json())
  return {
    type: 'FETCH_MORECOMMENTS',
    payload: moreCommentsPayload
  }

}
