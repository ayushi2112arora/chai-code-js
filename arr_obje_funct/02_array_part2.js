const name = ['ayushi','aaditya','rashi']
const hero = ['kritik','salman','ranveer']

// name.push(hero)
// console.log(name);
// console.log(name[3][1]);

const allname=name.concat(hero) //concatination
// console.log(allname);

//spread method-take a white glass and throw them it spread to the ground
const all_new = [...hero, ...name] // this is also a concat but this method is preferred 
console.log(all_new);//spread out elements

const another_array = [1,2,3,4,[5,6,7],12,4,[8,10,[15,16,20,21]]]
const r_another_array=another_array.flat(Infinity)
console.log(r_another_array);

// array in loop-advanced
console.log(Array.isArray('ayushi')); //boolean value dega
console.log(Array.from('ayushi'));
console.log(Array.from({name:'ayushi'}));//empty array - interesting case

const score1=100
const score2=200
const score3=300

console.log(Array.of(score1,score2,score3));

// read about isfrom,of,and from
