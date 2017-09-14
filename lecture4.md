# Lecture 4 - Node/NPM

## NPM

```javascript
// will first look in local node_modules folder
// then up one folder
// until it reaches root
// searches 'global' path /usr/local/lib/node_modules
// final search in binary (node binary)

/* why do we have local node_modules:
    - there could be dependency issues for different versions

  things that might be installed globally:
    - chai/mocha for running test
    - linter
*/

const http = require("http");
const rls = require("readline-sync");

```

### package.json
_npm init will generate package.json_
devDependencies - things that you need to develop your application, but the application itself doesn't need
..* --save-dev

_npm install will install all the dependencies listed on package.json_


### npm commands

* npm install - will look at package.json and install all the dependencies there (default local unless -g is added)
..* with an argument npm install express --> will install only express
..* if package.json doesn't exist yet then utilize npm init and it will include already downloaded modules in dependencies
* npm init will generate package.json

###Linter_
can be run as a commandline tool
eslint nameOfFile

static analysis tool, looks at your code for suspicious things that might create a bug


### modules
modules are just files/directories

```javascript

const creatures = require('./creatures.js');

const c = creates.createList();
console.log(c);

```

exports are the values returned by require
* built into node so you can just add properties to it or you can use modules.exports

```javascript

// this doesn't work rn

module.export = createList() {

  return ['dog', 'unicorns', 'muffins'];
}
```


## Stings and Arrays

Strings are primitives so they're immutable

### Arrays

functions like an array list - can be resized and can index things into it

```javascript

const arr = [];

const arr2 = new Array(5); // empty array with 5 array holes

const arr3 = new Array("5"); // single element with string 5, will do for any non-numeric types

const arr4 = new array(5,6,7) // will have 3 array elements: 5,6,7


/// copy an array
const copy = arr4.slice()

// explodes array then puts elements into another array, array holes will be undefined
const copy2 = [...arr4]

// ...  spread operator is a shallow copy

// concatenates these arrays
const copy3 = [...arr4, ...arr3];


```

```javascript
// looping over Arrays

const words = ['foo','bar', 'baz'];

for (let i = 0; i < words.length; i++) {
  console.log(words[i]);
}

// better

function logWord(w){
  console.log(w);
}
words.forEach(logWord);

// forEAch expects one arg, should be a function that could have 1/2/or3 arguments
// it will invoke the call fucntion with array element, index of that element, and the array itself

```

#### reversi

array board - multiply then add

load with configuration file to save time
 -
