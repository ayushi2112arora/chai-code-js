//object has two types :literals and constructor 
//singleton-only one object is there jhabh hum literals mein use karenge toh singleton use nhi hoga constructor mein hoga
//Object.create //singleton

//object literals

//symbol
const mySym = Symbol('KEY1')
const jsuser={
    name:'ayushi',
    rollno :2,
    age:14,
    [mySym] : 'MYKEY21', //symbol koh propogate krne ke liye square brackets use krtai hai 
    isloggedIn:false,
    lastloginDays:['monday','saturday']

}
console.log(jsuser.name);//this will not use jayda tak yeh use karenge
console.log(jsuser['name']);//this is valid object yeh bhi karenge lakin limit mein
// console.log(typeof jsuser.mySym);
console.log(typeof jsuser[mySym]);

jsuser.name='rashi arora'
// Object.freeze(jsuser)
jsuser.name = 'rashiarora08'
console.log(jsuser);

jsuser.greeting = function(){
    console.log('hello js user');
    
}
// console.log(jsuser.greeting);function ka referencr aaya hai


jsuser.greetingtwo = function(){
    console.log(`hello js user ,${this.name}`); 
    
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());





 


