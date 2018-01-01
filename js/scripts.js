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

					//switch for input from button click
			       //cases for each number
			       case '1':
			         displayTotal += '1';
			         break;
			       case '2':
			         displayTotal += '2';
			         break;
			       case '3':
			         displayTotal += '3';
			         break;
			       case '4':
			         displayTotal += '4';
			         break;
			       case '5':
			         displayTotal += '5';
			         break;
			       case '6':
			         displayTotal += '6';
			         break;
			       case '7':
			         displayTotal += '7';
			         break;
			       case '8':
			         displayTotal += '8';
			         break;
			       case '9':
			         displayTotal += '9';
			         break;
			       case '0':
			         displayTotal += '0';
			         break;
							 

var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();
