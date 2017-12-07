import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchSearchResults, fetchSearchResultsStats, setSearchTerm } from './../actions'
import SearchForm from './../components/SearchForm'

const mapStateToProps = ( state ) => {
  return {
    searchResults: state.searchResults,
    searchResultsStats: state.searchResultsStats
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return bindActionCreators({
    fetchSearchResults: fetchSearchResults,
    fetchSearchResultsStats: fetchSearchResultsStats,
    setSearchTerm: setSearchTerm
  }, dispatch )
}

class HomePage extends Component {
  render() {
    return (
      <div>
        <SearchForm
          fetchSearchResults = { this.props.fetchSearchResults }
          fetchSearchResultsStats = { this.props.fetchSearchResultsStats }
          setSearchTerm = { this.props.setSearchTerm }
        />
      </div>
    )
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( HomePage )
