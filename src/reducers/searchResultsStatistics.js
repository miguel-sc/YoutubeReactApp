const searchResultsStatistics = (state = [], action) => {
  if (action.type === 'FETCH_SEARCHRESULTS_STATISTICS') {
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

export default searchResultsStatistics
