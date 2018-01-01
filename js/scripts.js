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

        //case for addition: push display onto array, then push addition sign for eval
      case '+':
        runningTotal.push(displayTotal.toString().substring(1, displayTotal.length));
        runningTotal.push('+');
        displayTotal = "0";
        deciChecker = false;
        break;
        //case for subtraction: push display onto array, then push minus sign for eval
      case '-':
        if (displayTotal === 0) {
          displayTotal += '-';
          displayTotal = displayTotal.toString().substring(1, displayTotal.length);
          runningTotal.push('-1*');
        } else {
          runningTotal.push(displayTotal.toString().substring(1, displayTotal.length));
          runningTotal.push('-');
          displayTotal = "0";
          deciChecker = false;
        }
        break;

        //case for multiplication: push display onto array, then push multiplication sign for eval
      case '*':
        runningTotal.push(displayTotal.toString().substring(1, displayTotal.length));
        runningTotal.push('*');
        displayTotal = "0";
        deciChecker = false;
        break;

        //case for division: push display onto array, then push division sign for eval
      case '/':
        runningTotal.push(displayTotal.toString().substring(1, displayTotal.length));
        runningTotal.push('/');
        displayTotal = "0";
        deciChecker = false;
        break;

        //fix this function- use same functionality as equals
      case '%':
        runningTotal = [];
        deciChecker = true;
        runningTotal.push(displayTotal.toString().substring(1, displayTotal.length) * .01);
        displayTotal = runningTotal;
        break;

        //clear all case
      case 'AC':
        displayTotal = 0;
        runningTotal = [];
        deciChecker = false;
        break;

        //clear current value on screen case
      case 'CE':
        displayTotal = 0;
        deciChecker = false;
        break;

        //append decimal to display value
      case '.':
        if (!deciChecker) {
          displayTotal += '.';
          deciChecker = true;
        }
        break;

        //evaluation case- push current value onto array, set display total equal to function displayEval to evaluate and return result, then empty array
      case '=':
        runningTotal.push(displayTotal.toString().substring(1, displayTotal.length));
        displayTotal = displayEval(runningTotal);
        paused = true;
        runningTotal = [displayTotal];
        deciChecker = false;
        break;

        function displayEval(runningTotal) {
          var temp = runningTotal.join('');
          return parseFloat(eval(temp), 10)
        }
    }

    //update displayValue in value span
    $('#value').text(displayTotal);

  });

});

var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();
