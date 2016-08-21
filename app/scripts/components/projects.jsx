var React = require('react');

var BudgetMeComponent = React.createClass({
  render: function(){
    return (
      <div className="budget-me">
        <a className="col-md-5 col-xs-12" href="https://vierello.github.io/budget-me/"><img className="budget-me-image" src="./images/budget-me.png" /></a>
        <div className="text-container col-md-7 col-xs-12">
          <h1 className="budget-me-title"><p>Budget Me</p></h1>
          <p className="budget-me-text">Everyone needs a budget! From the time I
              started earning my own money while working my first job, until today,
              my parents have always told me that I need a budget to help me make
              sure that I am taking care of all my responsibilities. Budget Me is
              the final project I created during the last few weeks of The Iron Yard.
              It was quite a challenge, and really combined everything I learned
              during my time there.
          </p>
          <div className="budget-me-tech-bar">
            <p className="budget-me-tech">Technologies Used: </p>
            <a className="budget-me-links" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Javascript</a>
            <a className="budget-me-links" href="https://getbootstrap.com/">Bootstrap</a>
            <a className="budget-me-links" href="http://backbonejs.org/">Backbone</a>
            <a className="budget-me-links" href="https://facebook.github.io/react/index.html">React</a>
            <a className="budget-me-links" href="http://sass-lang.com/">Sass</a>
            <a className="budget-me-links" href="https://jquery.com/">JQuery</a>
          </div>
        </div>
      </div>
    )
  }
});

var GithubProfileComponent = React.createClass({
  render: function(){

    return (
      <div className="github-profile">
        <div className="text-container col-md-7 col-xs-12">
          <h1 className="github-profile-title"><p>Github Profile Recreation</p></h1>
          <p className="github-profile-text">For this project I was tasked to recreate
              my Github Profile as closely as possible. We were not required to make
              it fully functional, though I tried to make it as functional as I could
              with the knowledge I had at the time.
          </p>
          <div className="github-profile-tech-bar">
            <p className="github-profile-tech">Technologies Used: </p>
            <a className="github-profile-links" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Javascript</a>
            <a className="github-profile-links" href="https://jquery.com/">JQuery</a>
            <a className="github-profile-links" href="http://handlebarsjs.com/">Handlebars</a>
            <a className="github-profile-links" href="https://developer.mozilla.org/en-US/docs/AJAX">Ajax</a>
            <a className="github-profile-links" href="http://sass-lang.com/">Sass</a>
          </div>
        </div>
          <a className="github-profile-image-link col-md-5 col-xs-12" href="http://vierello.github.io/4.4-github-profile/"><img className="github-profile-image" src="./images/github-profile.png" /></a>
      </div>
    )
  }
});

var RecipesComponent = React.createClass({
  render: function(){
    return (
      <div className="recipes">
        <a className="col-md-5 col-xs-12" href="https://vierello.github.io/8.4-recipes/"><img className="recipes-image" src="./images/recipes.png" /></a>
        <div className="text-container col-md-7 col-xs-12">
          <h1 className="recipes-title"><p>Recipes</p></h1>
          <p className="recipes-text">For this project the goal was to create a
              recipe book that has a way to adjust recipes based on serving size.
              To accomplish this I used React for the views and Backbone for the
              models and collections. This was also the first time we used Parse
              to store data.
          </p>
          <div className="recipes-tech-bar">
            <p className="recipes-tech">Technologies Used: </p>
            <a className="recipes-links" href="https://getbootstrap.com/">Bootstrap</a>
            <a className="recipes-links" href="http://backbonejs.org/">Backbone</a>
            <a className="recipes-links" href="https://facebook.github.io/react/index.html">React</a>
            <a className="recipes-links" href="http://sass-lang.com/">Sass</a>
            <a className="recipes-links" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Javascript</a>
            <a className="recipes-links" href="https://jquery.com/">JQuery</a>
            <a className="recipes-links" href="https://github.com/ParsePlatform/parse-server-example">Parse</a>
          </div>
        </div>
      </div>
    )
  }
});

var MajesticThaiComponent = React.createClass({
  render: function(){
    return (
      <div className="majestic-thai">
        <div className="text-container col-md-7 col-xs-12">
          <h1 className="majestic-thai-title"><p>Majestic Thai</p></h1>
          <p className="majestic-thai-text">Majestic Thai was a project where we
              had to create a new menu for a thai restaurant using React and Backbone.
              We were given no wireframes or design and were required to create our
              own for the first time.
          </p>
          <div className="majestic-thai-tech-bar">
            <p className="majestic-thai-tech">Technologies Used: </p>
            <a className="majestic-thai-links" href="https://getbootstrap.com/">Bootstrap</a>
            <a className="majestic-thai-links" href="http://backbonejs.org/">Backbone</a>
            <a className="majestic-thai-links" href="https://facebook.github.io/react/index.html">React</a>
            <a className="majestic-thai-links" href="http://sass-lang.com/">Sass</a>
            <a className="majestic-thai-links" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Javascript</a>
            <a className="majestic-thai-links" href="https://jquery.com/">JQuery</a>
          </div>
        </div>
        <a className="col-md-5 col-xs-12" href="https://vierello.github.io/7.4-majestic-thai/"><img className="majestic-thai-image" src="./images/majestic-thai.png" /></a>
      </div>
    )
  }
});

var Sk8SiteComponent = React.createClass({
  render: function(){
    return (
      <div className="sk8-site">
        <a className="col-md-5 col-xs-12" href="http://vierello.github.io/2.2-sk8-site/"><img className="sk8-site-image" src="./images/sk8-site.png" /></a>
        <div className="text-container col-md-7 col-xs-12">
          <h1 className="sk8-site-title"><p>Sk8 Site</p></h1>
          <p className="sk8-site-text">The Sk8 Site project had us use only css,
              html and sass to recreate a design composition provided. We also had
              to make the website responsive using media queries.
          </p>
          <div className="sk8-site-tech-bar">
            <p className="sk8-site-tech">Technologies Used: </p>
            <a className="sk8-site-links" href="http://sass-lang.com/">Sass</a>
            <a className="sk8-site-links" href="https://en.wikipedia.org/wiki/HTML">HTML</a>
            <a className="sk8-site-links" href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a>
          </div>
        </div>
      </div>
    )
  }
});

var EtsyRecreationComponent = React.createClass({
  render: function(){
    return (
      <div className="etsy-recreation">
        <div className="text-container col-md-7 col-xs-12">
          <h1 className="etsy-recreation-title"><p>Etsy Recreation</p></h1>
          <p className="etsy-recreation-text">The Etsy Recreation project involved
              looking at the Etsy website to try to indentically recreate the page
              using handlebars templates, along with using JSON data from the Etsy
              API.
          </p>
          <div className="etsy-recreation-tech-bar">
            <p className="etsy-recreation-tech">Technologies Used: </p>
            <a className="etsy-recreation-links" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON">JSON</a>
            <a className="etsy-recreation-links" href="http://backbonejs.org/">Backbone</a>
          </div>
        </div>
        <a className="col-md-5 col-xs-12" href="http://vierello.github.io/4.2-etsy-recreation/"><img className="etsy-recreation-image" src="./images/etsy.png" /></a>
      </div>
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
