'use strict';

import 'whatwg-fetch'; // polyfill fetch

import React from 'react';
import ReactDOM from 'react-dom';

import Searchbar from './includes/Searchbar';


class Searchengine extends React.Component {

	constructor() {
		super();

		this.state = {
			data: undefined
		};
	}

	componentWillMount() {
		this._onSearch(this.props.initialArtist);
	}

	render() {
		let
			albums,
			albumList
		;

		if (!!this.state.data) {
			albums = this.state.data.map((artist) => {
				return (
					<li key={artist.album_id}>
						<a href={artist.album_url} target="_blank" title={'zum Album ' + artist.album_title}>
							<img src={artist.album_image_file} alt={artist.album_title} />
							{artist.album_title}
						</a>
					</li>
				);
			});

			if (albums.length !== 0 && this.state.success) {
				albumList = (
					<div>
						<h2><span>({albums.length})</span> Album{albums.length > 1 ? 's':''} of the band: <span>{this.state.headline}</span></h2>
						<ul>{albums}</ul>
					</div>
				);
			} else if (albums.length === 0 && this.state.success) {
				albumList = (
					<h2>Sorry, nothing found for the Band: <span>{this.state.headline}</span></h2>
				);
			}

			if (!this.state.success) {
				albumList = (
					<h2>Irghs, we were not able to get any datas. t('_'t) => try again later, sorry!</h2>
				);
			}

			return (
				<div class="search-engine">
					<div>
						<h1>What band are you looking for?</h1>
						<Searchbar changeArtist={this.changeArtist.bind(this)}/>
					</div>
					<div className="image-grid">
						{albumList}
					</div>
				</div>
			);
		} else {
			return (
				<div class="search-engine">
					<h2>Loading ...</h2>
				</div>
			);
		}
	}

	_onSearch(query) {
		this.state.headline = query;
		this.fetchData(query);
	}

	changeArtist(query) {
		this._onSearch(query);
	}

	fetchData(artist) {
		let
			queryNoSpaces = artist.split(' ').join('_'), // do not allow spaces
			url = 'https://freemusicarchive.org/api/get/albums.json?api_key=RNATQZ28PW6W9OIJ&artist_handle=' + queryNoSpaces
		;

		fetch(url).then((response) => {
			return response.json();
		}).then((json) => {
			this.setState({
				data: json.dataset,
				success: true
			});
		}).catch((err) => {
			this.setState({
				data: [], // pass emtpy to be not undefined
				success: false
			});
		});
	}
}

export { Searchengine as default };
