let userData : unknown;//unknown is similar to any
let trueData : string;

userData = "Programmer";
userData = 2013;

// trueData = userData;

if(typeof userData === "string"){
    trueData = userData;
}

function generateErrorCode(description : string, errorCode : number) : never{
    throw{message : description, code : errorCode}
}
function infiniteLoop() :never{
    while(true){}
}

generateErrorCode("Error hapened", 402);
infiniteLoop();