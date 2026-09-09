//Calculator

//switch

// switch(expression){
//     case value1:
//         stm
//         break;
//     case value2:
//         stm
//         break;
//     default:
//         break;
// }


// let day = 1;
// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     default : 
//         console.log("invalid day");
// }

function calci(num1 , op , num2){
    let result;

    switch(op){
        case "+":
            result = num1+num2;
            break;
        case "-":
            result = num1-num2;
               break;
        case "*":
            result = num1*num2;
               break;
        case "/":
            result = num1/num2;
               break;
        case "%":
            result = num1%num2;
               break;
        default :
          return "Invalid Value";
    }
    return result;
}

function handleCalculator(){
    let val1 = Number(document.querySelector("#num1").value);
    let op = document.querySelector("#operator").value;
    let val2 = Number(document.querySelector("#num2").value);
    let output = calci(val1 , op , val2);
    // console.log("The output is :", output);
  document.querySelector("#output").innerText= output;
}
