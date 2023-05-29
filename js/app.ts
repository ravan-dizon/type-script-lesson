// => CUSTOM TYPE
type RavanCoder = number | string;


// function addOrCombine(data1 : number | string, data2 : number | string){ //Union type
function addOrCombine(data1 : RavanCoder, data2 : RavanCoder){ 
    let result : number | string;
    if(typeof data1 === 'number' && typeof data2 === 'number'){
        result = data1 + data2;
    }else{
        result = data1.toString() + data2.toString();
    }
    return result;
}

const combineNum = addOrCombine(13, 20);
console.log(combineNum);

const combineString = addOrCombine("Ravan ", "Coder");
console.log(combineString);