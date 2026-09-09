//===============basic -if-else===============
//code1
// let num = 67;
// if(num % 2===0){
//     console.log("The number entered is even.");
// }else{
//     console.log("The number entered is odd."); 
// }

//code2
// let age = Number(prompt("Enter a year :"));

// if(age >= 18){
//     console.log("YOU ARE ELIGIBLE...");
// }else{
//     console.log("YOU ARE NOT ELIGIBLE...");
// }

//code3
// console.log((a % 2 === 0)? "Even" : "Odd");

//code4
// let marks = 50;
// if(marks>=40){
//     console.log("Pass");
// }else{
//     console.log("Fail");
// }

//code5
// let num = 30;
// if(num % 5 === 0){
//      console.log("Divisible");
// }else{
//      console.log("Not Divisible");
// }

//code6
// let name = "Nidhi";
// if(name.length >=10){
//     console.log("contains");
// }else{
//      console.log("does not contains");
// }
//code7

// let year = Number(prompt("Enter a year :"));

// if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
//     console.log("Year is a leap year .");
// }else{
//     console.log("Year is not a leap year .");
// }

//code8
// let a=10;
// let b=30;

// if(a>b){
//     console.log("a is greater than b");
// }else{
//     console.log("b is greater than a");
// }

//code9
// let isLoggedIn = true;
// if(isLoggedIn){
//     console.log("Welcome");
// }else{
//     console.log("PLease log in...");
// }

//code10
// let cartValue = 2000 ;
// if(cartValue >= 1000){
//     console.log("Discount Applied");
// }else{
//     console.log("No Discount");
// }

//=======if-elseif-else (ladder) questions=======

//code1 
// let marks = 87;
// if(marks >= 90){
//     console.log("A");
// }else if(marks >= 80){
//     console.log("B");
// }else if(marks >= 70){
//     console.log("C");
// }else if(marks >= 60){
//     console.log("D");
// }else if(marks >= 50){
//     console.log("E");
// }else if(marks >= 40){
//     console.log("F");
// }else{
//     console.log("Fail");
// }

//code2

//Traffic Lights 

// let color = prompt("Enter the light color : ");

// if(color === "Red" || color === "red"){
//     console.log("STOP !!!");
// }else if(color === "Yellow" || color === "yellow"){
//     console.log("WAIT ...");
// }else if(color === "Green" || color === "green"){
//     console.log("GO");
// }else{
//     console.log("You have not entered a valid color...");
// }

//code3
// let a = 100;
// let b = 89;
// let c = 156;

// if(a>b){
//     if(a>c){
//         console.log("a is the largest number..");
//     }else {
//         if(c>b){
//             console.log("c is the largest number..");
//         }
//     }
// }else{
//     console.log("b is the largest number..");
// }

//code4
//Greetings : 

// let time = Number(prompt("Enter the time:"));

// if(time >= 0 && time < 12){
//     console.log("GOOD MORNING ..!");
// }else if(time >= 12 && time < 16){
//     console.log("GOOD AFTERNOON ..!");
// }else if(time >= 16 && time < 21){
//     console.log("GOOD EVENING ..!");
// }else {
//     console.log("GOOD NIGHT ..!");
// }

//code5
// let units = 156 ;
// let bill = 0 ;
// if(units <= 100){
//     bill = (units * 5);
// }else if(units <= 200 ){
//     bill = (100 * 5) + ((units-100)*7);
// }else{
//     bill = (100 * 5) + (100 * 7) + ((units-200)*10);
// }

// console.log("Your bill will be : ",bill);

//code6 
// let weight = 16;

// if(weight< 18.5){
//     console.log("UNDERWEIGHT");
// }else if(weight >= 18.5 && weight <= 24.9){
//     console.log("NORMAL");
// }else if(weight >= 25 && weight <= 29.9){
//     console.log("OVERWEIGHT");
// }else{
//     console.log("OBESE");
// }

//code-7
// let date = 4;
// if(date === 1){
//     console.log("Monday");
// }else if(date === 2){
//     console.log("Tuesday");
// }else if(date === 3){
//     console.log("Wednesday");
// }else if(date === 4){
//     console.log("Thursday");
// }else if(date === 5){
//     console.log("Friday");
// }else if(date === 6){
//     console.log("Saturday");
// }else{
//     console.log("Sunday");
// }

//code8
// let temp = 89 ; 
// if(temp>40){
//     console.log("Extremely Hot");
// }else if (temp>=25 && temp<40){
//     console.log("Warm");
// }else if (temp>=10 && temp<25){
//     console.log("Moderate");
// }else {  
//     console.log("Cold");
// }

//code-10
// let x = 10 ;
// let y = -15 ;

