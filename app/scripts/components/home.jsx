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
                <li className="nav-font active"><a href="#home/"><i className="fa fa-home" aria-hidden="true"></i>Home</a></li>
                <li className="nav-font"><a href="#resume/"><i className="fa fa-file-text-o" aria-hidden="true"></i>Resum&eacute;</a></li>
                <li className="nav-font"><a href="#aboutme"><i className="fa fa-user" aria-hidden="true"></i>About Me</a></li>
                <li className="nav-font"><a href="#projects"><i className="fa fa-list" aria-hidden="true"></i>Projects</a></li>
              </ul>
              <div className="col-md-offset-2 col-md-10 col-sm-offset-2 col-sm-10 hidden-xs storm-cloud-container">
                <div className="middle-align"><p className="av-logo"><a onClick={this.props.thunderstorm}><img src='images/av_logo.png'/></a></p></div>
              </div>
              <ul className="nav visible-xs" id="xs-menu">
              	<li><a href="#home/" className="text-center"><i className="fa fa-home" aria-hidden="true"></i></a></li>
                <li><a href="#resume/" className="text-center"><i className="fa fa-file-text-o" aria-hidden="true"></i></a></li>
              	<li><a href="#aboutme/" className="text-center"><i className="fa fa-user" aria-hidden="true"></i></a></li>
                <li><a href="#projects" className="text-center"><i className="fa fa-list" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      )
  }
})

var FooterComponent = React.createClass({
  render: function(){
    return (
      <div className="row">
        <footer className="footer col-xs-12">
          <div className="headshot-div col-md-2 col-xs-6">
            <p><img className="headshot" src="images/AV-headshot.jpg"/></p>
          </div>
          <ul className="col-md-2 col-xs-6 footer-links">
            <li><a href="#resume/"><i className="media fa fa-file-text-o fa-2x" aria-hidden="true"></i>Resume</a></li>
            <li><a href="https://www.linkedin.com/in/andrewvitello?trk=nav_responsive_tab_profile"><i className="media fa fa-linkedin-square fa-2x"></i>Linked In</a></li>
            <li><a href="https://github.com/vierello"><i className="media fa fa-github-square fa-2x"></i>Github</a></li>
            <li><a href="https://www.facebook.com/vitello1"><i className="media fa fa-facebook-official fa-2x"></i>Facebook</a></li>
            <li><a href="https://twitter.com/vierello"><i className="media fa fa-twitter-square fa-2x"></i>Twitter</a></li>
          </ul>
          <div className="col-md-6 col-xs-12 skills">
            <img className="skill-image" src="./images/javascript-logo.png"/>
            <img className="skill-image" src="./images/HTML5_logo.png"/>
            <img className="skill-image" src="./images/CSS3-logo.png"/>
            <img className="skill-image" src="./images/react-logo.png"/>
            <img className="skill-image" src="./images/backbone-logo.png"/>
            <img className="skill-image" src="./images/bootstrap-logo.png"/>
            <img className="skill-image" src="./images/github-logo.png"/>
            <img className="skill-image" src="./images/handlebars-logo.png"/>
            <img className="skill-image" src="./images/jquery-logo.png"/>
            <img className="skill-image" src="./images/Sasslogo.png"/>
          </div>
          <div className="col-md-2 col-xs-4 list-unstyled" id="sidebar-footer">
            <div className="footer-personal-info">
              <h3>Andrew Vitello</h3>
              <h4 className="e-mail-address hidden-s">avitello75@gmail.com</h4>
            </div>
          </div>
        </footer>
      </div>
    )
  }
});

var AboutMeComponent = React.createClass({
  render: function(){
    return (
      <div className="row">
        <div className="about-me col-md-offset-1 col-md-10 col-xs-12">
          <div className="col-xs-12">
            <h2 id="aboutme" className="about-me-title">ABOUT ME</h2>
          </div>
          <div className="col-md-4 col-xs-12">
            <img className="about-me-headshot" src="images/AV-headshot.jpg"/>
          </div>
          <div className="col-md-8 col-xs-12">
            <p className="about-me-text">Hi, I&#39;m Andy Vitello, I am a very detail
              oriented front end web developer. I just graduated from the Iron Yard&#39;s
              highly intensive 12 week front end engineering program. While at
              The Iron Yard I not only learned multiple technologies and skills,
              I learned how to learn and think like a developer, and how to use
              all the resources provided to me to find answers or solutions to
              almost all of the problems anyone wouldrun into while developing applications.
              <br />
              <br />
              I am making a career change from accounting to web development,
              which means that I will have a unique view on application development
              as it relates to profitability and cost versus benefit of designing
              applications. I am ready to join a team with good senior
              leadership and room for growth, where I feel like I can be a real
              asset while also learning every day.</p>
          </div>
        </div>
      </div>
    )
  }
});

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
      </div>
      <AboutMeComponent/>
      <div className="col-md-offset-1 col-md-10">
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
      </div>
      <FooterComponent/>
    </div>
    )
  }
});

module.exports = {
  'HomeComponent': HomeComponent
};
