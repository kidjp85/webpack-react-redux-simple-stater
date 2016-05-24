webpack-react-redux-simple-stater
================================

> This simple stater lets you quickly set up a project including karma test runner and Webpack module system.

About
====
webpack-simple-starter will help you build new React projects using modern technologies.
Out of the box it comes with support for:
- Webpack
- ES2015 via Babel-Loader
- Different supported style languages (sass, scss, less, stylus) with Skeleton Css as base framework
- Automatic code linting via esLint
- Ability to unit test components via Karma and Mocha/Chai

## Installation
Clone this repos to your local 
```bash
https://github.com/kidjp85/webpack-react-redux-simple-stater.git
```

Install node packages
```bash
cd webpack-react-redux-simple-stater

npm install
```

## Usage

Run webpack in dev mode
```bash
npm start
```

Run local server (Express Nodejs)
```bash
npm run server
```

Run Karma test
```bash
npm run test
```

Deploy app to heroku
```bash
npm run build
heroku create
git push heroku master
```



## License
MIT