'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Searchengine from '../components/searchengine/Searchengine';


export default class Home extends React.Component {
	constructor() {
		super();

		this.state = {
			initialArtist: 'Lucky Dragons',
		};
	}

	render() {
		return (
			<div class="home-page">
				<Searchengine initialArtist={this.state.initialArtist}/>
			</div>
		);
	}
}
