const commentList = ( state = {}, action ) => {
  if ( action.type === 'FETCH_COMMENTS' ) {
    if ( state.items ) {
      action.payload.items = state.items.concat( action.payload.items )
    }
    return action.payload
  }
  else if ( action.type === 'SELECTVIDEO' ) {
    return {}
  } 
  else {
    return state
  }
}

export default commentList
