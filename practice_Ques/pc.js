//Promises
//Q1
// const promise = new Promise((resolve , reject) => {
//    resolve("Data loaded successfully");
// });

// const result = promise.then((res) => {
//     console.log(res);
//     return res;
// });

// console.log(result);

//Q2

// let isLoggedIn = false;

// const checkLogin = new Promise((resolve , reject) => {
//     if(isLoggedIn){
//         resolve("Welcome user");
//     }else{
//         reject("Please login first");
//     }
// });

// const result = () => {
//     checkLogin
//     .then((res) => {
//         console.log(res);
        
//     })
//     .catch((err) => {
//         console.log(err);
        
//     })
// };

// result();

//Q3
// const getData = () => {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             resolve(["Apple", "Banana", "Mango"]);
//         }, 2000);
//     });
// };

// const arr = getData().then((res) => console.log(res));

// console.log(arr);

//Q4
// let coin = (Math.floor(Math.random() * 2));

// const toss = () => {
//     return new Promise((resolve , reject) => {
//         if(coin === 1){
//             resolve("Success !");
//         }else{
//             reject("Failed !");
//         }
//     });
// };

// const result = () => {
//     toss() 
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// };

// result();

//Q5
// const promise = new Promise((resolve , reject) => {
//     resolve(20);
// });

// const result = promise
// .then((res) => {
//     return res*2;
// })
// .then((res) => {
//     return res+5;
// })
// .then((res) => {
//     return res*3;
// })
// .then((res) => {
//     console.log(res);
// })

// console.log(result);

//Q6

// let isLoggedIn = true;
// const promise = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         if(setTimeout){
//             resolve("Success !");
//         }else{
//             reject("Rejected");
//         }
//     }, 2000);
// });

// const result = promise
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })
// .finally(() => {
//     console.log("Promise execution completed");
// })

// console.log(result);

//Q9 Fake login system
// const loginUser = (username , password) => {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             if(username && password){
//                 console.log(`username ${username} + password ${password}`);
//                 resolve("Login Successful");
//             }else{
//                 reject("Invalid username or password");
//             }
//         } , 2000);
//     })
// }

// const output = loginUser("admin" , "1234")
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

// console.log(output);

//10
// const makePayment = (amount) => {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             if(amount > 0){
//                 resolve("Payment successful");
//             }else{
//                 reject("Invalid payment amount");
//             }
//         } , 2000);
//     })
// }

// const result = makePayment(345)
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })
// .finally(() => {
//     console.log("Transaction ends here");
// })

// console.log(result);

//Q11
// const getUser = () => {
//     return new Promise((resolve , reject) => {
//         resolve({
//             id: 101,
//             name: "Nandini"
//         });
//     })
// }

// const getProducts = () => {
//     return new Promise((resolve , reject) => {
//         resolve(["Laptop", "Phone", "Headphones"]);
//     })
// }

//  getUser().then((user) => {
//     console.log(user);
//     getProducts();
// })
// .then((product) => {
//     console.log(product);
// })

// console.log(output);

//12
// const fetchUser = () => {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             resolve({
//                 id: 1,
//                 name: "John",
//                 email: "john@gmail.com"
//             });
//         }, 2000);
//     })
// }

// const result  = fetchUser()
// .then((res) => {
//     console.log(`User : ${res.name}`);
//     console.log(`Email : ${res.email}`);
// });

// console.log(result);