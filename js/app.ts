
interface ModelType{
    type  : string,
    color : string,
    event : ()=> void;
}

class Vehicle{
    // type : string;
    // color: string;
    modelTypes : ModelType;

    constructor(model : ModelType){
        this.modelTypes = model;
  
    }
}
const model_type = {
    type : 'Car',
    color : 'Blue',
    event : () => {
        console.log('Event Function')
    },
}
const car = new Vehicle (model_type);
console.log(car);