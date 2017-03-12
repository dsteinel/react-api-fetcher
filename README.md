# React API Fetcher
This is a small application to search for artist album covers.



### Install

with Npm

	npm install

...or with yarn

	yarn install

### Usage
to start a the webpack-dev-server, run from the project root

	npm run dev

and test it in your browser

	localhost:8080



### Visual Regression testing

If you want to do some visual regression testing, you first have to install [BackstopJS](https://github.com/garris/BackstopJS) globally with

	npm install -g backstopjs

after installing it, run the server with ´npm run dev´ and go to the folder: /src (here is the config file for backstopJS). Inside the folder just run

	backstop reference

This command generates a reference point from the current state. You can start the test with

	backstop test


