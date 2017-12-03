const searchResultsStats = (state = {}, action) => {
  if (action.type === 'FETCH_SEARCHRESULTS_STATS') {
      return action.payload
  }
  else if ((action.type === 'FETCH_MORE_STATS')&&(state.items !== action.payload.items)) {
    action.payload.items = state.items.concat(action.payload.items)
    return action.payload
  }
   else {
    return state;
  }
}

export default searchResultsStats
