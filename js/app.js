var InputNum1 = document.querySelector("#input1");
var InputNum2 = document.querySelector("#input2");
var SubmitBtn = document.querySelector("#btn1");
function addNumbers(num1, num2) {
    return num1 + num2;
}
SubmitBtn === null || SubmitBtn === void 0 ? void 0 : SubmitBtn.addEventListener("click", function () {
    console.log("The sum is ".concat(addNumbers(+InputNum1.value, +InputNum2.value)));
});
