// let text = "Javascript"; 
// console.log(text.length);

//  let text = "Hi"; 
//  console.log(text.toUpperCase());

// let text = "Hello World"; 
// console.log(text.indexOf("World"));

//  let text = "I love coding"; 
//  console.log(text.includes("love"));

//  let text = "Apple, Banana"; 
//  console.log(text.slice(0, 5));

//  let text = "Hello John"; 
//  console.log(text.replace("John", "Rahul"));

//  let text = "a,b,c"; 
//  console.log(text.split(","));

//  let text = "   Hello   "; 
//  console.log(text.trim());

//   let a = "Hi", b = "User"; 
//   console.log(`${a} ${b}`);

//    let text = "JS"; 
//    console.log(text[0]);

let str = "hello world";
let strArr = [];
strArr = str.split(" ");
let newStr = '';

function capitalize(){
    for(let i=0; i<strArr.length ; i++){
        let a = strArr[i];
        newStr = a[i].toUpperCase() + a.slice(1);
    }console.log(newStr);
}

capitalize();