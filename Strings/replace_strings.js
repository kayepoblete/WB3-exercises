//Exercise 1 page 54
"use strict";

let message = "Our corporate offices are located in Dallas";

let newMessage1 = message.replace("Dallas", "Austin");
console.log(newMessage1);
let newMessage2 = message.replace(/DALLAS/i, "Austin");
console.log(newMessage2);