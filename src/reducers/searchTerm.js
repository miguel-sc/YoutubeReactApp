const searchTerm = (state = '', action) => {
  if (action.type === 'SEARCHTERM') {
    return action.payload
  } else {
    return state
  }
}

export default searchTerm
