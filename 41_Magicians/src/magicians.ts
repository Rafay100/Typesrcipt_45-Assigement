// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

let magician :string[] = ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];

function show_magicians(magicians :string[]){
    magicians.forEach(element => {
        console.log(element);
    });
}

show_magicians(magician)
