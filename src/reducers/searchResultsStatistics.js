const searchResultsStatistics = (state = [], action) => {
  if (action.type === 'FETCH_SEARCHRESULTS_STATISTICS') {
    return action.payload
  } else {
    return state;
  }
}

export default searchResultsStatistics
