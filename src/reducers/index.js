import { combineReducers } from 'redux'
import selectedVideo from './selectedVideo'
import searchResults from './searchResults'
import searchResultsStatistics from './searchResultsStatistics'

const reducer = combineReducers({
  selectedVideo,
  searchResults,
  searchResultsStatistics
})

export default reducer
