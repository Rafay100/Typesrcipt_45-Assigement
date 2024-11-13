

let Guest_List :string[] = ['Nimra', 'Bisma', 'Ayesha'];

// for(let i=0; i<Guest_List.length; i++){

//     console.log('Dear ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
    
// }

let absent_Guest :string = 'Ayesha' ;

let new_Guest :string = 'Fatima' ;

Guest_List[0] = new_Guest ;

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
    
}

console.log(`Miss ${absent_Guest} is not coming to the party.`);

console.log('Good News! We Find Big table So we are inviting 3 more guests.')

Guest_List.unshift('Kinza') ;
Guest_List.splice(2 , 0 , 'Aqsa');
Guest_List.push('Rafay');

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
    
}
