import { combineReducers } from 'redux'
import selectedVideo from './selectedVideo'
import searchResults from './searchResults'
import searchResultsStats from './searchResultsStats'
import searchTerm from './searchTerm'
import selectedVideoStats from './selectedVideoStats'

const reducer = combineReducers({
  selectedVideo,
  searchResults,
  searchResultsStats,
  searchTerm,
  selectedVideoStats
})

export default reducer
