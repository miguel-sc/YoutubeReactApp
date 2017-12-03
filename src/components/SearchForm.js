import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class SearchForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: ''
		}
	}

	handleInputChange = event => {
		this.setState({ searchTerm: event.target.value })
	}

	handleSubmit = event => {
		event.preventDefault()
		if (this.state.searchTerm !== '') {
			const searchTerm = this.state.searchTerm
			this.setState({ searchTerm: '' })
			this.props.setSearchTerm(searchTerm)
			this.props.fetchSearchResults(searchTerm)
				.then(output => this.props.fetchSearchResultsStats(output)
					.then(this.props.history.push('/search='+searchTerm))
				)
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

export default withRouter(SearchForm)
