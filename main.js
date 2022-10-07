// use strict // line (9-16)

// function //(
// function declaration // line (26-75)
// function expression // line (93-119)
// arrow function // line (126-186)
// function calling function // line (192-235)
// )

// array(
// basic array // line (254-262)
// array literal syntex and array function. // line (266-273)
// finding elements in array by index. // line (277-295)
// array length // line (299-304)
// push ,  pop , unshift , shift method. // line (308-324)
// finding index by indexOf(). // line (328-350)
// finding element by includs(). // line (354-374)
// )

// currying function. // line (394-415)
// lambda calculus or lambda function expression javascript. // line (419-429)

// objects (
// object literal syntex. // line (469-488)
// finnding proparty (dot method , bracket notation method) // line (493-542)
// dynamic sentence. // line (546-559)
// "this" kyeword (this). // line (562-586)
// )

// loop (for-Loop / while-loop)

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // use strict

"use strict";

// // use strict - You can use strict mode in all your programs. It helps you to write cleaner code, like preventing you from using undeclared variables. //

// const private = 20; // // not posible when using "ues strict" beacouse "private" is kye word //

// console.log(private);

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // function

// // function - A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output.//

//============================================================================================================================================//

// // function declaration

// function joinTheClass() {

// // function name - function name should be relaten to the function //

//   console.log("Pc on koro");
//   console.log("Google chrome on koro");
//   console.log("FB te jao");
//   console.log("Meet er link a click koro");
//   console.log("Class a join koro");
// }

// joinTheClass(); // // call or run or invoke //

// joinTheClass();

// // we can call the function from wherever we want. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// function addTwoNumbers(num1, num2) {
//   // parameter - function parameter are the names that we put inside the second bracate of the function. //

//   const sum = num1 + num2;
//   return sum;

//   // return - return is the value, that a function returns to the calling function when it completes the task. //
// }

// console.log(addTwoNumbers(10, 20));

// // argument - function argument is the value that sent to the function when its being called. //

// // the same function can be called multiple times with diffrent argument. //

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

// // if we (console.log) inside the function block then we don't have to return it. //

// }

// addThreeNumbers(2, 3, 4);

//============================================================================================================================================//

// // function expression

// // function expression - A function expression is very similar to and has almost the same syntax as a function declaration (see function statement for details). The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// console.log(juiceFactory(10, 15)); // // nat posible //

// // a function expration can not not be accessed before declaration. //

// const juiceFactory = function (apple, oranges) {

// // in function expration we can set the function in a variable. //
// // the variable name works as the function name. //

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

// // arrow function

// // arrow function - An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const ageCalculator = (birthYear) => 2022 - birthYear;

// // in arrow function we will have to remove the word (function) and place the arrow symbol (=>) between parameter and process. //
// // if the function has complited in just one line, then we don't have to return it. //

