// Exercise 3 page 68
"use strict";

let currentDate = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let customFormat = `${currentDate.getDate()}-${months[currentDate.getMonth()]}-${currentDate.getFullYear()} (${days[currentDate.getDay()]})`;
console.log(customFormat);