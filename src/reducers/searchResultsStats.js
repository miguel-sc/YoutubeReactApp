const searchResultsStats = (state = {}, action) => {
  if (action.type === 'FETCH_SEARCHRESULTS_STATS') {
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

export default searchResultsStats
