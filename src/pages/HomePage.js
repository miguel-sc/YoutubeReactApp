import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setSearchTerm } from './../actions'
import SearchForm from './../components/SearchForm'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setSearchTerm: setSearchTerm
  }, dispatch)
}

class HomePage extends Component {
  render() {
    return (
      <div>
        <SearchForm
          setSearchTerm = { this.props.setSearchTerm }
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
