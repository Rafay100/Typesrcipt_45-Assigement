"use strict";
// alien colors #3: turn your if-else chain from excercise 25-26 into an if-else chain.
//  write three v ersion of this program,make sure each message is printed for the appropriate color alien.
let alienColors = "green";
// if the aline is green, print a message that the player earned 5 points.
// if the aline is yellow, print a message that the player earned 10 points.
// if the aline is red, print a message that the player earned 15 points.
// version 1 of the progrm
if (alienColors === "green") {
    console.log("version 1: player earned 5 points.");
}
else if (alienColors === "yellow") {
    console.log("player earned 10 points.");
}
else if (alienColors === "red") {
    console.log("player earned 15 points.");
}
else {
    console.log("please select right color");
}
// version 2 of the program
alienColors = "yellow";
if (alienColors === "green") {
    console.log("player earned 5 points.");
}
else if (alienColors === "yellow") {
    console.log("version 2: player earned 10 points.");
}
else if (alienColors === "red") {
    console.log("player earned 15 points.");
}
else {
    console.log("please select right color");
}
// version 3 of the program
alienColors = "red";
if (alienColors === "green") {
    console.log("player earned 5 points.");
}
else if (alienColors === "yellow") {
    console.log("player earned 10 points.");
}
else if (alienColors === "red") {
    console.log("version 3: player earned 15 points.");
}
else {
    console.log("please select right color");
}
