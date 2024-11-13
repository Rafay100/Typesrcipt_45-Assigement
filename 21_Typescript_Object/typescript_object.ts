// Write a program that creates Objects containing these items.
// let person_Name :string = 'khizra';
// const personName_Array :string[] = ['person','car','cold drink'];

interface person {
    Name :string,
    Age :number,
    Nationality :string,
    Student : Boolean
}

let person :person = {
    Name : 'Khizra' ,
    Age : 20 ,
    Nationality : 'Pakistan' ,
    Student : true
}

console.log(person);


interface car {
    maker :string,
    colour :string,
    automatic :Boolean
}

let car = {
    maker : 'Toyota',
    colour : 'Black',
    automatic : true
}

console.log(car);