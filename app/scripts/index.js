var Backbone = require('backbone');
var $ = window.jQuery = require('jquery');
require('./router');
require('bootstrap-sass');


$(function(){
  Backbone.history.start();
});
