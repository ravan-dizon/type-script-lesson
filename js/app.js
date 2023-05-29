var userData; //unknown is similar to any
var trueData;
userData = "Programmer";
userData = 2013;
// trueData = userData;
if (typeof userData === "string") {
    trueData = userData;
}
function generateErrorCode(description, errorCode) {
    throw { message: description, code: errorCode };
}
function infiniteLoop() {
    while (true) { }
}
generateErrorCode("Error hapened", 402);
infiniteLoop();
