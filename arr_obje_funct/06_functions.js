function myname(){
console.log('a');
console.log('y');
console.log('u');
console.log('s');
console.log('h');
console.log('i');
}
//myname() //parenthesis means execution of the function and if we not use parenthesis then we call reference

// function sumtwonum(num1,num2) {
//     console.log(num1 + num2);
    
// }
function sumtwonum(num1,num2) {
    // let result = num1 + num2
    // //console.log('hdsduh');
    // return result
    // //console.log('hdsduh');//return ke baad mein likhtai hai toh run nhi hoga output nhi aayega
    return num1 + num2
    
}
//sumtwonum(4,5) //values dete hai jhabh uskoh apn argument boltai hai
//sumtwonum(4,'6')
const result = sumtwonum(4,6)
//numbers lete hai toh usko parameters lete hai
console.log('Result: ',result); // return apne aap mein ek concept hai

function loginuser(username ='samer') {
    if(!username){
        console.log('please enter a username');
        return
    }

    return`${username} just logged in`
}
console.log(loginuser())

function username(val1,val2,...name) { //rest operator bundle mein pack kro aur uskoh de do multi values
    return name
}
console.log(username('prince','ayushi','rashi'));//array ki format deta hai

const user = {
    username:'ayushi',
    price:1555
}
function handleobject(anyobject) {
    console.log(`username is ${anyobject.username } and price is ${anyobject.price}`);
    
}
handleobject(user)
handleobject({
    username:'yogi',
    price:599,
})

const mynewarray=[200,400,600,800]
function returnsecondvalue(mynewarray) {
    return mynewarray[1]
}
//console.log(returnsecondvalue(mynewarray));
console.log(returnsecondvalue([200,400,600,800]));
