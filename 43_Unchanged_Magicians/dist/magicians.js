"use strict";
let magician = ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];
function copyArray(arry) {
    return [...arry];
}
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = 'The Great ' + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copymagicianArray = copyArray(magician);
make_great(copymagicianArray);
console.log('\n\nThis is my orignal array:');
show_magicians(magician);
console.log('\n\nThis is my modified copy of the array:');
show_magicians(copymagicianArray);
