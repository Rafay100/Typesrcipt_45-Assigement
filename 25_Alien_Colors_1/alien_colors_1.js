"use strict";
// create a variable called alien_color
let alien_color = 'green';
// write an if statement to test whether the aliens colouer in green.if it is, print a message that the player just earned 5 points.
if (alien_color === 'green') {
    console.log("Player Just earned 5 poinits !");
}
// write one version of this program that pasess the if test and another that fails.
alien_color = 'yellow';
// the version that fails will have no output.
if (alien_color === 'green') {
    console.log("Player Just earned 5 poinits !");
}
