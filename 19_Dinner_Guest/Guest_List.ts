
let Guest_List :string[] = ['Nimra', 'Bisma', 'Ayesha'];
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')
// }

let absent_Guest :string = 'Ayesha' ;
let new_Guest :string = 'Fatima' ;
Guest_List[0] = new_Guest ;

// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')
// }

// console.log(`Miss ${absent_Guest} is not coming to the party.`);
// console.log('Good News! We Find Big table So we are inviting 3 more guests.')

// array m 3 guest add kiye hn.
Guest_List.unshift('Kinza') ;
Guest_List.splice(2 , 0 , 'Aqsa');
Guest_List.push('Rafay');

// yaha pr meni 6 guest k array ko print krwaya h.
// for(let i=0; i<Guest_List.length; i++){
//    console.log('Dear ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }

// sorry guest for not inviting.
// console.log('\nSorry we can not arrange big tale, Only Two peoples will be invited.');

//yaha pr meni 2 guest remove kiye hn.
while(Guest_List.length > 2){
    let remove_Guest = Guest_List.pop();
   //  console.log(`Sorry Dear . ${remove_Guest}, You are not invited for Dinner.`);
}

//hamare bache howy 2 invited guest.
// for(let i=0; i<Guest_List.length; i++){
//    console.log('Dear ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }

//mene sare guest array sy remove krdiye.
Guest_List.splice(0 , 2);
console.log(Guest_List);

// Excercise 18

//Print a message indicating the number of prople you are inviting to dinner.

console.log(`Total number of Guest are: ${Guest_List.length}`);


