// use strict //
// function //(
// function declaration //

// )

//============================================================================================================================================//

// use strict //

"use strict";

//You can use strict mode in all your programs. It helps you to write cleaner code, like preventing you from using undeclared variables.

// const private = 20; // not posible when using "ues strict"
// console.log(private);

//============================================================================================================================================//

// function //

// A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output.

//--------------------------------------------------------------------------------------------------------------------------------------------//

// function declaration //

function joinTheClass() {
  // function name should be relaten to the function //
  console.log("Pc on koro");
  console.log("Google chrome on koro");
  console.log("FB te jao");
  console.log("Meet er link a click koro");
  console.log("Class a join koro");
}

joinTheClass();
// call or run or invoke
joinTheClass();
// we can call the function from wherever we want.

//--------------------------------------------------------------------------------------------------------------------------------------------//

function addTwoNumbers(num1, num2) {
  // function parameter are the names that we put inside the second bracate of any function.
  const sum = num1 + num2;
  return sum;
  // return is the value, that a function returns to the calling function when it completes the task.
}

console.log(addTwoNumbers(10, 20));
// function argument is the value that are sent to the function when its called.
// the same function can be called multiple times with diffrent argument.

//--------------------------------------------------------------------------------------------------------------------------------------------//

function oddNumberFinder(number) {
  if (number % 2 !== 0) {
    return `${number} is an odd number`;
  } else {
    return `${number} is an even number`;
  }
}

console.log(oddNumberFinder(9));

//--------------------------------------------------------------------------------------------------------------------------------------------//

function multiplyNumber(n1, n2, n3) {
  const multi = n1 * n2 * n3;
  return multi;
}

const multiplecation = multiplyNumber(2, 3, 4);
console.log(multiplecation);
