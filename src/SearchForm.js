import React, { Component } from 'react'

class SearchForm extends Component {
	constructor(props) {
		super(props);
		this.state = { searchTerm: '' }
	}

	handleInputChange = event => {
		this.setState({ searchTerm: event.target.value })
	}

	handleSubmit = event => {
		event.preventDefault()
		if (this.state.searchTerm !== '') {
			this.props.fetchSearchResults(this.state.searchTerm)
			this.setState({ searchTerm: '' })
		}
	}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
					name="searchTerm"
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
          placeholder="Search"
				/>
  			<input type="submit" />
			</form>
    )
  }
}

export default SearchForm
