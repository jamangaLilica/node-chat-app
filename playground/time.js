const moment = require('moment');

// var date = new Date();
// console.log(date.getMonth());

// var date = moment();
// date.add(1, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));

// 10:35 am 
// 6.01 am

console.log(moment().format('hh:mm a'));
console.log(moment().format('h:mm a'));