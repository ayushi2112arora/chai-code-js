// Date

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

let mycreateddate = new Date("01-27-2024")
// console.log(mycreateddate);
// console.log(mycreateddate.toString());
// console.log(mycreateddate.toDateString());
// console.log(mycreateddate.toLocaleString());

let mytimestamp=Date.now()
console.log(mytimestamp);//mili second value
console.log(mycreateddate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getTime());
console.log(newDate.getFullYear());
newDate.toLocaleString('default',{
    year:"numeric",
    day:"numeric",
})
console.log(newDate);


