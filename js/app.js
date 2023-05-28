function addFunction(num1, num2, showResult, message) {
    var result = num1 + num2;
    if (showResult) {
        console.log(message + result);
    }
    else {
        console.log("Show result iis false");
    }
}
var number1 = 5;
var number2 = 4.5;
var showResult = true;
var message = 'Sum is: ';
addFunction(number1, number2, showResult, message);
