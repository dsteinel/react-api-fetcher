'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/Home';

// import Component from './components/Component';

// Load up the application styles
require('../scss/styles.scss');


const app = document.getElementById('app');
ReactDOM.render(<Home/>, app);
