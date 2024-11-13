"use strict";
function makeSanwich(item) {
    console.log('\n\nMaking your sandwich with:');
    item.forEach(element => console.log("- " + element));
    console.log('\n\nEnjoy your sandwich !');
}
makeSanwich(['Ham', 'Cheese', 'Lettuce']);
makeSanwich(['Turkey', 'Bacon']);
makeSanwich(['Peanut butter', 'Chicken']);
