//literals and constructor

// const tinderuser= new Object() //singleton object
 const tinderuser={} //non singleton object
tinderuser.id = '123abs'
tinderuser.name = 'arun'
tinderuser.isloggedin = false
// console.log(tinderuser);

const regularClass = {
    eamil:'harsh-gehlot21@gmail.com',
    fullname:{
     userfullname:{
        firstname:'harsh',
        lastname:'gehlot'
    }
}
}
console.log(regularClass.fullname.userfullname.firstname);

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}
const obj4 = {5:'e',6:'f'}

// const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2) target(empty source) and source
const obj3 = {...obj1,...obj2,...obj4}
console.log(obj3);


const users = [
    {
        id : 1,
        email:'hites@gmail.com'
    },
    {
        id : 1,
        email:'hites@gmail.com'
    },
    {
        id : 1,
        email:'hites@gmail.com'
    },
    {
        id : 1,
        email:'hites@gmail.com'
    } 
]
users[1].email
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isloggedin')); //available hai ya nhi



