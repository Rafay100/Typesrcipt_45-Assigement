"use strict";
// Equality and inequality Test 1
console.log("Equality test with strings: ", "Apple" === "Apple");
// Equality and inequality Test 2
console.log("Inequality test with strings: ", "Apple" != "Orange");
// Test using the lower case function
console.log("Lower Case function test: ", "Hello".toLowerCase() === "hello");
// numerical test involving equality
console.log("Equality test with numbers: ", 26 === 26);
// numerical test involving equality 
console.log("Inequality test with numbers: ", 23 != 35);
// greater than test 
console.log("Greater than test:", 10 > 5);
// less than test 
console.log("Less than test:", 5 < 10);
// greater than or equal to test
console.log("Greater than  or equal to test: ", 10 <= 10);
//less than or equal to test
console.log("less than or equal to test:", 5 <= 10);
// tests using "and" operator
console.log("And operator test: ", 5 === 5 && 10 > 5);
// tests using "or" operator
console.log("or operator test: ", 5 === 5 || false);
// Test whether an item is in a array
const fruits = ['Nashpati', 'Banana', 'Orange'];
console.log('Test "Nashpati" in the array: ', fruits.includes("Nashpati"));
// Test whether an item is not in a array
console.log('Testing "Apple" is not in array: ', fruits.includes("apple"));
//  Test whether an item is not in a array
console.log('Testing "Apple" is not in array: ', !fruits.includes("apple"));
