const searchResults = ( state = {}, action ) => {
  if ( action.type === 'FETCH_SEARCHRESULTS' ) {
    return action.payload
  }
  else if (( action.type === 'FETCH_MORE' ) && ( state.nextPageToken !== action.payload.nextPageToken )) {
    action.payload.items = state.items.concat( action.payload.items )
    return action.payload
  }
  else {
    return state
  }
}

export default searchResults
