// function addOrCombine(data1 : number | string, data2 : number | string){ //Union type
function addOrCombine(data1, data2) {
    var result;
    if (typeof data1 === 'number' && typeof data2 === 'number') {
        result = data1 + data2;
    }
    else {
        result = data1.toString() + data2.toString();
    }
    return result;
}
var combineNum = addOrCombine(13, 20);
console.log(combineNum);
var combineString = addOrCombine("Ravan ", "Coder");
console.log(combineString);
