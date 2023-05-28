//Objects and array in type script
// enum Access {ADMIN = 123, MODERATOR = 456, USER = 111}
var Access;
(function (Access) {
    Access[Access["ADMIN"] = 0] = "ADMIN";
    Access[Access["MODERATOR"] = 1] = "MODERATOR";
    Access[Access["USER"] = 2] = "USER";
})(Access || (Access = {}));
var student = {
    name: 'John',
    age: 22,
    interest: ["Coding", "Watching"],
    access: Access.ADMIN
};
if (student.access === 0) {
    console.log('Hello Admin!');
}
