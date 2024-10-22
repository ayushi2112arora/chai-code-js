"use strict"; //treat all js as a newer version
// alert(3+4) we are using node js ,not browser

// code readability is high

let name = 'ps'
let age = 54
let islogicIn = false 
console.table([name,age,islogicIn]);
//number =>2 to power 54
// bigInt
// string => ""
// boolean => t/f
// null=> standalone value
// undefined=>koi value nhi de rakhi hai
// symbol => unique
// object
console.log(typeof undefined); //undefined aayega
console.log(typeof null); //object

const guy_name = 'prince & himanshu both are closest friend'
const guy_age = 45;
 let guy_name1 = 'minu';
 var bigInt = 2^9;
console.log(guy_age);
console.log(guy_name1);
console.log(typeof guy_age);
console.log(typeof guy_name);
console.log(typeof bigInt);


 //interview crack questions datatypes summary 

//js is dynamically typed language because data type will automatically assigned at the time of compilation or code exeution

 //primitive datatypes: 7 types:Strings,number,boolean,null,undefined,symbol,bigint
const score =45
const scorevalue=2.3

const isloggedIn = false
const outsidetemp=null //completely empty
let userEmail = undefined

const id =Symbol('123')
const anotherid = Symbol('123')
console.log(id === anotherid);
const BigNumber = 456777777777779713566789134n

 //reference type(non-primitive):arrays,objects,functions // inka datatype function hi boltai hai

 const heroes = ['shaktiman','doga','nagraj']
 let myobj={
    name:'ayushi',
    age:45,
 }

 const myfunction =function(){
    console.log('hey'); //function ka datatype =object function bol tai hai
    
 }

 console.log(typeof heroes);
 
//return type of variables in js
//1> primitive datatype
//number=number
//string=string
//boolean=boolean
//null=object
//undefined=undefined
//symbol=symbol
//bigint=bigint

//2> non primitive (reference)
//arrays=object
//function=function
//object=object

// *********************************************************************************************

//memory where the data store
//stack memory(primitive (copy milta hai)) and heap memory(non-primitive(reference original value ka))

//stack
let myutube = 'ayushiarora'
let anothername= myutube
anothername='chaiandcode'
console.log(anothername);
console.log(myutube);

//heap
let user = {
    name:'ayushi',
    no:1234

}
let user2=user
user2.no = 7894
console.log(user2.no);
console.log(user.no);