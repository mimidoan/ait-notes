/*

VALUES, TYPES, & OPERATORS
  - NaN is the only number not equal to itself
    > use isNan() to check for not a num
  - undefined means no value
    > implicit
    > uninitialized
  - null is explicit, variable is set to null
  - typeof returns a string
  - no char type in js

  - "5" + 5 --> defaults to string concatenation
  - js will do tits best to convert types so that they can be checked for equality
  - NEVER US ==

UNARY CONVERSIONS
  - +"5" --> number
  - !!"5" --> boolean
  - 5 + "" --> string


VARIABLES
  - if you don't use a declaration (const, let, var) then a global variable is created, if there is already
    a global variable with that name then it is overridden


  TEMPORAL DEAD ZONE
    - you must declare a variable before you use it (duh)
      > var doesn't have a temporal dead zone, once var is declared then it is accessible within entire scope of function

  CONST & LET
    - const doesn't make the obj immutable, it just prevents reassignment
    EX: const obj1 = {}
        obj1.x = 5      ~VALID - new propety is being defined w/i obj~

*/


/* how to declare functions */

wayOne(2,5);
function wayOne(arg1, arg2) {
  return arg1 + arg2
};

// function expression - expression that yields or evaluates to a function
const f = function(arg1, arg2) {
  return arg1 + arg2
};

function functionMaker(arg1, arg2) {
  const newFunction = function(arg1, arg2) {
        return arg1 + arg2
  }

  /*
  return newFunction = function(arg1, arg2) {
        return arg1 + arg2
  }
  */

  return newFunction;
};

// fat arrow functions --> shorthand for function expressions
(arg1, arg2) => { /* body goes here*/}
  // if just one arg
  x => 2*x // one line function



/* nested functions
    - outer available to inner, but inner not available to outer
*/

// using functions as VALUES

function callTwice(f) {
  f();
  f();
}

funnction sayHello() {
  console.log("hello");
}

callTwice(sayHello);

//

function makeAdder(n) {
  return function(x) {
    return n + x;
  };
}

// even after makeAdder executes n is still available to the inner function
// called CLOSURE - function and the variables availabe when it was created
const addTwo = makeAdder(2);
const addTwo = makeAdder(5);
console.log(addTwo(10));
console.log(addFive(10));



// function declarationsa are hoisted - can be used b/f declared
// var decarations are hoisted, but their initalizations are not


/* objects */

// obj literal
let course = {
  name: "AIT", // white space doesn't matter!
  num: 480
}

// properties can be any value - even other objs & functions
// exceptions are null & undefined

const x = 10
const y = 20

// x & y become properties of obj2
cont obj2 = {x, y}

obj2.x
obj2['x'] // do the same thing

obj[x] // will look for the 10th value

// when you use . the prop name can only be a valid variable
//obj.2 not a thing

// property names can be anything you want but if it doesn't adhere to standards you must use square brackets []

// you have to use brackets when the property value is dynamic
const answer = 'foo' // imagine this is user input
console.log(obj[answer])



// new thing

const obj = {name: 'mimi'}

obj.shout = function() {
  console.log(this.name.toUpperCase() + "!")
}

obj.shout()

// for in loop
let course = {
  name: "ait",
  num: 480
}

for (const prop in course) {
  console.log(prop, course[prop])
}

//
course.hasProperty('name') // tells whether obj has property
course.instructor
course.hasProperty('instructor') // will return true even though obj is undefined

// prototype

const course2 = Object.create(course)

course2.name // will return ait, you will get all inherited properties


// objects are mutable

//pointers to the same obj in memory will all be changed
const a = {
  'foo': 1,
  'bar':2
}

const b = a;
b['baz'] = 3
b.qux = 4
console.log(a) // since a & b are pointing to the same obj, both are changed when one is


// shallow copy - copying the references; deep copy - copy the VALUES

// in will look up prototype chain while hasProperty will only look at prototype

// js will wrap primatives in obj and discard after - cannot be accessed later


/*
 Node - all I/O is asynchronous + non-blocking
  - input/output
  - Non-blocking
    > does not wait for request to finish b/f it executes next line

*/
