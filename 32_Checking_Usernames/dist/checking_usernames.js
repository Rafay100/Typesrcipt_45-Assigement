"use strict";
let current_users = ['OsaMa', 'KhiZra', 'RaFay', 'Daniyal', 'Jhon'];
let new_users = ['Bilal', 'OsaMa', 'Nimra', 'Bisma', 'Daniyal'];
new_users.forEach(newUsername => {
    let lowerCase = newUsername.toLowerCase();
    if (current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)) {
        console.log(`The username ${newUsername} is not available. Please write a diffrent username`);
    }
    else {
        console.log(`The username ${newUsername} is available.`);
    }
});
