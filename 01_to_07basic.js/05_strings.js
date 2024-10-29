const name='ayushi'
const repocount=50

//console.log(name+repocount+"value"); //concanicate not in used
console.log(`hello my name is ${name} and ,my repocount is ${repocount}`);//mostly we preferred this log.backtick we use string impulation

//declaration of the string

const reponame = new String('ayushi-arora-.com')
console.log(reponame.__proto__);
console.log(reponame[4]);

console.log(reponame.length);
console.log(reponame.toUpperCase());
console.log(reponame.italics());
//console.log(reponame.split());
console.log(reponame.charAt(2));
console.log(reponame.indexOf('u'));



const newstring = reponame.substring(-12,4)
console.log(newstring);

const anotherstring = reponame.slice(-12,5)
console.log(anotherstring);

const commonstring = "                ayushi             "
console.log(commonstring);
console.log(commonstring.trim());

const url = "https://ayushi.com/ayushi%20arora"
console.log(url.replace('%20','-'));

console.log(url.includes('ayushi'));
console.log(url.includes('rahul'));

console.log(reponame.split('-','10'));
console.log(reponame.big());
console.log(reponame.at(1));
console.log(reponame.blink());
console.log(reponame.charCodeAt(15));
console.log(reponame.endsWith('arora',12));
console.log(reponame.fontsize(18));
console.log(reponame.lastIndexOf());
console.log(`index of the last ${repocount} is${name.lastIndexOf(repocount)}`);






