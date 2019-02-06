import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

class SearchForm extends Component {

  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
  }

  handleInputChange = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.searchTerm !== '') {
      this.props.setSearchTerm(this.state.searchTerm)
      this.props.history.push(`/search=${ this.state.searchTerm }`)
      this.setState({ searchTerm: '' })
    }
  }

  render() {
    return (
      <SearchFormContainer>
        <form onSubmit = { this.handleSubmit }>
          <input
            type = 'text'
            name = 'searchTerm'
            value = { this.state.searchTerm }
            onChange = { this.handleInputChange }
            placeholder = 'Search YouTube'
            autoComplete = 'off'
          />
          <input type = 'submit' />
        </form>
      </SearchFormContainer>
    )
  }
}

export default withRouter(SearchForm)

const SearchFormContainer = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
  input[ type = text ] {
    font-size: 14px;
    width: calc(100% - 40px);
    height: 28px;
    padding-left: 20px;
    padding-right: 20px;
    border: 1px solid #ddd;
  }

  input[ type = text ]:focus {
    outline: none;
    border: 1px solid #666;
  }

  input[ type = submit ] {
    display: none;
  }
`
