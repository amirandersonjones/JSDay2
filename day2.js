//Code Wars Problems//
//Remove Exclamation Marks//

//Python Solution:
// def remove_exclamation_marks(s):
//     return s.replace("!", "")

//JAVASCRIPT SOLUTION:
function RemoveExcalmationmarks(s){
    return s.split('!').join('');
}

//Code Wars Problems//
//Multipy//

//Python Solution:
// def multiply(a, b):
//   return a * b

function multiply(a, b){
    a * b
  }
  


//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
let personsFavoritefood = function(foods) {
    for (property in person3){
        console.log(property, person3[property]);
    }
}
//REGULAR LOOP TO GET INFO
for (property in person3){
     console.log(property, person3[property]);
 }


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/
//Regular class method
function Person(name, sex, age){
    this.name= name;
    this.sex = sex;
    this.age = age;
    this.printInfo = function(){
        console.log(`This person's name is ${this.name}. Their sex is ${this.sex} and they are ${this.age} years old!`);
    };
    this.addAge = function(){
        this.age +=1
    };
}

let personone = new Person('Kellie Hill', 'female', '50');
personone.printInfo()

let persontwo = new Person('Queen Brown', 'female', '65');
persontwo.printInfo()

let personthree = new Person('Amir', 'male', '36');
personthree.printInfo()

// Create our Person Prototype

function Human(name, sex, age,){
    this.name= name;
    this.sex = sex;
    this.age = age;
    
    //this could be an arrow function
    this.printInfo = () => {
        console.log(`This person's name is ${this.name}. Their sex is ${this.sex} and they are ${this.age} years old!`);
    };
    this.addAge = () => {
        newage = ++age
        console.log(newage)
    };
}
// Use an arrow to create the printInfo method
let humanone = new Human('Jessica Brown', 'female', '36');
humanone.printInfo();
let humantwo = new Human('Bobby Brown', 'male', '68');
humantwo.printInfo();
humantwo.addAge();
humantwo.addAge();
humantwo.addAge();

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

