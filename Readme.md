# Introduction

Demo App for the talk [http://fayway.github.io/ComponentsTesting/](http://fayway.github.io/ComponentsTesting/)

## Keywords

- [ES6](http://es6-features.org/)
- [Webpack](http://webpack.github.io/)
- [Ractive.js](http://www.ractivejs.org/)
- [Mocha](http://mochajs.org/)
- [Sinon.JS](http://sinonjs.org/)
- [Chai](http://chaijs.com/)
- [jsdom](https://github.com/tmpvar/jsdom)
- [Material Design Lite](http://www.getmdl.io/)

## Installation Prerequisites

- Install Node 4
- Clone this repo
- Install dependencies

```
cd project-folder
```

```
npm install
```

## Internal server (with LiveReload)

```
npm run dev
```

Navigate to `http://localhost:8080/`

# Tests

## Running CLI test

```
npm test
```

It will execute tests listed in directory `tests/slides/`

## Browser tests

Launch
```
npm run devtest
```

And navigate to `http://localhost:8080/test`

# Webpack Recap

## Installing Webpack
```
npm install webpack -g
```

## Run Webpack with watch mode enabled
```
webpack --watch
```

## Webpack Dev Server
Webpack has a web server called webpack-dev-server. From the command line, install webpack-dev-server globally:

```
npm install webpack-dev-server -g
```

From the command line, run the following command:

```
webpack-dev-server
```

To enable hot-loading and remove the App Ready status bar at the top, terminate the webpack-dev-server and rerun webpack-dev-server with the inline flag:

```
webpack-dev-server --inline
```