/**********************************************
    STRINGS
**********************************************/

// 1. Template literals
// (See exercise 105-Stu_GameOfStrings for help)

const firstName = "Lionel";
const lastName = "Messi"
const age = "30 years old";
const profession = "playing soccer"

// DO: convert the string in this console.log() to a template literal
console.log(firstName + " " + lastName + " is " + age + " and is good at " + profession + ".");

// SOLUTION: 
console.log(`${firstName} ${lastName} is ${age} and is good at ${profession}.`)



/**********************************************
    ARRAY METHODS
    (actually part of ES5, not ES6, but this is useful practice)
**********************************************/

// 2. New array methods 

// DO: List the four new array methods with a description of what they are used for. 
// (Bonus: include array method callbacks and parameters)

// SOLUTION:
myArray.forEach()
//    Loops through all items in myArray, performing a callback function for each item.

myArray.filter()
//    Returns a new array with only those items from myArray that pass a test given in the callback.

myArray.map()
//    Returns a new array with the results of performing the callback function on every element in myArray.

myArray.reduce()
//    Iterates over an array, performing a callback that involves keeping a running "total" of the elements in the array. Returns this "total" when finished.
//    (The running total does not have to be a mathematical sum.It could be the mathematical product, string concatonation, etc.depending on the callback)

/* Keep in mind that for all of these, myArray is unchanged!
If the function returns a new array, it needs to be stored in a different variable if you want to be able to refer to it later. */

// BONUS SOLUTION:
// (NOTE: see official documentation for full list of parameters. Variations are possible.)
    myArray.forEach(function(currentValue, currentIndex){}) // currentIndex is optional
    myArray.filter(function(currentValue, currentIndex){}) // currentIndex is optional
    myArray.map(function(currentValue, currentIndex){}) // currentIndex is optional
    myArray.reduce(function(accumulator, currentValue, currentIndex){}, [initialValueOfSum]) //initialValueOfSum and currentIndex are optional; if initialValueOfSum is not set, the first element in the array will be used


// 3. Using New Array Methods.

const myArray = [4, 6, 2, 3, 8, 9];

// DO: 
// (Note: we will turn these into arrow functions later, so don't feel like you have to do that now.)

// a. Use the forEach method to console.log each element in the array.

// b. Use the filter method to make a new array that has only even numbers.

// c. Use the map method to make a new array that has string versions of the numbers. (I.e. the number 4 will be the string "4" and so on.)

// d. Use the reduce method to get the product of all the numbers.

// SOLUTION:
// a. Use the forEach method to console.log each element in the array.
    myArray.forEach(function(currentValue) {
        console.log(currentValue);
    });

// b. Use the filter method to make a new array that has only even numbers.
    const newArray = myArray.filter(function(currentValue) {
        if (currentValue % 2 === 0) {
            return currentValue;
        }
    });

// c. Use the map method to make a new array that has string versions of the numbers. (I.e. the number 4 will be the string "4" and so on.)
    const newArray = myArray.map(function(currentValue) {
        return currentValue.toString();
    });

// d. Use the reduce method to get the product of all the numbers.
    const product = myArray.reduce(function(product, currentValue) {
        return product * currentValue;
    }, 1);
    
    

/**********************************************
    ARROW FUNCTIONS
**********************************************/
// (Use `107-Ins_ArrowExample/arrows-intro.js` for reference.)

// 4. Rewrite ES5 Functions

// DO: Rewrite the following functions as arrow functions
// a. 
    var biggerNumber = function(num1, num2) {
        if (num1 > num2) {
            return num1;
        } else if (num1 < num2) {
            return num2;
        } else {
            return "They are the same";
        }
    }
    
// b. 
    var giveMessageTo = function(name, message) {
        console.log("Hi " + name + "! " + message)
    } 
    // (Don't forget to use template literals!)
    
// c. 
    var sayHiTo = function(name) {
        console.log("Hi " + name + "!")
    }
    
// d. 
    function divideBy2(number) {
        return number / 2;
    }
    
// SOLUTION: 
// a. 
    const biggerNumber =(num1, num2) => {
        if (num1 > num2) {
            return num1;
        } else if (num1 < num2) {
            return num2;
        } else {
            return "They are the same";
        }
    }
    
// b. 
    const giveMessageTo = (name, message) => {
        console.log(`Hi ${name}! ${message}`);
    }
    
// c.     
    const sayHiTo = name => {
        console.log("Hi " + name + "!")
    }
    // (Note that we don't need () around our name parameter because there is only one parameter; the {} are also optional in this case.)

    
// d. 
    const divideBy2 = number => number / 2;
    // (Note that we don't need () around our number parameter because there is only one parameter)
    // (Also note that we don't need to say "return" because it can be assumed from this syntax in this case. To do this, we also leave off the {} after the => )



// 5. Write Arrow Functions From Scratch

// DO:
// a. Write an arrow function that takes two parameters, concatenates them, and returns this concatenated result. 
// (For this exercise, include the return statement in the arrow function. You can assume the parameters will be strings - no need to convert.)

// b. Write an arrow function that takes two parameters (assume numbers) and returns their product.
// (For this exercise, write the function such that the "return" is implied. You can assume the parameters will be numbers - no need to convert.)

// c. Write an arrow function that takes only one parameter and returns the result of that parameter plus itself.
// (For this exercise, write the function as concisely as possible.)

// d. Write an arrow function that takes zero parameters and console logs "Hello World".
// (For this exercise, write the function as concisely as possible.)


// SOLUTION:
// a. Write an arrow function that takes two parameters (assume strings), concatenates them, and returns this concatenated result. 
// (For this exercise, include the return statement in the arrow function.)
    const stringConcatenator = (firstString, secondString) => {
        const newString = firstString + secondString;
        return newString;
    }
    
    or
    
    const stringConcatenator = (firstString, secondString) => {
        return firstString + secondString;
    }

