let myDate = new Date()
// console.log(typeof myDate);
// console.log(  myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
let meriDate = new Date(2024, 4, 13)
console.log(meriDate.toDateString());
let meriDate1 = new Date(2024, 4, 13, 5, 3)
console.log(meriDate1.toLocaleString());
let meriDate2 = new Date("12-01-2002");// yahan date month year ni chlta 
console.log(meriDate2.toLocaleString());
let experi = myDate.toLocaleString('default',{
    timeZone:'Asia/Kolkata'
})
console.log(experi)
















