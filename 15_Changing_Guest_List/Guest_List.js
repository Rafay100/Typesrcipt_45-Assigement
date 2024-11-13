"use strict";
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let Guest_List = ['Nimra', 'Bisma', 'Ayesha'];
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!');
}
let absent_Guest = 'Ayesha';
let new_Guest = 'Fatima';
Guest_List[2] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!');
}
console.log(`Miss ${absent_Guest} is not coming to the party.`);
