webpack-react-redux-simple-stater
================================

> This simple stater lets you quickly set up a project including karma test runner and Webpack module system.

About
====
webpack-simple-starter will help you build new React projects using modern technologies.
Out of the box it comes with support for:
- Webpack2
- Redux
- ES2015 via Babel-Loader
- Different supported style languages (sass, scss, less, stylus) with Skeleton Css as base framework
- Automatic code linting via esLint
- Ability to unit test components via Karma and Mocha

## Installation
Clone this repos to your local 
```bash
https://github.com/kidjp85/webpack-react-redux-simple-stater.git
```

Install node packages
```bash
cd webpack-react-redux-simple-stater

yarn
```

## Usage

Run webpack in dev mode
```bash
yarn start
```

Run local server (Express Nodejs)
```bash
yarn server
```

Run Karma test
```bash
yarn test
```

Deploy app to heroku
```bash
yarn build
heroku create
git push heroku master
```



## License
MIT