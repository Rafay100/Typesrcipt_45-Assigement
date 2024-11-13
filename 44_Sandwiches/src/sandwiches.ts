// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function makeSanwich (item: string[]) {
    console.log('\n\nMaking your sandwich with:');

    item.forEach(element => console.log("- " + element));
        
    console.log('\n\nEnjoy your sandwich !');
}

makeSanwich(['Ham' , 'Cheese' , 'Lettuce']);

makeSanwich(['Turkey', 'Bacon']);

makeSanwich(['Peanut butter', 'Chicken']);