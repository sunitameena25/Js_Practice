// Declare a variable to store your name and log it to the console.
// let a;
// a = "sunita";2025
// console.log(a);

//  Create variables for age, country, and hobby — display a sentence using all.->   20 india danse
// var age = prompt("What is your age?");
// var country = prompt("country name");
// var hobby=prompt("hobby");
// console.log(age,country,hobby);

//  Swap two variables' values without using a third variable.  -> swap
// let a=10;
// let b=20;
// a = a+b; //30
// b = a-b;  //30-20=10
// a = a-b;  //30-10=20
// console.log(a,b);

// // Reassign a let variable and explain why const can't be reassigned.
// // let can be reassigned
// let color ="red";
// color ="blue";
// console.log("color:",color);

// //const cant't be
// const a=20;
// a=30;
// console.log("a:",a);

// Store the current year and your birth year, then calculate and display your age.
//  let currentYear = 2025;
//  let birthYear =1996;
//  let age =currentYear-birthYear
//  console.log(age);

// Write a program to check if a number is even or odd using % operator.
// let num = prompt("take anumber");
// if (num%2 ===0){
//     console.log("num is even");
// }else{
//     console.log("num is odd");

// }

 // Use comparison operators to check if a person is eligible to vote. 
//    let age = prompt("take a age");
//    if(age >=18){
//      console.log("eligible to vote");
//    }else{
//      console.log("not elegible");
//    }

// Calculate total price with a discount using arithmetic operators. 
    // let price = 1000;
    // let discount = 10;
    // let totalPrice = price-(price*discount/100);
    // console.log(totalPrice);

// Use logical operators to check if a user is both verified and logged in return true else false. 
//    let userVeryfied = true;
//    let isLoggedIn = true;
//    if(userVeryfied && isLoggedIn){
//      console.log("true");
//    }else{
//      console.log("false");
//    }

// Increment a variable by 1 using both ++ and += — show the difference.
//  let count =5;
//  count++;
//  console.log(count);

//  let score =4;
//  score +=1;
//  console.log(score);
   
// Create a function that adds two numbers and returns the result.  
//  let a=2;
//  let b=4;
// function add(){
//     console.log(a+b);
// }
// add();
// function add(a,b){
//     return a+b;
// }
//  let a=add(3,4);
// console.log(a);
// console.log(add(3,4));



// // Make a function that checks if a number is prime.
// let num = prompt("type any number");
// function prime(num){
//     if(num < 1){
//         return;
//     }
//     for(i=2; i<num; i++){
//         if(num % i==0){
//             console.log("num is not prime");
//             return;
//         }
//     }
//       console.log("num is prime");

// }
// prime(num);


// Build a function that returns the maximum of three numbers. 
//   let a=3;
//   let b=5;
//   let c=8;
//   function max(){
//     if(a>b && a>c){
//         console.log("a is max");
//     }else if(b>c && b>a){
//         console.log("b is max");
//     }else{
//         console.log("c is max");
//     }
//   }
//   max();

// Create a function to reverse a string. 
//   let string = "hello";
//   let reversed = "";
//   function reverse(){
//     for(let  i=string.length-1; i>=0;i--){
//         reversed+= string[i];
//     }
//     console.log(reversed);
//   }
//   reverse();

// Write a function that counts the number of vowels in a string.  
//  let string = "hello";
//  let vowel = "";
//  function countVowel(){
//     for(let i=0; i<string.length; i++){
//     if ("aeiou".includes(string[i].toLowerCase())) {
//         vowel+= string[i];
//         }
//     }
//     console.log(vowel);
//  }
//  countVowel();

//second method
// let string = "hello";
// let vowel = "";

// function countVowel() {
//   for (let i = 0; i < string.length; i++) {
//     let ch = string[i].toLowerCase();  // optional for safety
//     if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
//       vowel += string[i];
//     }
//   }
//   console.log(vowel);  // Output: "eo"
// }

// countVowel();

// Build a tip calculator function that takes amount and tip % as input.
//  let amount =Number(prompt("enter amount"));
//  let tipPercent = Number(prompt("enter tip %"));
 
// function calculateTip(amount,tipPercent){
//     let tip = (amount * tipPercent) / 100;
//    let total= amount+tip;
//    console.log("Tip: ₹" + tip);
//   console.log("Total Amount: ₹" + total);
  
// }
// calculateTip(amount,tipPercent);

// Use a function to calculate the factorial of a number.
// function factorial(n){
//     let result =1;
//     for(let i=1; i <=n; i++){
//         result+=i;
//     }
//     console.log(result);
// }
// factorial(9);

// Create a simple interest calculator using a function.
//  let p=prompt("type priceple");
//  let r=prompt("type rate of intrest");
//  let t=prompt("give time ");
//  function si(){
//   si=(p*r*t)/100;
//   console.log(si);
//  }
//  si();

// Create a function that checks if a year is a leap year or not.
//  function isLeapYear(year){
//    if((year % 4 ===0 && year % 100 !==0) || (year % 400 ===0)){
//    console.log(year+ "is a leap year");
//  }else{
//     console.log(year + "is not a leap year");
//   } 

//  }

//  isLeapYear(2025);