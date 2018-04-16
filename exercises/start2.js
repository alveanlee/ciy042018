/*MANIPULATING EMILY
Test Yourself On Objects
Page 1/1

1. Interacting with Objects

a) Output the age of person
b) Call the function "speak"
c) Add an element to person, called "height" and give it the value "1.5"
d) Output the height
e) Change the name of the person to your name
*/
var Person = {
     name: 'Emily',
     age: 19,
     country: 'Canada',
     speak: function(){
     console.log('Hello!');
     }
};

//Question a) console.log() the age of Person

console.log(Person.age);

//Question b) Use the function speak()
function doSpeak(){
    Person.speak();
}

//Question c) Add a new key to person, called "height" and give it the val
Person.height = 1.5;

//Question d) console.log() the height of Person
console.log(Person.height);

//Question e) Change the name of the person to your name
Person.name = 'Alvean';

console.log(Person.name);

doSpeak()
