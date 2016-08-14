var React = require('react');

var BudgetMeComponent = require('./projects.jsx').BudgetMeComponent;


var NavComponent = React.createClass({
  render: function(){
    return (
      <div className="wrapper">
        <div className="box col-sm-2 col-xs-1">
          <div className="nav-row row-offcanvas row-offcanvas-left">
            <div className="column  sidebar-offcanvas" id="sidebar">
              <ul className="nav hidden-xs" id="lg-menu">
                <li className="nav-font active"><a href="#home/"><i className="glyphicon glyphicon-home"></i> Home</a></li>
                <li className="nav-font"><a href="#resume/"><i className="glyphicon glyphicon-list-alt"></i> Resum&eacute;</a></li>
                <li className="nav-font"><a href="#aboutme/"><i className="glyphicon glyphicon-user"></i> About Me</a></li>
                <li className="nav-font"><a href="#"><i className="glyphicon glyphicon-refresh"></i> Refresh</a></li>
              </ul>
              <ul className="list-unstyled hidden-s hidden-xs" id="sidebar-footer">
                <li>
                  <h3>Andrew Vitello</h3>
                  <h4>avitello75@gmail.com</h4>
                  <a href="#"><i className="media fa fa-facebook-official fa-2x"></i></a>
                  <a href="#"><i className="media fa fa-twitter-square fa-2x"></i></a>
                  <a href="#"><i className="media fa fa-github-square fa-2x"></i></a>
                </li>
              </ul>
              <ul className="nav visible-xs" id="xs-menu">
              	<li><a href="#home/" className="text-center"><i className="glyphicon glyphicon-list-alt"></i></a></li>
                <li><a href="#resume/" className="text-center"><i className="glyphicon glyphicon-list"></i></a></li>
              	<li><a href="#aboutme/" className="text-center"><i className="glyphicon glyphicon-paperclip"></i></a></li>
                <li><a href="#" className="text-center"><i className="glyphicon glyphicon-refresh"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      )
  }
})

var HomeComponent = React.createClass({
  render: function(){
    return (
    <div>
      <div className="sky row">
        <NavComponent/>
        <div>
          <div className="clouds_one col-xs-12"></div>
          <div className="clouds_two col-xs-12"></div>
          <div className="clouds_three col-xs-12"></div>
        </div>
        <div className="col-md-offset-2 col-md-10 col-sm-offset-2 col-sm-10  col-xs-12 storm-cloud-container">
          <div className="storm-cloud"><p className="av-logo"><img src='images/av_logo.png'/></p></div>
        </div>
      </div>
      <div className="row title-bar">
        <div className="col-xs-12">
          <h2>PROJECTS</h2>
        </div>
      </div>
      <div className="row first-bar">
        <div className="projects col-xs-12">
          <BudgetMeComponent />
        </div>
      </div>
      <div className="row second-bar">
        <div className="projects col-xs-12">
          <BudgetMeComponent />
        </div>
      </div>
      <div className="row third-bar">
        <div className="projects col-xs-12">
          <BudgetMeComponent />
        </div>
      </div>
      <div className="row fourth-bar">
        <div className="projects col-xs-12">
          <BudgetMeComponent />
        </div>
      </div>
      <div className="row fifth-bar">
        <div className="projects col-xs-12">
          <BudgetMeComponent />
        </div>
      </div>
      <div className="row sixth-bar">
        <div className="projects col-xs-12">
          <BudgetMeComponent />
        </div>
      </div>
    </div>
    )
  }
});

module.exports = {
  'HomeComponent': HomeComponent,
  'NavComponent': NavComponent
};
