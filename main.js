// use strict --

// function //(
// function declaration --
// function expression --
// arrow function --
// function calling function --
// )

// array(
// basic array  --
// array literal syntex and array function --
// finding elements in array by index --
// array length  --
// push ,  pop , unshift , shift method --
// finding index by indexOf() --
// finding element by includs() --
// )

// currying function --
// lambda calculus or lambda function expression javascript --)

// objects (
// object literal syntex --
// finnding proparty (dot method , bracket notation method) --
// dynamic sentence --
// "this" kyeword (this) --
// )

// loop (for-Loop / while-loop) {
// basic for loop --
// continue --
// break --
// loop inside a loop --
// star pattarn using for loop --
// basic while loop --
// }

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

// // function //

// // function - A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output.//

//============================================================================================================================================//

// // function declaration

// // function declaration - a function created with a function declaration is a Function object and has all the properties, methods and behavior of Function objects. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// function joinTheClass() {

// // function name - function name should be relaten to the function //

//   console.log("Pc on koro");
//   console.log("Google chrome on koro");
//   console.log("FB te jao");
//   console.log("Meet er link a click koro");
//   console.log("Class a join koro");
// }

// joinTheClass(); // call or run or invoke //

// joinTheClass();

// // we can call the function from wherever we want. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// function addTwoNumbers(num1, num2) {
//   // parameter - function parameter are the names that we put inside the first bracate of the function. //

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

// // multiple function can be colled in a single function. //

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

// // the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus (-1). //

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

// // array index starts from 0. If we console.log any index it will give us the valur of that index. //

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

// const friends = ["lufi", "zoro", "nami", "usapp"];

// if (friends.indexOf("lufi") !== -1) {
//   console.log("He is the captain");
// } else {
//   console.log("Unknown");
// }

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const friends = ["lufi", "zoro", "nami", "usapp"];

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

// const friends = ["lufi", "zoro", "nami", "usapp"];

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

// // lambda calculus or lambda function expression

// // lambda function - the λ-calculus is a formal system for expressing and computing functions with itself reduction rules and syntax. The system is based on expressions (or λ-terms). An expression may correspond to a variable, an abstraction or a function application. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const multiPro = (a) => (b) => (c) => (x) => (y) => a * b * c * x * y;

// // lambda function is similar to curring function. //

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

// // ther are five diffrent types of loops in javascript (while, do…while, for, for…in, for…of). but fot loop and while loop are used in most cases. //

//============================================================================================================================================//

// // basic for loop

// // for loop - a for loop repeats until a specified condition evaluates to false. the loop will continue as long as conditions are true. //

// // for loop requires three things - (1) initializer, (2) condition, (3) iteration. //

// // initializer - initializer declaration evaluated once before the loop begins. Typically used to initialize a counter variable. //
// // condition - a codition to be evaluated before each loop iteration. //
// // iteration - iteration is a counter. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// for (let i = 1; i <= 20; i++) {
//   // "let i = 1" is a initializer. "i" is a variabele name, we can use a differnt name if we want . this means the loop will start from 1. //
//   // "i <= 20" is a condition. this means the loop will continue upto 20. //
//   // "i++" the iteration count. this means the value of "i" wiil increas by one after each loop. //
//   console.log(i);
// }

//--------------------------------------------------------------------------------------------------------------------------------------------//

// for (let a = -100; a <= 10; a++) {
//   console.log(a);
// }

//--------------------------------------------------------------------------------------------------------------------------------------------//

// for (let i = 0; i <= 1000; i += 10) {
//   console.log(i);
// }

//--------------------------------------------------------------------------------------------------------------------------------------------//

// for (let i = 100; i >= 0; i--) {
//   console.log(i);
// }

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // array for loop

// const sabrinaArray = [
//   "Sabrina",
//   "Ratul",
//   "iMac",
//   "iPhan 16",
//   "programmer",
//   2022 - 1996,
//   ["Tanvir", "Mian", "Rina", "Parina"],
//   true,
//   "Dancer",
// ];

// for (let i = 0; i < sabrinaArray.length; i++) {
//   console.log(sabrinaArray[i]);
// }

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // array sum using for loop

// const numbers = [10, 12, 43, 24, 75, 33, 85, 22, 29];

// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// console.log(sum);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // duplicating an array using far loop

// const arr = [12, "a", 16, true, 18, false, "b"];

