// Mutator Methods :
// 1 copyWithin(target , start ,end)
// 2 fill(value , start , end)
// 3 pop()
// 4 push()
//5 reverse()
//6 shift()
//7 unshift()
//8 sort()
//9 splice(start, deleteCount , elements to be added)


// let fruits = ["apple" , "banana", "orange" ,"kiwi" ,"grapes","mango" ,"guava"];
// let newList = fruits.push("cabbage");
// console.log(newList)
// console.log(fruits);
// fruits.copyWithin(2,0,4);
// fruits.fill("carrot" , 1 , 2);
//  let fruits = ['apple', 'banana', 'orange', 'kiwi'];      
//     fruits.splice(1, 2, 'grape', 'melon');    
//     console.log(fruits); 


//Iteration Methods :
// 1 forEach()
// 2 map()
// 3 filter()
// 4 reduce()
// 5 every()
// 6 some()
// 7 find()
// 8 findIndex()
// 9 values()
// 10 keys()
// 11 entries()

arr = [1,2,3,4,5];

// arr.forEach((x) => {
//     console.log(x);
// });

// arr.map((x) => {console.log(x * 2)});

// console.log(arr.filter((x) => {return x % 2 === 0}));

// console.log(arr.reduce((acc , curr)=>{ return acc + curr}));

// let output = arr.every((x) => {
//     x % 2 === 0;
// })
// console.log(output);

// let output = arr.some((x) => {
//     x % 2 !== 0;
// })
// console.log(output);

// let output = arr.find((x) => {return x>3});
// console.log(output);

// let output = arr.findIndex((x) => {return x>3});
// console.log(output);

// for(let entry of arr.entries()){
//     console.log(entry);
// }