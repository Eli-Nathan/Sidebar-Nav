var $ = require('bootstrap');
var $ = require('jquery');

$( document ).ready(function() {
  $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
  });
});
