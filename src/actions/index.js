const API_KEY = 'AIzaSyD7YNsw1SJqchzfVqy3dv5FBV1fiTe4TgA'

export function fetchSearchResults(searchTerm) {
  const url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&type=video&q='+searchTerm+'&key='+API_KEY
  const searchResults = fetch(url).then(response => response.json())
  return {
    type: 'FETCH_SEARCHRESULTS',
    payload: searchResults
  }
}
