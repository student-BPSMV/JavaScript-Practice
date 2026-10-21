// const myPromise = new Promise((resolve , reject) => {
//     let a = 5;
//     if(a % 2 === 0){
//         resolve("Even");
//     }else{
//         reject("Odd");
//     }
// });

// myPromise.then((res)=>{
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });


// const myPromise = new Promise((resolve, reject) => {
//   let a = 5;
//   if (a % 2 == 0) {
//     resolve("Even");
//   } else {
//     reject("Odd");
//   }
// });
//
// myPromise
//   .then((resolveValue) => {
//     console.log(resolveValue);
//   })
//   .catch((err) => {
//     console.log(err);
//   });



// let newPromise = new Promise((a, b) => {
//   setTimeout(() => {
//     a(1);
//   }, 1000);
// });

// newPromise
//   .then((value) => {
//     console.log(value);
//     return value + 1;
//   })
//   .then((value) => {
//     console.log(value);
//     return value + 1;
//   })
//   .then((value) => {
//     console.log(value);
// });