// console.log(ageCalculator(2003));

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const pizzaMaker = (bread, peanut, mayoneese) => {
//   const pizza = bread + peanut / mayoneese;
//   return `${pizza} pizzais ready for everyone`;
// };

// // when using second brackets, you have to return the statement. //

// console.log(pizzaMaker(1, 2, 3));

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const pizzaMaker = (bread, peanut, mayoneese) => bread + peanut / mayoneese;

// console.log(pizzaMaker(1, 2, 3));

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const heroMaker = (age, skill) => {
//   if (age > 10 && skill) {
//     // and (&&) means, both statments needs to be true //
//     // or (||) means, only a single statments needs to be true. //
//     return "You can be a super hero";
//   } else {
//     return "You are a child";
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

// // function calling function

// // function calling function - The Function which calls another Function is called Calling Function and function which is called by another Function is call Called Function. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// function froutCutter(fruit) {
//   return fruit * 4;
// }

// // froutCutter function is colled by the juiceMaker function //
// // froutCutter is called function and juiceMaker is calling function. //
// // juiceMaker function's parameter sets as the argument for the froutCutter function. //

// function juiceMaker(apple, oranges) {
//   const applePieces = froutCutter(apple);
//   const orangepieces = froutCutter(oranges);
//   const juice = (applePieces + orangepieces) / 2;

//   return `${juice} ltr. juice is ready suing ${applePieces} apple piecess and ${orangepieces} orange pieces.`;
// }

// console.log(juiceMaker(10, 5));

//--------------------------------------------------------------------------------------------------------------------------------------------//

// function technicalTest(ramFeq, cpuCLock) {
//   const ramState = ramFeqTest(ramFeq);
//   const cpuState = cpuTurbo(cpuCLock);

//   return `${ramState} and ${cpuState}`;
// }

// // multiple function can be colled in a function. //

// console.log(technicalTest(2400, 3.6));

// function ramFeqTest(ram) {
//   return ram >= 2660 ? `DDR4` : `DDR3`;
// }

// function cpuTurbo(cpu) {
//   return cpu >= 3.1 ? `1800rpm` : `1400rpm`;
// }

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // array

// // array - array is a single variable that is used to store different elements. It is often used when we want to store list of elements and access them by a single variable. //

//============================================================================================================================================//

// // basic array

// const friends = ["shohan", "badhon", "eklas", "nasim"]; // // literal syntax. //
// console.log(friends);

// // third bracate is used for declaraing an array. //

// // coma (,) is used to separate two elements. //

// // the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1. //

// // array length - array length is the unmber of elements. //

//============================================================================================================================================//

// // array literal syntex and array function.

// const years = [1990, 2000, 2010, 2020]; // literal syntax. //

// const years2 = new Array(1990, 2000, 2010, 2020); // array function. //
// console.log(years2);

// // array function is declared by (new array). //
// // // use first bracate to declare array function. //

//============================================================================================================================================//

// // finding elements in array by index.

// const years3 = [1990, 2000, 2010, 2020];
// console.log(years3[0]);
// console.log(years3[3]);
// console.log(years3[2]);
// console.log(years3[4]); // undefiend //

// // array index starts from 0. If we console.log any index it will show us the valur of that index. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const years3 = [1990, 2000, 2010, 2020];
// const ageCalk = function (birthYear) {
//   return 2022 - birthYear;
// };

// const age = ageCalk(years3[0]);
// const age2 = ageCalk(years3[3]);
// console.log(ageCalk(years3[2]));
// console.log(age);
// console.log(age2);

//============================================================================================================================================//

// // array length

// // array length - length property returnd the number of elements in an array. //

// const numbers = [2, 4, 6, 8];
// console.log(numbers.length);
// console.log(numbers.length - 1);

// // length-1 retuens the last element's index. //

// console.log(numbers[numbers.length - 1]);

// // array name (number).length-1 will return the last element. length-2 will retyrn the secind last element. //

//============================================================================================================================================//

// // push ,  pop , unshift , shift method

// // push - push mathod adds a new element to the end of an array. //
// // pop - pop mathod removes an element to the end of an array. //
// // unshift - unshift mathod adds a new element to the start of an array. //
// // shift - shift mathod removes an element to the start of an array. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const friends = ["lufi", "zoro", "nami", "usapp"];

// friends.push("sangi");
// friends.pop();
// friends.unshift("sangi");
// friends.shift();

// console.log(friends);
// console.log(friends.length);
// console.log(friends[1]);

//============================================================================================================================================//

// // finding index by indexOf()

// // finding index - To find the position of an element in an array, you use the indexOf() method. This method returns the index of the first occurrence the element that you want to find, or -1 if the element is not found. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const friends = ["lufi", "zoro", "nami", "usapp"];

// console.log(friends.indexOf("usapp"));
// console.log(friends.indexOf("lufi"));

// // if the element dosn't exist, it will return -1 //
// console.log(friends.indexOf("robin"));

//--------------------------------------------------------------------------------------------------------------------------------------------//

// if (friends.indexOf("lufi") !== -1) {
//   console.log("He is the captain");
// } else {
//   console.log("Unknown");
// }

//--------------------------------------------------------------------------------------------------------------------------------------------//

// if (friends.indexOf("robin") !== -1) {
//   console.log("He is the captain");
// } else {
//   console.log("Unknown");
// }

//============================================================================================================================================//

// // finding element by includs()

// // finding element - the includes() method returns true if an array contains a specified value or returns false if the value is not found. //

// const friends = ["lufi", "zoro", "nami", "usapp"];

// console.log(friends.includes("lufi"));
// console.log(friends.includes("robin"));

//--------------------------------------------------------------------------------------------------------------------------------------------//

// if (friends.includes("lufi")) {
//   console.log("He is the captain");
// } else {
//   console.log("Unknown");
// }

//--------------------------------------------------------------------------------------------------------------------------------------------//

// if (friends.includes("robin")) {
//   console.log("He is the captain");
// } else {
//   console.log("Unknown");
// }

//============================================================================================================================================//

// // reassign or muted array

// // muted array - we can reassing a element to an existing element or add a new element. //

// const evenNumbers = [2, 4, 6, 8, 10, 12];
// evenNumbers[evenNumbers.length] = 14;
// evenNumbers[3] = 18;
// console.log(evenNumbers);

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // currying function

// // currying function - It is a technique in functional programming, transformation of the function of multiple arguments into several functions of a single argument in sequence. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// function multi(a) {
//   return function (b) {
//     return function (c) {
//       return function (x) {
//         return function (y) {
//           return a * b * c * x * y;
//         };
//       };
//     };
//   };
// }

// // a function without a name is called anonymous function. //

// console.log(multi(2)(4)(6)(8)(10));

//============================================================================================================================================//

// // lambda calculus or lambda function expression javascript

// // lambda function - the λ-calculus is a formal system for expressing and computing functions with itself reduction rules and syntax. The system is based on expressions (or λ-terms). An expression may correspond to a variable, an abstraction or a function application. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const multiPro = (a) => (b) => (c) => (x) => (y) => a * b * c * x * y;

// // lambda function is almost similar to curring function. //

// console.log(multiPro(2)(4)(6)(8)(10));

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // objects

// // object - In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics. object is non-primitive data type. //

// // primitive and non-primitive data type - primitive data types are number, string, boolean, NULL, Infinity and symbol. Non-primitive data types is the object. The JavaScript arrays and functions are also objects. //

//============================================================================================================================================//

// // object literal syntex.

// const student = {
//   // use second bracket to declare an object. //

//   firstName: "Arafat",

//   // object has property and value. //
//   // in this case firstName is the property and Arafat is the value. //

//   lastName: "Rahman",
//   age: 1996 - 2022,
//   fob: "Programmer",
//   friends: ["Rohim", "Korim", "Jamal", "Kamal"],
//   isGoodAtGames: true,

//   // we can include all types of data is a object. //
// };

// console.log(student);

//============================================================================================================================================//

// // finnding proparty (dot method , bracket notation method)

// // ther are two methods to find proparty (dot method , bracket notation method)

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // dot methods

// // dot methods - a property is accessed by giving the host object's name, followed by a period (or dot), followed by the property name. //

// const student = {
//   firstName: "Arafat",
//   lastName: "Rahman",
//   age: 2022 - 1996,
//   job: "Programmer",
//   friends: ["Rohim", "Korim", "Jamal", "Kamal"],
//   isGoodAtGames: true,
// };

// console.log(student.firstName);
// console.log(student.lastName);
// console.log(student.age);
// console.log(student.job);
// console.log(student.friends);
// console.log(student.friends[2]);
// // we can also console.log individual element of an array //
// console.log(student.isGoodAtGames);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // bracket notation method

// // bracket notation is another way to access a property of an object. To use bracket notation, write the name of the object, followed by brackets []. //

// const student = {
//   firstName: "Arafat",
//   lastName: "Rahman",
//   age: 2022 - 1996,
//   job: "Programmer",
//   friends: ["Rohim", "Korim", "Jamal", "Kamal"],
//   isGoodAtGames: true,
// };

// // the property name needs to written in cotation. //

// console.log(student["firstName"]);

// // we cam write the proparty name dynamically. //

// console.log(student["last" + "Name"]);
// console.log(student["is" + "Good" + "At" + "Games"]);

//============================================================================================================================================//

// // dynamic sentence.

// const student = {
//   firstName: "Arafat",
//   lastName: "Rahman",
//   age: 2022 - 1996,
//   job: "Programmer",
//   friends: ["Rohim", "Korim", "Jamal", "Kamal"],
//   isGoodAtGames: true,
// };

// console.log(
//   `${student.firstName} ${student.lastName} is a ${student.job}, He is ${student.age} years old. He has ${student.friends.length} friends. ${student.friends[1]} is his best friend.`
// );

//============================================================================================================================================//

// // "this" kyeword (this)

// // this - In JavaScript, the 'this' keyword refers to an object. Which object depends on how 'this' is being invoked (used or called).The 'this' keyword refers to different objects depending on how it is used. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const student = {
//   firstName: "Arafat",
//   lastName: "Rahman",
//   birthYear: 1996,

//   // we can't use a property as a parameater //

//   calcAge: function () {
//     return 2022 - this.birthYear;
//     // 'this' gets the value from the property. //
//   },

//   fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(student.calcAge());
// console.log(student.fullName());

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // loop (for-Loop / while-loop)

// // loops - loops are handy, if you want to run the same code over and over again, each time with a different value. //

// ther are five diffrent types of loops in javascript.
