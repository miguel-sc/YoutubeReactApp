const searchResults = (state = [], action) => {
  if (action.type === 'FETCH_SEARCHRESULTS') {
    console.log(action.payload.items)
    return [...action.payload.items]
  } else {
    return state;
  }
}

export default searchResults
