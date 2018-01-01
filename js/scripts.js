$(document).ready(function() {
  var displayTotal = 0;
  //what is displayed on screen
  var runningTotal = [];
  //global var for previous calculations
  var deciChecker = false;

	//boolean to determine if a decimal has been added
	  var paused = false;

		//boolean to pause & wipe displayed data after evaluation.

		  $('button').click(function() {
		    var input = $(this).text();
		    if (paused) {
		      displayTotal = runningTotal;
		      paused = false;
		    }
		    switch (input) {



var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();
