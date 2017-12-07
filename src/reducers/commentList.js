const commentList = ( state = {}, action ) => {
  if ( action.type === 'FETCH_COMMENTS' ) {
    return action.payload
  }
  else if (( action.type === 'FETCH_MORECOMMENTS' ) && ( state.nextPageToken !== action.payload.nextPageToken )) {
    action.payload.items = state.items.concat( action.payload.items )
    return action.payload
  }
  else if ( action.type === 'EMPTYCOMMENTS' ) {
    return {}
  } else {
    return state
  }
}

export default commentList