// if(x===0 && y===0){
//     console.log("Origin");
// }else if(x>0 && y>0){
//     console.log("1 Quadrant");
// }else if(x<0 && y>0){
//     console.log("2 Quadrant");
// }else if(x<0 && y<0){
//     console.log("3 Quadrant");
// }else if(x>0 && y<0){
//     console.log("4 Quadrant");
// }else if(x>0 && y===0){
//     console.log("x axis");
// }else if(x===0 && y>0){
//     console.log("y axis");
// }else{
//     console.log("you have entered wrong quadrant...")
// }

//code-9
// let income = 750000;

// if (income <= 250000) {
//     console.log("Tax bracket: 0%");
// }
// else if (income <= 500000) {
//     console.log("Tax bracket: 5%");
// }
// else if (income <= 1000000) {
//     console.log("Tax bracket: 20%");
// }
// else {
//     console.log("Tax bracket: 30%");
// }







//Nested-if-else 
//code1

// const pin = 456789 ;
// let totalAmount = 50000;
// let amount = 4500;
// let yourPin = Number(prompt("Enter the pin : "));
// if( yourPin === pin){
//     if(amount<=totalAmount){
//         console.log("Withdraw Money.");
//     }else{
//         console.log("Money cannot be withdrawed.");
//     }
// }else{
//     console.log("You cannot withdraw money.")
// }

// code-2
// let donorAge = 23;
// let donorWeight = 56;

// if(donorAge >=18){
//     if(donorWeight >=50){
//         console.log("You are eligible to donate.");
//     }else{
//         console.log("You are not eligible to donate.");
//     }
// }else{
//     console.log("You are not eligible to donate.")
// }

// code3
// let applicant = 23;
// let hasPassedVisionTest = true;
// if(applicant >= 18){
//     if(hasPassedVisionTest){
//         console.log("You are eligible to drive.");
//     }else{
//         console.log("You are not eligible to drive.");
//     }
// }else{
//     console.log("You are cannot drive.")
// }

//code-4

// code-5
// let hasGraduated = true;
// let examScore = 87;
// if(hasGraduated){
//     if(examScore >= 75){
//         console.log("admission successful ....");
//     }else{
//         console.log("admission unsuccessful ...."); 
//     }
// }else{
//      console.log("You cannot take admission");
// }

//code-6

// let isDegree = true;
// let experience = Number(prompt("Enter the years of expereince:")); 
// if(isDegree){
//     if(experience>=2){
//          console.log("You are Shortlisted.");
//     }else{
//         console.log("You are not Shortlisted."); 
//     }
// }else{
//      console.log("You are not eligible.");
// }

//code-7
// let isRRated = true;
// let age = Number(prompt("Enter the years of age:")); 
// if(isRRated){
//     if(age>=17){
//          console.log("You can watch.");
//     }else{
//         console.log("You cannot watch."); 
//     }
// }else{
//      console.log("You are not eligible.");
// }

//code-8
// let a = Number(prompt("Enter a number : "));
// let b =  Number(prompt("Enter a number : "));
// let c =  Number(prompt("Enter a number : "));
//     if( a+b>c && a+c>b && b+c>a ){
//         if( a===b && b===c ){
//             console.log("Equilateral triangle ...");
//         }else if(a===b || b===c || c===a){
//             console.log("Isosceles triangle ...");
//         }else{
//             console.log("Scalene triangle ...")
//         }
//     }else{
//         console.log("It does not specify Inequality Theorem...")
//     }

//code-9
// let name = "Nandini";
// const password = 345;
// const otp = "567890";

// let userName = prompt("Enter your name : ");
// const userPassword = Number(prompt("Enter the password : "));
// const userOtp = prompt("Enter the otp : ");

// if(userName === name && userPassword === password){
//     if(userOtp === otp && userOtp.length === 6){
//         console.log("LOGIN SUCCESSFUL...");
//     }else{
//        console.log("LOGIN UNSUCCESSFUL..."); 
//     }
// }else{
//     console.log("LOGIN SUCCESSFUL...");
// }

//code-10

// let roomType = prompt("Enter the room type : ");
// roomType.trim().toLowerCase();

// let singleRoom = 0;
// let doubleRoom = 8;

// let isVip = true;

// let rate = 8000;
// let discountedAmount = rate - (0.3 * rate);

// if((roomType === "singleroom" && singleRoom > 0) || (roomType === "doubleroom" && doubleRoom > 0)){
//     console.log("Yes, room is available...!");
//     if(isVip){
//         console.log("You will get 30% discount..");
//         console.log("The amount is : " , discountedAmount);
//     }else{
//         console.log("sorry , You will not get discount...");
//     }
// }else{
//     console.log("Sorry , No room is available...");
// }