// b. Write an arrow function that takes two parameters (assume numbers) and returns their product.
// (For this exercise, write the function such that the "return" is implied.)
    const multiplier = (firstNum, secondNum) => firstNum * secondNum;

// c. Write an arrow function that takes only one parameter and returns the result of that parameter plus itself.
// (For this exercise, write the function as concisely as possible.)
    const doubler = number => number + number;

// d. Write an arrow function that takes zero parameters and console logs "Hello World".
// (For this exercise, write the function as concisely as possible.)
    const helloWorld = () => console.log("Hello World");


// 6. Arrow Functions with Array Methods

// DO: Do exercises 3a-3d, but using arrow functions. Be as concise as possible. Use ternary operators where applicable.


// SOLUTION:
// a. Use the forEach method to console.log each element in the array.
    myArray.forEach(currentValue => console.log(currentValue));

// b. Use the filter method to make a new array that has only even numbers.
    const newArray = myArray.filter(currentValue => (currentValue % 2 === 0) ? currentValue : false)
    // Note: This uses a ternary operator to return currentValue if it is even, but return false otherwise. 
    // When false is returned by the callback, the filter method does not add it to the new array. 
   
    // or you can be even more concise!...
    const newArray = myArray.filter(currentValue => !(currentValue %2))
    


// c. Use the map method to make a new array that has string versions of the numbers. (I.e. the number 4 will be the string "4" and so on.)
    const newArray = myArray.map(currentValue => currentValue.toString());
});

// d. Use the reduce method to get the product of all the numbers.
    const product = myArray.reduce((product, currentValue) => product * currentValue, 1)



/**********************************************
    DECONSTRUCTORS - ARRAYS
*********************************************/
// For all of the following, use ES6 deconstructor syntax.

const list = ["raspberries", "cheese", "chocolate", "coffee"]

// 7. Variable assignment from array

// DO: Deconstruct the list array above to make 3 variables equal to each of the first, second, and fourth items in the array.

// SOLUTION: 
const [firstItem, secondItem, , fourthItem] = list;

// 8. Spread operator

// DO:

// a. Store the first item of the list array in a variable, then store the remaining items in an array called remainingItems.

// b. Add "milk" to the remainingItems array and store it in a new array called newList.

// SOLUTION:

// a. Store the first item of the list array in a variable, then store the remaining items in an array called remainingItems.
const [first, ...remainingItems] = list;

// b. Add "milk" to the remainingItems array and store it in a new array called newList.
const newList = [...remainingItems, "milk"]

 
 
/**********************************************
    DECONSTRUCTORS - OBJECTS
*********************************************/
// For all of the following, use ES6 deconstructor syntax.

// 9. Constructing an object from variables

// DO: Make a car object that has the following constants as key/value pairs.
const make = "Toyota";
const model = "Camry";
const color = "Blue";


// SOLUTION:
const car = { make, model, color };

// 10. Object Deconstruction
const bigHouse = {
    bedrooms: 5,
    bathrooms: 3,
    livingRooms: 1,
    diningRooms: 2,
    hasPatio: true,
}

// DO: 
// a. Make a variable called bedrooms with the same value as the bedrooms property of bigHouse.

// b. Make two variables called bathrooms and livingRooms with the same values as the bathrooms and livingRooms properties of bigHouse.

// c. Make a variable called washrooms with the same value as the bathrooms property of bigHouse. (Hint: this will look similar to part a, but you will be "renaming" bathrooms.)

// d. Make a variable called "diningRooms" from the diningRooms property of bigHouse. Give it a default value of 1, which will be assigned if bigHouse has no diningRooms property.
// (Obviously, we can see in this case that bigHouse DOES have a diningRooms property. But practicing assigning default values is useful for when we don't know if the property exists.)



// SOLUTION: 
// a. Make a variable called bedrooms with the same value as the bedrooms property of big house. 
    const {bedrooms} = bigHouse;
    
// b. Make two variables called bathrooms and livingRooms with the same values as the bathrooms and livingRoom properties of bigHouse.
    const {bathrooms, livingRooms} = bigHouse;

// c. Make a variable called washrooms with the same value as the bathrooms property of big house. 
    const {bathrooms: washrooms} = bigHouse;

// d. Make a variable called "diningRooms" from the diningRooms property of bigHouse. Give it a default value of 1, if bigHouse has no diningRooms property.
    const {diningRooms = 1} = bigHouse;



/**********************************************
    DECONSTRUCTORS IN FUNCTION PARAMETERS
*********************************************/

// 11. Default parameters

// DO: 
// a. Write a function that takes two parameters and multiplies them together. If no parameters are supplied, this function should have default values of 4 and 5.

// b. Write a function that takes an object (like bigHouse) as a parameter, deconstructs one of it's properties, and console logs it.  
// (Bonus: rename bedrooms to bdrms as well)

// SOLUTION:
// a. Write a function that takes two parameters and returns their product. If no parameters are supplied, this function should have default values of 4 and 5.
    const multiplierWDefaults = (firstNum = 4, secondNum = 5) => firstNum * secondNum;
    
    // Examples
    console.log(multiplierWDefaults()) // Will log 20
    console.log(multiplierWDefaults(5)) // Will log 25
    console.log(multiplierWDefaults(3, 2)) // Will log 6


// b. Write a function that takes an object (like bigHouse) as a parameter, deconstructs the property bedrooms from it, and console logs it.
    const getBedrooms = ({bedrooms}) => console.log(bedrooms)
    // Bonus:
    const getBedrooms = ({bedrooms : bdrms}) => console.log(bdrms)
    
