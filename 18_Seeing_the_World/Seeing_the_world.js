"use strict";
//Store the location in a array. Make sure the array is not in alphabetical order.
let places = ['Dubai', 'New York City', 'Istanbul', 'Rome', 'Maldives'];
//Print  your array in its original order.
console.log('orignal ' + places);
//Prinit your array in alphabetical oder without modifying the actual lit.
console.log('copy ' + [...places].sort());
//show that your array is still in its orignal order by priniting it.
console.log('orignal ' + places);
//Print your array in reverse alphabetical order without the changing the oder of the orignal list.
console.log('copy ' + [...places].sort().reverse());
//Show that your array is still in its orignal oder by printing it again.
console.log('orignal ' + places);
//Reverse the oder of your list. Print the array to show that its oder has changed.
console.log('orignal ' + places.reverse());
//Reverse the oder of your list again.Print the list  to show its bact to its orignil oder.
console.log('orignal ' + places.reverse());
//Sort your array so its stored in alphabetical order. Print the array to show that its oder has been changed.
console.log('orignal ' + places.sort());
//Sort to change your array so its stored in reverse alphabetical order.Print the  list to show that its order has changed.
console.log('orignal ' + places.sort().reverse());
