var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var HomeComponent = require('./components/home.jsx').HomeComponent;
var BudgetMeComponent = require('./components/projects.jsx').BudgetMeComponent;
var GithubProfileComponent = require('./components/projects.jsx').GithubProfileComponent;
var RecipesComponent = require('./components/projects.jsx').RecipesComponent;
var MajesticThaiComponent = require('./components/projects.jsx').MajesticThaiComponent;
var Sk8SiteComponent = require('./components/projects.jsx').Sk8SiteComponent;
var EtsyRecreationComponent = require('./components/projects.jsx').EtsyRecreationComponent;
var ResumeComponent = require('./components/resume.jsx').ResumeComponent;
var AboutMeComponent = require('./components/about_me.jsx').AboutMeComponent;


var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'home/': 'index',
    'budgetme/': 'budgetMe',
    'githubprofile/': 'githubProfile',
    'recipes/': 'recipes',
    'majesticthai/': 'majesticThai',
    'sk8site/': 'sk8Site',
    'etsyrecreation/': 'etsyRecreation',
    'resume/': 'resume',
    'aboutme/': 'aboutMe'
  },

  index: function() {
    ReactDOM.render(
      React.createElement(HomeComponent, {router: this}),
      document.getElementById('container')
    )
  },

  budgetMe: function() {
    ReactDOM.render(
      React.createElement(BudgetMeComponent, {router: this}),
      document.getElementById('container')
    )
  },

  githubProfile: function() {
    ReactDOM.render(
      React.createElement(GithubProfileComponent, {router: this}),
      document.getElementById('container')
    )
  },

  recipes: function() {
    ReactDOM.render(
      React.createElement(RecipesComponent, {router: this}),
      document.getElementById('container')
    )
  },

  majesticThai: function() {
    ReactDOM.render(
      React.createElement(MajesticThaiComponent, {router: this}),
      document.getElementById('container')
    )
  },

  sk8Site: function() {
    ReactDOM.render(
      React.createElement(Sk8SiteComponent, {router: this}),
      document.getElementById('container')
    )
  },

  etsyRecreation: function() {
    ReactDOM.render(
      React.createElement(EtsyRecreationComponent, {router: this}),
      document.getElementById('container')
    )
  },

  resume: function() {
    ReactDOM.render(
      React.createElement(ResumeComponent, {router: this}),
      document.getElementById('container')
    )
  },

  aboutMe: function() {
    ReactDOM.render(
      React.createElement(AboutMeComponent, {router: this}),
      document.getElementById('container')
    )
  }
});

var router = new Router();

module.exports = router;
