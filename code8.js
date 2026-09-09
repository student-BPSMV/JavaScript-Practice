//while loop             //we use while loop for infinite condition ...

// let a = 5;
// while(a<=10){
//     console.log(a);
//     a++;
// }

//do while loop        //

// let i = 10;
// do{
//     console.log(i);
//     i++;
// }while(i<=5);

//in  and  of
//in  results  in  index
// let fruits = ["apple" , "banana" , "kiwi" , "grapes"];

// for(let a in fruits){
//     console.log(a);
// }

//of loop results in value 
// let fruits = ["apple" , "banana" , "kiwi" , "grapes"];

// for(let a of fruits){
//     console.log(a);
// }


// let num = 500 ;
// let isFound = false;

// while(isFound === false){
//     if(num%7===0 && num%13===0){
//         isFound = true;
//     }else{
//         num++;
//     }
// }console.log(num);


// let num = 1;
// let result = "";
// let maxLimit = 500;

// while(num <= maxLimit){
//     if(num%7===0 && num%13===0){
//         result = result + num + " , ";
//     }
//         num++;
   
// }console.log(result);

// let num = 1;
// let result = "";
// let maxLimit = 30;

// while(num <= maxLimit){
//     if(num % 5 !== 0){
//         result = result + num + " , ";
//     }
//     num++;
// }console.log(result);


//printing random values  b/w 0 to 1
// let value = Math.random();
// console.log(value);

// let value = Math.floor(Math.random() * 6) ;
// console.log(value);

// let attempt = 0;
// let isSearch = true;
 
// while(isSearch){
//     if((Math.floor(Math.random() * 6) + 1) === 6){
//         isSearch = false;
//     } attempt++;
// }console.log(`You get 6 at : ${attempt}`);
