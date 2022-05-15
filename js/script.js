// Created by: Jaejun Lee
// Created on: May 2022
// This file contains the JS functions for index.html


/**
 * Check servie worker.
*/
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment-05/sw.js", {
    scope: "/ICS2O-Assignment-05/",
  });
}

/**
 * This function
 */
function myButtonClicked() {
  var userInteger = parseInt(document.getElementById("userInteger").value);
  var pi;
  var number = 1;
  var positiveOrNegative = "minus";

  pi = 4 / number;
  while (userInteger > 1) {
    if (positiveOrNegative == "minus") {
      number = number + 2;
      pi = pi - (4 / number);
      positiveOrNegative = "plus";
    } else if (positiveOrNegative == "plus") {
      number = number + 2;
      pi = pi + (4 / number)
      positiveOrNegative = "minus";
    }
    userInteger = userInteger - 1;
  }
  positiveOrNegative = "minus";
  number = 1;
  document.getElementById("answers").innerHTML = "The answer is: " + pi;
}