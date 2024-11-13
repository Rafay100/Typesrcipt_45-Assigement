"use strict";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
for (let num of numbers) {
    let ordibalEnding;
    if (num === 1) {
        ordibalEnding = "st";
    }
    else if (num === 2) {
        ordibalEnding = "nd";
    }
    else if (num === 3) {
        ordibalEnding = "rd";
    }
    else {
        ordibalEnding = "th";
    }
    console.log(`${num}${ordibalEnding}`);
}
