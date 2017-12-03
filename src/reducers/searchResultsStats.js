const searchResultsStats = (state = [], action) => {
  if (action.type === 'FETCH_SEARCHRESULTS_STATS') {
    if (action.payload.length !== state.length) {
      return action.payload
    }
    else {
      return state;
    }
  } else {
    return state;
  }
}

export default searchResultsStats
