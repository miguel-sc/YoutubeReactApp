import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

class SearchForm extends Component {

	constructor ( props ) {
		super( props )
		this.state = {
			searchTerm: ''
		}
	}

	handleInputChange = ( event ) => {
		this.setState({ searchTerm: event.target.value })
	}

	handleSubmit = ( event ) => {
		event.preventDefault()
		if ( this.state.searchTerm !== '' ) {
			const searchTerm = this.state.searchTerm
			this.setState({ searchTerm: '' })
			this.props.setSearchTerm( searchTerm )
			this.props.fetchSearchResults( searchTerm )
				.then( output => this.props.fetchSearchResultsStats( output )
					.then( this.props.history.push( `/search=${ searchTerm }` ))
				)
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
					/>
					<input type = 'submit' />
				</form>
			</SearchFormContainer>
    )
  }
}

export default withRouter( SearchForm )

const SearchFormContainer = styled.div`
	margin-top: 25px;
	margin-bottom: 25px;
	input[ type = text ] {
		font-size: 14px;
		width: calc(100% - 40px);
		height: 28px;
		padding-left: 20px;
		padding-right: 20px;
		border: 1px solid #ccc;
	}

	input[ type = submit ] {
		display: none;
	}
`
