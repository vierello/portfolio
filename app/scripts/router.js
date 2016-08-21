var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

// var HomeComponent = require('./components/home.jsx').HomeComponent;
// var ResumeComponent = require('./components/resume.jsx');


var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'home/': 'index',
    'resume/': 'resume',
  },

  index: function() {
    ReactDOM.render(
      React.createElement(HomeComponent, {router: this}),
      document.getElementById('container')
    )
  },

  resume: function() {
    ReactDOM.render(
      React.createElement(ResumeComponent, {router: this}),
      document.getElementById('container')
    )
  }
});

var router = new Router();

module.exports = router;
