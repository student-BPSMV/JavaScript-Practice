// Basic Level (Foundation)
// 	Write a program to print numbers from 1 to 100.
// 	Print reverse counting from 100 down to 1.
// 	Print all even numbers between 1 and 50.
// 	Print all odd numbers between 1 and 50.
// 	Take an integer input from the user and print its multiplication table (e.g., 5×1=5).
// Intermediate Level (Arithmetic & Logic)
// 6. Calculate and print the sum of numbers from 1 to 10.
// 7. Find the sum of all even numbers from 1 to N (take N as input).
// 8. Calculate the factorial of a given number using a for loop (e.g., 5!=120).
// 9. Check whether a given number is a prime number or not.
// 10. Print the first N terms of the Fibonacci series (e.g., 0,1,1,2,3,5,8…).
// 11. Compute the power of a number (a^b) without using built-in exponent functions.
// 12. Reverse the digits of a given number using a loop (e.g., 1234→4321).
// 13. Determine if a given number is a palindrome (e.g., 121,1331).

//code1
// for(let i = 0; i<=100 ; i++){
//     console.log(i);
// }

//code2
// for(let i = 100; i>=1 ; i--){
//     console.log(i);
// }

//code3
// for(let i = 1 ; i<=50 ; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

//code4
// for(let i = 1 ; i<=50 ; i++){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }

//code5
// let num = Number(prompt("Enter the number : "));
// for(let a = 1 ; a <= 10 ; a++){
//     console.log(`${num} * ${a} = ` , num * a );
// }

//==============Intermediate================//

//code6
// let sum = 0;
// for(let i = 1 ; i<=10 ; i++){
//     sum = sum + i ;
// }
// console.log("The sum of numbers from 1 to 10 is :" , sum);

//code7
// let sum = 0;
// let num = Number(prompt("Enter a number:"));
// for(let i = 1 ; i<=num ; i++){
//     if(i % 2 === 0){
//         sum = sum + i ;
//     }
// }
// console.log("The sum of numbers from 1 to N is :" , sum);

//code8
//Factorial 
// let num = Number(prompt("Enter the number : "));
// let fact = 1;
// for(num ; num > 0 ; num--){
//     fact = fact * num;
// }
// console.log(`Factorial of ${num} =` , fact );

//code9
// let num = Number(prompt("Enter the number : "));
// let primeNumber = true;

// if (num < 2) {
//     primeNumber = false;
// } else {
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             primeNumber = false;
//             break;
//         }
//     }
// }
// if (primeNumber) {
//     console.log(`The ${num} is a prime number.`);
// } else {
//     console.log(`The ${num} is not a prime number.`);
// }


//code10
// let num = Number(prompt("n = "));
// function fib(num){
//     if(num === 0){
//         return 0;
//     }if(num === 1){
//         return 1;
//     }
//     return fib(num-1) + fib(num-2);
// }
// for(let i = 0 ; i<=num ; i++){
//     console.log(fib(i));
// }


//code11
//Exponential
// let base = 5;
// let power = 3;
// let result = 1 ; 
// for(let i = 1 ; i<= power ; i++){
//     result = result * base ; 
// }
// console.log(result);

//code12
// let num = 1234;
// let str = num.toString();
// let revStr = "" ;

// for(let i = str.length-1 ; i>=0 ; i--){
//     revStr = revStr + str[i];
// }console.log("Reverse of a number is : ", revStr);


//code13
// let num = 1221;
// let str = num.toString();
// let revStr = "" ;

// for(let i = str.length-1 ; i>=0 ; i--){
//     revStr = revStr + str[i];
// }if(str === revStr){
//     console.log("The given number is PALINDROME...");
// }else{
//     console.log("The given number is not PALINDROME...");
// }


