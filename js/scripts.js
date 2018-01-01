$(document).ready(function() {
  var displayTotal = 0;
  //what is displayed on screen
  var runningTotal = [];
  //global var for previous calculations
  var deciChecker = false;

	//boolean to determine if a decimal has been added
	  var paused = false;


var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();
