const searchResults = (state = [], action) => {
  if (action.type === 'FETCH_SEARCHRESULTS') {
    return [...action.payload.items]
  } else {
    return state;
  }
}

export default searchResults
