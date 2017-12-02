const searchResultsStatistics = (state = [], action) => {
  if (action.type === 'FETCH_SEARCHRESULTS_STATISTICS') {
    console.log(action.payload)
    return action.payload
  } else {
    return state;
  }
}

export default searchResultsStatistics
