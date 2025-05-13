// ✅ Functions (declaration, expression, arrow functions, parameters, return value)

// Create a function declaration that takes two numbers and returns their sum.
// function add(a,b){
//     return a+b;
// }
// console.log(add(4,7));

// Create a function expression to calculate the area of a rectangle (length × width).
// function calculateArea(length,breath){
//     return length*breath;
// }
// console.log(calculateArea(2,4));

// Create an arrow function that returns the square of a number.
//   const squareNumber = (n) =>{
//      return n*n;
//   }
//   console.log(squareNumber(4));


// Write a function that takes a name as a parameter and returns "Hello, [name]!".
// function sayHello(name){
//     return "Hello ," + name + "!";
// }
// console.log(sayHello("sunita"));

//another approch.
// const sayHello = name => `Hello, ${name}!`;

// console.log(sayHello("Sunita"));  // Output: Hello, Sunita!


// Write a function that checks if a number is even or odd and returns a boolean.
//  function isEven(num){
//     if(num %2 ===0){
//         return true;
//     }else{
//         return false;
//     }
//  }
//  console.log(isEven(2));

// ✅ Scope (global, local, block)
// Demonstrate global scope by declaring a variable outside any function and accessing it inside a function.
 // Global variable
// let name = "Sunita";

// function greet() {
//     console.log("Hello, " + name + "!");
// }

// greet();  // Output: Hello, Sunita!

// Create a function with a local variable, and try to log it outside the function (should cause an error).
// function greet(){
//     let message ="hello";
//     console.log(message);
// }
// greet();   //output: heelo from inside the function.

// console.log(message);  // ❌ Error: message is not defined.

// Use let and const inside a block and explain why they are not accessible outside.

// {
//     let a=2;
//     const b=5;
//     console.log("block scope:",a,b);
// }
// console.log(a); // ❌ Error: a is not defined
// console.log(b); // ❌ Error: b is not defined

// Declare a global variable, shadow it inside a function, and observe which value gets printed.
// let name = "sunita";

// function showName(){
//   // Local variable with same name → shadows the global one
//    let name = "rita";
//    console.log("inside the function:",name);
// }
// showName();
// console.log("outside the function:",name);

// Create a function that modifies a global variable and returns the updated value.
// let count =0;
// function addCount(){
//    count ++;
//    return count;
// }
// console.log(addCount());
// console.log(addCount());

// ✅ Arrays (methods, iteration)
// Create an array of 5 numbers and write a function that returns the sum using a loop.

// function sum(arr){
//     total = 0;
//     for(i=0; i<length-1; i++){
//         total+= arr[i];
//     }
//     return total;
// }
// let arr =[1,2,3,4,5];
// console.log(sum(arr));  // Output: 15


// Use map() method to square each number in an array.
// let numbers =[1,2,3,4,];

// let doubled = numbers.map(function(num) {
//     return num * 2;
// });

// console.log(doubled);  // [2, 4, 6, 8]


// Use filter() method to return only the even numbers from an array.

// let number = [1,2,3,4,5,6,8];
// let evenNumbers = number.filter(function(num) {
//    return num % 2 === 0;   // condition: even number

// });
// console.log(evenNumbers);

// Use push() and pop() to add and remove elements from an array.

// let fruits = ["apple","banana"];
// fruits.push('orange');
// console.log(fruits);


// // ✅ pop() – Remove element from the end
// let removedFruit = fruits.pop();
// console.log(fruits);
// console.log(removedFruit);


/* Sort an array of strings alphabetically using sort().

let fruit = ["banana","apple","cherry"];
fruit.sort();
console.log(fruit);*/

//Strings (methods)
// Write a function that returns the length of a given string.
/*function getStringLength(str) {
    return str.length;
}

//Example:
/*let result = getStringLength("JavaScript");
console.log(result); */ // Output: 10

//without pre define method
/*function getLength(str) {
    let count = 0;
    while (str[count] !== undefined) {
        count++;
    }
    return count;
}

console.log(getLength("Sunita")); */



//revers string
/*function reverseString(str) {
    let reversed = "";
    let i = 0;
    while (str[i] !== undefined) {
        reversed = str[i] + reversed;
        i++;
    }
    return reversed;
}

console.log(reverseString("Sunita")); */


// 📘 7. String ke Har Character ko Print Karna

/*let str = "Sunita";
let i = 0;
while (str[i] !== undefined) {
    console.log(str[i]);
    i++;
}*/

// Convert a string to uppercase using toUpperCase().
/*let text = "hello world";
let upperText = text.toUpperCase();
console.log(upperText); */


// Extract a substring from a given string using slice() or substring().
/*let text = "JavaScript";
let result = text.slice(4, 10);
console.log(result); // Output: "Script"*/

/*let text = "JavaScript";
let result = text.substring(text.length - 4);
console.log(result); // Output: "ript"*/

// Replace a word in a string using replace().

/*let text = "Hello world, welcome to the world of JavaScript.";
let result = text.replace("world", "universe");
console.log(result); // Output: "Hello universe, welcome to the world of JavaScript."*/


