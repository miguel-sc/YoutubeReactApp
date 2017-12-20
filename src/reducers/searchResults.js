const searchResults = (state = {}, action) => {
  if (action.type === 'FETCH_SEARCHRESULTS') {
    if (state.items) {
      action.payload.items = state.items.concat(action.payload.items)
    }
    return action.payload
  } else if (action.type === 'SEARCHTERM') {
    return {}
  } else {
    return state
  }
}

export default searchResults
