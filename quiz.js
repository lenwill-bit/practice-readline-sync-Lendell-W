const readline = require('readline-sync');

let name = readline.question("What is your name? ");
console.log("Hello, " + name + "!");

let answer1 = readline.question("What data type is \"hello\"? ");
let answer2 = readline.question("What is 5 + 5? ");
let answer3 = readline.question("What data type is true? ");
let answer4 = readline.question("What is \"5\" + \"5\"? ");
let answer5 = readline.question("What data type is 42? ");

console.log("Your answers:");
console.log(answer1);
console.log(answer2);
console.log(answer3);
console.log(answer4);
console.log(answer5);