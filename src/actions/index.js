const API_KEY = 'AIzaSyD7YNsw1SJqchzfVqy3dv5FBV1fiTe4TgA'
const BASE_URL = 'https://www.googleapis.com/youtube/v3'

export const fetchSearchResults = ( searchTerm, pageToken = '' ) => {
  const url = `${ BASE_URL }/search?pageToken=${ pageToken }&part=snippet&maxResults=12&type=video&q=${ searchTerm }&key=${ API_KEY }`
  const searchResultsPayload = fetch( url ).then( response => response.json() )
  return {
    type: 'FETCH_SEARCHRESULTS',
    payload: searchResultsPayload
  }
}

export const fetchSearchResultsStats = ( action ) => {
  const items = action.payload.items
  var id = ''
  if ( items[ 0 ] ) {
    id = items[ items.length - 12 ].id.videoId
    for ( var i = items.length - 11; i < items.length; i++ ) {
      id += ',' + items[i].id.videoId
    }
  }
  const url = `${ BASE_URL }/videos?part=statistics&id=${ id }&key=${ API_KEY }`
  const searchResultsStats = fetch( url ).then( response => response.json() )
  return {
    type: 'FETCH_SEARCHRESULTS_STATS',
    payload: searchResultsStats
  }
}

export const selectVideo = ( video ) => {
  return {
    type: 'SELECTVIDEO',
    payload: video
  }
}

export const selectVideoStats = ( videoStats ) => {
  return {
    type: 'SELECTVIDEO_STATS',
    payload: videoStats
  }
}

export const setSearchTerm = ( searchTerm ) => {
  return {
    type: 'SEARCHTERM',
    payload: searchTerm
  }
}

export const fetchComments = ( videoId, pageToken = '' ) => {
  const url = `${ BASE_URL }/commentThreads?order=relevance&maxResults=24&textFormat=plainText&part=snippet&videoId=${ videoId }&pageToken=${ pageToken }&key=${ API_KEY }`
  const commentsPayload = fetch( url ).then( response => response.json() )
  return {
    type: 'FETCH_COMMENTS',
    payload: commentsPayload
  }
}
