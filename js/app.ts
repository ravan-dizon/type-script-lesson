//Objects and array in type script
// enum Access {ADMIN = 123, MODERATOR = 456, USER = 111}
enum Access {ADMIN, MODERATOR, USER}

const student: {
    name : string;
    age : number;
    gender? : string;
    interest : string[];
    access : Access
} = {
    name : 'John',
    age : 22,
    interest : ["Coding", "Watching"],
    access: Access.ADMIN
}
if(student.access === 0){
    console.log('Hello Admin!')
}