// console.log(arr);

// const arr2 = [];

// for (let i = 0; i < arr.length; i++) {
//   arr2.push(arr[i]);
// }

// console.log(arr2);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // calculating age using for loop

// const birthYear = [1995, 1999, 2003, 1992, 2000];

// const ages = [];

// for (let i = 0; i < birthYear.length; i++) {
//   ages.push(2022 - birthYear[i]);
// }

// console.log(ages);

//============================================================================================================================================//

// // continue

// // continue - the continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop. //

// // continue method skips specefic element. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const arr = [12, "a", 16, true, 18, false, "b"];

// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "string") continue;

//   // if arr element is string the the continuer method will skip it. //

//   console.log(arr[i], typeof arr[i]);
// }

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const arr = [12, "a", 16, true, 18, false, "b"];

// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "boolean") continue;
//   console.log(arr[i]);
// }

//============================================================================================================================================//

// // break

// // break - if a specified condition occurs, then the berak method will end the loop. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const arr = [12, "a", 16, true, 18, false, "b"];

// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "string") break;

//   // if arr element is string the the break method will end the loop. //

//   console.log(arr[i], typeof arr[i]);
// }

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const arr = [12, "a", 16, true, 18, false, "b"];

// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "boolean") break;
//   console.log(arr[i]);
// }

//============================================================================================================================================//

// // loop inside a loop

// // nested Loop is a loop that is present inside another loop. //

// for (let i = 1; i <= 10; i++) {
//   console.log(`Step -------- ${i}`);
//   for (let j = 1; j <= i; j++) {
//     console.log(`Run -------- ${j}`);
//   }
// }

//============================================================================================================================================//

// // star pattarn using for loop

// // star pattern - star pattern is used to test different programming skills like looping, conditional statements, etc. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // square star pattern

// // the internal loop will run for 'n' number of times which will print starts in a row and a newline at the end of the loop (\n) while the outer loop will run the internal loop for 'n' number of times which will print starts in a columns. //

// let n = 5;
// let star = "";

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     star += "*";
//   }
//   star += "\n";
//   // add "\n" character to add a new line to a string. //
// }
// console.log(star);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // left triangle pattern

// let n = 5;
// let star = "";

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     star += "*";
//   }
//   star += "\n";
// }
// console.log(star);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // down triangle pattern

// let n = 5;
// let star = "";

// for (let i = 1; i <= n; i++) {
//   for (let j = i; j <= n; j++) {
//     star += "*";
//   }
//   star += "\n";
// }
// console.log(star);

//============================================================================================================================================//

// // basic while loop

// // the while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement. //

// // for loop requires three things - (1) initializer, (2) condition, (3) iteration. //

// // initializer - initializer declaration evaluated once before the loop begins. Typically used to initialize a counter variable. initializer  have to be declare before/outside the while loop block. //
// // condition - a codition to be evaluated before each loop iteration. //
// // iteration - iteration is a counter. iteration count goes after console.log(). //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

//--------------------------------------------------------------------------------------------------------------------------------------------//

// let i = 100;
// while (i >= 1) {
//   console.log(i);
//   i--;
// }

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // array for loop

// const sabrinaArray = [
//   "Sabrina",
//   "Ratul",
//   "iMac",
//   "iPhan 16",
//   "programmer",
//   2022 - 1996,
//   ["Tanvir", "Mian", "Rina", "Parina"],
//   true,
//   "Dancer",
// ];

// let i = 0;
// while (i < sabrinaArray.length) {
//   console.log(sabrinaArray[i]);
//   i++;
// }

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // array sum using while loop

// const numbers = [10, 12, 43, 24, 75, 33, 85, 22, 29];

// let sum = 0;
// let i = 0;

// while (i < numbers.length) {
//   sum += numbers[i];
//   i++;
// }

// console.log(sum);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // duplicating an array using while loop

// const arr = [12, "a", 16, true, 18, false, "b"];

// console.log(arr);

// const arr2 = [];
// let i = 0;

// while (i < arr.length) {
//   arr2.push(arr[i]);
//   i++;
// }

// console.log(arr2);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // calculating age using while loop

// const birthYear = [1995, 1999, 2003, 1992, 2000];

// const ages = [];
// let i = 0;

// while (i < birthYear.length) {
//   ages.push(2022 - birthYear[i]);
//   i++;
// }

// console.log(ages);
