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

