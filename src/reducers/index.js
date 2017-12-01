import { combineReducers } from 'redux'
import selectedVideo from './selectedVideo'
import searchResults from './searchResults'

const reducer = combineReducers({
  selectedVideo,
  searchResults
})

export default reducer
