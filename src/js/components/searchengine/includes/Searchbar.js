'use strict';

import React from 'react';
import ReactDOM from 'react-dom';


class Searchbar extends React.Component {

	constructor() {
		super();
	}

	_onSubmit(event) {
		event.preventDefault();
		this.props.changeArtist(this.refs.searchInput.value);
	}

	render() {
		return (
			<form class="search-bar active" onSbumit={ this._onSubmit.bind(this) }>
				<input ref="searchInput" type="text" placeholder="Type to search" />
				<button type="submit" value="Submit" onClick={ this._onSubmit.bind(this) }><span>Search</span></button>
			</form>
		);
	}
}

export { Searchbar as default };
