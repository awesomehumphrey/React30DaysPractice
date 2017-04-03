var React = require('react');
var ReactDOM  = require('react-dom');
var App = require('./components/App');

require('./styles/styles.css');
require('react-fontawesome');

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
