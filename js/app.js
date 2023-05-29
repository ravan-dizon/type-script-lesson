function sum(num1, num2) {
    return num1 + num2;
}
function getResult(num) {
    var resultString = "Result : $ {num}";
    return resultString;
}
var addOrGetResult;
var GetResultFunction;
addOrGetResult = sum(13, 20);
console.log(addOrGetResult);
GetResultFunction = getResult;
console.log(GetResultFunction);
