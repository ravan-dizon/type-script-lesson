function sum(num1 : number, num2 : number){
    return num1 + num2;
}

function getResult(num : number) : string{
    let resultString = `Result : $ {num}`;
    return resultString;
}

let addOrGetResult: (num1 : number, num2 : number) => number;
let GetResultFunction: (num : number) => string;

addOrGetResult = sum(13, 20);
console.log(addOrGetResult);
GetResultFunction = getResult;
console.log(GetResultFunction);