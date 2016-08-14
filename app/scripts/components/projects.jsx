var React = require('react');

var BudgetMeComponent = React.createClass({
  render: function(){
    return (
      <div className="budget-me">
        <a className="col-md-4 col-xs-12" href="https://vierello.github.io/budget-me/"><img className="budget-me-image" src="./images/budget-me.png" /></a>
        <div className="col-md-8 col-xs-12">
          <h1>Budget Me</h1>
          <p className="budget-me-text">Everyone needs a budget! From the time I started earning my own money
            while working my first job, until today, my parents have always told me
            that I need a budget to help me make sure that I am taking care of all
            my responsibilities. Budget Me is the final project I created during the
            last few weeks of The Iron Yard. It was quite a challenge, and really
            combined everything I learned during my time there. I used backbone,
            bootstrap, and react mainly along with a couple smaller libraries that
            I added in.</p>
          <div className="budget-me-tech-bar">
            <p className="budget-me-tech">Technologies Used: </p>
            <a className="budget-me-links" href="http://getbootstrap.com/">Bootstrap</a>
            <a className="budget-me-links" href="http://backbonejs.org/">Backbone</a>
            <a className="budget-me-links" href="https://facebook.github.io/react/index.html">React</a>
          </div>
        </div>  
      </div>
    )
  }
});

var GithubProfileComponent = React.createClass({
  render: function(){
    return (
      <div>Hello World</div>
    )
  }
});

var RecipesComponent = React.createClass({
  render: function(){
    return (
      <div>Hello World</div>
    )
  }
});

var MajesticThaiComponent = React.createClass({
  render: function(){
    return (
      <div>Hello World</div>
    )
  }
});

var Sk8SiteComponent = React.createClass({
  render: function(){
    return (
      <div>Hello World</div>
    )
  }
});

var EtsyRecreationComponent = React.createClass({
  render: function(){
    return (
      <div>Hello World</div>
    )
  }
});

module.exports = {
  'BudgetMeComponent': BudgetMeComponent,
  'GithubProfileComponent': GithubProfileComponent,
  'RecipesComponent': RecipesComponent,
  'MajesticThaiComponent': MajesticThaiComponent,
  'Sk8SiteComponent': Sk8SiteComponent,
  'EtsyRecreationComponent': EtsyRecreationComponent,
};
