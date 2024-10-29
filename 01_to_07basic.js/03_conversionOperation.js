                                      //conversion

let  score = '45abc'
// console.log(typeof score);
// console.log(typeof(score));

let valuenumber = Number(score)
// console.log(typeof valuenumber);
// console.log(valuenumber);

let value = null
// console.log( typeof (value));
let valuenumber1 = Number(value);
// console.log(valuenumber1);
// console.log(typeof valuenumber1 );


let value2 = undefined
// console.log( typeof (value2));
let valuenumber2 = Number(value2);
// console.log(valuenumber2);
// console.log(typeof valuenumber2 );



let value3 = true
// console.log( typeof (value3));
let valuenumber3 = Number(value3);
// console.log(valuenumber3);
// console.log(typeof valuenumber3 );



let value5 = "yash"
// console.log( typeof (value5));
let valuenumber5 = Number(value5);
// console.log(valuenumber5);
// console.log(typeof valuenumber5 );

let isloggedIn = "kl"
let booleanIsLoggedIn = Boolean(isloggedIn)
// console.log(booleanIsLoggedIn);



let sumnumber = 78
let stringnumber = String(sumnumber);
// console.log(stringnumber);
// console.log( typeof (sumnumber));
// console.log(typeof stringnumber );


//'45' = 45
//undefined = NaN
//'45gfd' = NaN not a number
// true=1; false=0
//NULL = object = 0 
//1=true; 0=false
//""=false
//"kl" = true



         //***********************************Operation********************************************

let no = 78
let negvalue = -no
console.log(negvalue);

// console.log(4+2);
// console.log(4-2);
// console.log(4*2);
// console.log(4/2);
// console.log(4%2);
// console.log(4**2);

str1= 'hello'
str2 = ' ayushi'
let str3 = str1 + str2
console.log(str3);

console.log("1"+3);
console.log(1 +"3");
console.log("1" + 3 + 4);//type conversion
console.log(1+3+'4');

console.log(+true);//boolean mein hota hai to increment karega isiliye number mein aaya result
console.log(+"");//tricky conversion never use

let num1,num2,num3
num1=num2=num3=2+2
console.log(num1);

let gamecounter = 200
//gamecounter++
++gamecounter //prefix and postfix read
console.log(gamecounter);




