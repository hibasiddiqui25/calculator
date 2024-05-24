#!/usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstnumber" },
  { message: "enter secound number", type: "number", name: "secondnumber" },
  
{
    message: "select one of the operators to perform action",
 types: "list",
 name: "operator",
choices: ["addition", "subtraction", "multiplication", "division"],
},
]);
// conditional statement 
if (answer.operator ==="addition") {
      console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.operator ==="subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
} else if (answer.operator === "multiplication") {
console.log(answer.firstnumber * answer.secondnumber);
} else if (answer.operator ==="division") {
    console.log(answer.firstnumber / answer.secondnumber);
} else {
    console.log("please slelect valid opperator")
}
