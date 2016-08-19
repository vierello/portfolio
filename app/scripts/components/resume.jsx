var React = require('react');

var ResumeComponent = React.createClass({
  render: function(){
    return (
      <div className="resume-container">
        <div className="resume-row">
          <div className="resume-row col-xs-12">
            <p className="resume"><embed className="resume-image" src="./images/Resume.pdf" type='application/pdf'></embed></p>
          </div>
        </div>
        <div className="">
          <div className="spacer-bar"></div>
          <div>
            <a href="#home/"><p className="col-xs-12 return-home">Return Home</p></a>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = ResumeComponent;
