# boilerplate-react

This is another boilerplate for frontend app driven by React.

Boilerplate is dockerized with Docker Compose.

**Frontend:**
- NodeJS [https://nodejs.org/en/]
- Webpack 4.x [https://webpack.js.org/]
- Babel 7.x [https://babeljs.io/]
- ESLint [https://eslint.org/]
- React 16.x [https://reactjs.org/]
- Enzyme 3.x [https://airbnb.io/enzyme/]
- Jest 23.x [https://jestjs.io/]

Rules for ESLint meet Airbnb React/JSX Style Guide (aka best practices) 
[https://github.com/airbnb/javascript/tree/master/react]

Package `"babel-core": "^7.0.0-bridge.0"` is necessary because of Jest issue:
`Requires Babel "^7.0.0-0", but was loaded with "6.26.3". If you are sure you have a compatible version of @babel/core, 
it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error 
to look for the first entry that doesn't mention "@babel/core" or "babel-core" to see what is calling Babel.`
[https://github.com/babel/babel/issues/8206#issuecomment-419705758]

**Details:**
TBA
