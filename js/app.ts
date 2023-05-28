const InputNum1 = document.querySelector("#input1") as HTMLInputElement;
const InputNum2 = document.querySelector("#input2") as HTMLInputElement;
const SubmitBtn = document.querySelector("#btn1");

function addNumbers(num1 : number, num2 : number){
    return num1 + num2
}
SubmitBtn?.addEventListener("click", ()=>{
   console.log(`The sum is ${addNumbers(+InputNum1.value, +InputNum2.value)}`);
})

