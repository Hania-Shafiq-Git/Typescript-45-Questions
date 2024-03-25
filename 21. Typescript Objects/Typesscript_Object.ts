// Write a program that creates objects containing these items.
//Datatype of person object
interface person {
    age : number,
    name : string,
    nationality : string,
    student : Boolean
}
//person object
let person : person = {
    age : 16,
    name : 'Hania',
    nationality : 'Pakistan',
    student : true
}
//print person

console.log(person);
//Datatype of car object
interface car {
    maker : string,
    color : string,
    automatic : boolean
}
//car object
let car = {
     maker : 'Toyota',
     color : 'White',
     automatic : true

}
console.log(car);