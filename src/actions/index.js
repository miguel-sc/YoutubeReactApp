const API_KEY = 'AIzaSyD7YNsw1SJqchzfVqy3dv5FBV1fiTe4TgA'

export function fetchSearchResults(searchTerm) {
  const url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&type=video&q='+searchTerm+'&key='+API_KEY
  const searchResultsPayload = fetch(url).then(response => response.json())
  return {
    type: 'FETCH_SEARCHRESULTS',
    payload: searchResultsPayload
  }
}

export function fetchSearchResultsStatistics(action) {
  const items = [...action.payload.items]
  var searchResultsStatistics = []
  for (var i = 0; i < items.length; i++) {
    const url = 'https://www.googleapis.com/youtube/v3/videos?part=statistics&id='+items[i].id.videoId+'&key='+API_KEY
    searchResultsStatistics.push(fetch(url).then(response => response.json()))
  }
  console.log(searchResultsStatistics)
  return {
    type: 'FETCH_SEARCHRESULTS_STATISTICS',
    payload: Promise.all(searchResultsStatistics)
  }
}
