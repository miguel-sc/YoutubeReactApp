import { combineReducers } from 'redux'
import selectedVideo from './selectedVideo'
import searchResults from './searchResults'
import searchResultsStatistics from './searchResultsStatistics'
import searchTerm from './searchTerm'

const reducer = combineReducers({
  selectedVideo,
  searchResults,
  searchResultsStatistics,
  searchTerm
})

export default reducer
