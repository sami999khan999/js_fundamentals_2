// use strict // line (9-16)

// function //(
// function declaration // line (26-75)
// function expression // line (93-119)
// arrow function // line (126-186)
// function calling function //
// )

//============================================================================================================================================//

// use strict //

"use strict";

//You can use strict mode in all your programs. It helps you to write cleaner code, like preventing you from using undeclared variables. //

// const private = 20; // not posible when using "ues strict" //

// console.log(private);

//============================================================================================================================================//

// function //

// A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output.//

//============================================================================================================================================//

// function declaration //

// function joinTheClass() {

// function name should be relaten to the function //

//   console.log("Pc on koro");
//   console.log("Google chrome on koro");
//   console.log("FB te jao");
//   console.log("Meet er link a click koro");
//   console.log("Class a join koro");
// }

// joinTheClass();

// call or run or invoke //

// joinTheClass();

// we can call the function from wherever we want. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// function addTwoNumbers(num1, num2) {

// function parameter are the names that we put inside the second bracate of any function. //

// const sum = num1 + num2;
// return sum;

// return is the value, that a function returns to the calling function when it completes the task. //

// }

// console.log(addTwoNumbers(10, 20));

// function argument is the value that are sent to the function when its called. //
// the same function can be called multiple times with diffrent argument. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// function oddNumberFinder(number) {
//   if (number % 2 !== 0) {
//     return `${number} is an odd number`;
//   } else {
//     return `${number} is an even number`;
//   }
// }

// console.log(oddNumberFinder(9));

//--------------------------------------------------------------------------------------------------------------------------------------------//

// function addThreeNumbers(n1, n2, n3) {
//   const sum = n1 + n2 + n3;
//   console.log(sum);

// if we (console.log) inside the function block then we don't have to return it. //

// }

// addThreeNumbers(2, 3, 4);

//============================================================================================================================================//

// function expression

// A function expression is very similar to and has almost the same syntax as a function declaration (see function statement for details). The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// console.log(juiceFactory(10, 15)); // nat posible //

// a function expration can not not be accessed before declaration. //

// const juiceFactory = function (apple, oranges) {

// in function expration we can set the function in a variable. //
// the variable name works as the function name. //

//   const juice = (apple * oranges) / 2;
//   return `${juice} Joice is sready using ${apple} apples and ${oranges} oranges.`;
// };

// console.log(juiceFactory(10, 15));

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const pizzaMaker = function (bread, peanut, mayoneese) {
//   const pizza = bread + peanut / mayoneese;
//   return `${pizza} pizza is ready for everyone`;
// };

// console.log(pizzaMaker(1, 2, 3));

//============================================================================================================================================//

// arrow function

//An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const ageCalculator = (birthYear) => 2022 - birthYear;

// in arrow function we will have to remove the word (function) and place the arrow symbol (=>) between parameter and process. //
// if the function has complited in just one line, then we don't have to return it. //

// console.log(ageCalculator(2003));

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const pizzaMaker = (bread, peanut, mayoneese) => {
//   const pizza = bread + peanut / mayoneese;
//   return `${pizza} pizzais ready for everyone`;
// };

// if ithe function has multiple lines, that means we have to return it. //

// console.log(pizzaMaker(1, 2, 3));

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const pizzaMaker = (bread, peanut, mayoneese) => bread + peanut / mayoneese;

// console.log(pizzaMaker(1, 2, 3));

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const heroMaker = (age, skill) => {
//   if (age > 10 && skill) {
//     // and (&&) means, both statments needs to be true //
//     // or (||) means, only a single statments needs to be true. //
//     return "You are a super hero";
//   } else {
//     return "You can not be a super hero";
//   }
// };
// console.log(heroMaker(18, true));

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const heroMaker2 = (age, skill) =>
//   age >= 18 || skill ? `Yor can be a hero` : `You can not be a hero`;
// console.log(heroMaker2(17, true));

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const math = (x, y) => {
//   return x * y;
// };

// console.log(math(2, 4));

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const math2 = (a, b) => a * b;

// console.log(math2(2, 8));

//============================================================================================================================================//

// function calling function

// The Function which calls another Function is called Calling Function and function which is called by another Function is call Called Function.

//--------------------------------------------------------------------------------------------------------------------------------------------//

function froutCutter(fruit) {
  return fruit * 4;
}

// froutCutter function is colled by the juiceMaker function //
// froutCutter is called function and juiceMaker is calling function. //
// juiceMaker function's parameter sets as the argument for the froutCutter function. //

function juiceMaker(apple, oranges) {
  const applePieces = froutCutter(apple);
  const orangepieces = froutCutter(oranges);
  const juice = (applePieces + orangepieces) / 2;

  return `${juice} ltr. juice is ready suing ${applePieces} apple piecess and ${orangepieces} orange pieces.`;
}

console.log(juiceMaker(10, 5));

//--------------------------------------------------------------------------------------------------------------------------------------------//
