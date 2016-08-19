var React = require('react');

var BudgetMeComponent = require('./projects.jsx').BudgetMeComponent;
var GithubProfileComponent = require('./projects.jsx').GithubProfileComponent;
var RecipesComponent = require('./projects.jsx').RecipesComponent;
var MajesticThaiComponent = require('./projects.jsx').MajesticThaiComponent;
var Sk8SiteComponent = require('./projects.jsx').Sk8SiteComponent;
var EtsyRecreationComponent = require('./projects.jsx').EtsyRecreationComponent;


var NavComponent = React.createClass({
  render: function(){
    return (
      <div className="wrapper">
        <div className="box col-sm-2 col-xs-1">
          <div className="nav-row row-offcanvas row-offcanvas-left">
            <div className="column  sidebar-offcanvas" id="sidebar">
              <ul className="nav hidden-xs" id="lg-menu">
                <li><h2>Andrew Vitello</h2></li>
                <li className="nav-font active"><a href="#home/"><i className="glyphicon glyphicon-home"></i>Home</a></li>
                <li className="nav-font"><a href="#resume/"><i className="glyphicon glyphicon-list-alt"></i>Resum&eacute;</a></li>
                <li className="nav-font"><a href="#aboutme/"><i className="glyphicon glyphicon-user"></i>About Me</a></li>
                <li className="nav-font"><a href="#projects"><i className="glyphicon glyphicon-list"></i>Projects</a></li>
              </ul>
              <div className="col-md-offset-2 col-md-10 col-sm-offset-2 col-sm-10 hidden-xs storm-cloud-container">
                <div className="middle-align"><p className="av-logo"><a onClick={this.props.thunderstorm}><img src='images/av_logo.png'/></a></p></div>
              </div>
              <ul className="nav visible-xs" id="xs-menu">
              	<li><a href="#home/" className="text-center"><i className="glyphicon glyphicon-home"></i></a></li>
                <li><a href="#resume/" className="text-center"><i className="glyphicon glyphicon-list-alt"></i></a></li>
              	<li><a href="#aboutme/" className="text-center"><i className="glyphicon glyphicon-user"></i></a></li>
                <li><a href="#projects" className="text-center"><i className="glyphicon glyphicon-list"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      )
  }
})

var HomeComponent = React.createClass({
  thunderstorm: function(){
    if(jQuery('.sky').hasClass('sky')){
      jQuery('.sky').removeClass('sky').addClass('sky-storm');
      jQuery('.clouds-one').removeClass('clouds-one').addClass('clouds-one-storm');
      jQuery('.clouds-two').removeClass('clouds-two').addClass('clouds-two-storm');
      jQuery('.clouds-three').removeClass('clouds-three').addClass('clouds-three-storm');
    } else {
      jQuery('.sky-storm').removeClass('sky-storm').addClass('sky');
      jQuery('.clouds-one-storm').removeClass('clouds-one-storm').addClass('clouds-one');
      jQuery('.clouds-two-storm').removeClass('clouds-two-storm').addClass('clouds-two');
      jQuery('.clouds-three-storm').removeClass('clouds-three-storm').addClass('clouds-three');
    }
  },

  render: function(){
    return (
    <div>
      <div className="sky row">
        <NavComponent thunderstorm={this.thunderstorm}/>
        <div>
          <div className="clouds-one col-xs-12"></div>
          <div className="clouds-two col-xs-12"></div>
          <div className="clouds-three col-xs-12"></div>
        </div>
        {// <div className="col-md-offset-2 col-md-10 col-sm-offset-2 col-sm-10  col-xs-12 storm-cloud-container">
        //   <div className="storm-cloud"><p className="av-logo"><a onClick={this.thunderstorm}><img src='images/av_logo.png'/></a></p></div>
        // </div>
        }
      </div>
      <div className="row title-bar">
        <div className="col-xs-12">
          <h2 id="projects">PROJECTS</h2>
        </div>
      </div>
      <div className="row first-bar">
        <div className="projects">
          <BudgetMeComponent />
        </div>
      </div>
      <div className="row second-bar">
        <div className="projects">
          <GithubProfileComponent />
        </div>
      </div>
      <div className="row third-bar">
        <div className="projects">
          <RecipesComponent />
        </div>
      </div>
      <div className="row fourth-bar">
        <div className="projects">
          <MajesticThaiComponent />
        </div>
      </div>
      <div className="row fifth-bar">
        <div className="projects">
          <Sk8SiteComponent />
        </div>
      </div>
      <div className="row sixth-bar">
        <div className="projects">
          <EtsyRecreationComponent />
        </div>
      </div>
      <div className="row footer">
        <footer className="footer col-xs-12">
          <div className="headshot-div col-md-2 col-xs-6">
            <p><img className="headshot" src="images/AV-headshot.jpg"/></p>
          </div>
          <ul className="col-md-2 col-xs-6 footer-links">
            <li><a href="#"><i className="media glyphicon glyphicon-user"></i>About Me</a></li>
            <li><a href="#resume/"><i className="media glyphicon glyphicon-list-alt"></i>Resume</a></li>
            <li><a href="https://github.com/vierello"><i className="media fa fa-github-square fa-2x"></i>Github</a></li>
            <li><a href="https://www.facebook.com/vitello1"><i className="media fa fa-facebook-official fa-2x"></i>Facebook</a></li>
            <li><a href="https://twitter.com/vierello"><i className="media fa fa-twitter-square fa-2x"></i>Twitter</a></li>
          </ul>
          <div className="col-md-offset-4 col-md-2 list-unstyled" id="sidebar-footer">
            <div className="footer-personal-info">
              <h3>Andrew Vitello</h3>
              <h4 className="e-mail-address hidden-s">avitello75@gmail.com</h4>
            </div>
          </div>
        </footer>
      </div>
    </div>
    )
  }
});

module.exports = {
  'HomeComponent': HomeComponent,
  'NavComponent': NavComponent
};
