
// https://www.theodinproject.com/lessons/foundations-problem-solving


// Other resources consulted:
  // https://www.reddit.com/r/vscode/comments/15e8spu/referenceerror_prompt_is_not_defined/
  // https://www.freecodecamp.org/news/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8/
  // https://www.codecademy.com/article/getting-user-input-in-node-js


const prompt = require('prompt-sync')();

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for(let i = 1; i <= answer; i++) {
  if (i % 3 && i % 5 === 0) {
    console.log("FizzBuzz")
  } else if (i % 3 ){
    console.log("Fizz");
  } else if(i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}