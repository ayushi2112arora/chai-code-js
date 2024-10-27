const score = 200
const balance = new Number(100)

console.log(score);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const othernumber=123.456
console.log(othernumber.toPrecision(4));

const hundreds= 100000000
console.log(hundreds.toLocaleString('en-IN'));


//++++++++++++++++++++++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-6));
console.log(Math.round(41.9));
console.log(Math.ceil(2.6));//top value jara sa 2 se jyada hoga toh 2 hi lega
console.log(Math.floor(4.9));//floor niche waali value lega
console.log(Math.min(4,6,2,3,7));
console.log(Math.max(4,6,2,3,7));


//math koh kaha use karenge apn
console.log(Math.random());//0 and 1 ke bich hi aati hai value random ki
console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10) + 1)

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1) + min));
  