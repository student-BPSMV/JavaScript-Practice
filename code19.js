const value1 = {a: "1" , b:"2"};
const value2 = {c: "3" , d:"4"};
let result = Object.assign(value1 , value2);
console.log(result);

let obj = {
    greet : function(){
        console.log("Hey Guys");
    },
};

let value = Object.create(obj);
console.log