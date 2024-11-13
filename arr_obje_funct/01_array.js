// array

const myarr = [1,2,3,4,5,6]
// console.log(myarr);
// console.log(myarr[2]);

// // array methods
// myarr.push(12)
// myarr.push(19) //push-add hoti hai value
// myarr.pop() //remove ho jaati hai last waali
// myarr.unshift(8) //add value in first position
// myarr.shift() //remove the value from 1st  position

// console.log(myarr.includes(9)); //boolean mein aaigi value
// console.log(myarr.indexOf(9)); // joh index ki value nhi hai uski -1 aaigi
// console.log(myarr.indexOf(12));//jiski hai uski index aa jaigi 

// const newarr = myarr.join()
// console.log(myarr);


// console.log( newarr); //iski value string ho gyi hai

//slice and splice

console.log("A",myarr);
const myn1 = myarr.slice(1,3) //slice mein last index remove ho jata hai
console.log(myn1);

console.log("B",myarr);

const myn2 = myarr.splice(1,3) //splice mein pura partition ho jata hai array ka toot jaata
console.log("C",myarr);
console.log(myn2);

