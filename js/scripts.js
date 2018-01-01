$(document).ready(function() {
  var displayTotal = 0;
  //what is displayed on screen
  var runningTotal = [];
  //global var for previous calculations
  var deciChecker = false;



var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();
