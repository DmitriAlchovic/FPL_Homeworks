// 1. write custom realization of method bind in javascript:
function bind(fn, context, ...args) {
  return function (...innerArgs) {
    return fn.apply(context, args.concat(innerArgs));
  };
}

function foo() {
  console.log(this.name);
}

const context = { name: 'Custom Context' };
const data = ['arg1', 'arg2'];

const boundFunction = bind(foo, context, ...data);

boundFunction();

// 2.create an object with a magic property, and when any value is assigned
//to that property, current date will be output and value should be stored
//in the additional property counter. But if we read that property from the
//object, additional property counter will be incremented and output, ex.:

const magicObject = {
  _counter: 0,
  _magicProperty: null,

  get magicProperty() {
    return ++this._counter;
  },

  set magicProperty(value) {
    console.log(`Current Date: ${new Date().toLocaleString()}`);
    this._counter = value;
  },
};

// Assigning a value to the magic property
magicObject.magicProperty = 5;

// Reading the magic property
console.log(magicObject.magicProperty);
console.log(magicObject.magicProperty);
console.log(magicObject.magicProperty);

// 3. create a function-calculator which accepts two numbers and sign for cal-
//culation, but the signatuir of the function should looks like that:

function calc(a, b) {
  return function (sign) {
    switch (sign) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return b !== 0 ? a / b : 'Cannot divide by zero';
      default:
        return 'Invalid operation';
    }
  };
}

console.log(calc(1, 2)('+')); // Output: 3
console.log(calc(1, 2)('/')); // Output: 0.5
console.log(calc(10, 0)('/')); // Output: Cannot divide by zero
console.log(calc(5, 3)('%')); // Output: Invalid operation

// 4. Create a function curry, which accepts any function with mathematical
//logic and the exact amout of arguments for further calls as it was declared
//in that function, ex.:

function curry(func) {
  const numArgs = func.length; // Get the number of expected arguments of the function

  function curried(...args) {
    if (args.length >= numArgs) {
      return func(...args);
    } else {
      return (...nextArgs) => curried(...args, ...nextArgs);
    }
  }

  return curried;
}

// Define functions with specific numbers of arguments
function sum2(x, y) {
  return x + y;
}

function sum4(a, b, c, d) {
  return a + b + c + d;
}

// Usage examples
console.log(curry(sum2)(1)(2)); // Output: 3
console.log(curry(sum4)(2)(3)(4)(5)); // Output: 14

// 5. create a function, which can not be used as a constructor (can not be
//called with operator new)

function nonConstructor() {
  if (new.target !== undefined) {
    throw new Error('Cannot be called with new operator');
  }

  console.log('This is a non-constructor function.');
}

try {
  const obj = new nonConstructor();
} catch (error) {
  console.error(error.message); // Output: Cannot be called with new operator
}

nonConstructor(); // Output: This is a non-constructor function.

// 6. create a function sleep(seconds):

const sleep = (sec) =>{
    const seconds = sec * 1000
    const start = Date.now();
    while (Date.now() < start + seconds) {}
}

console.log(new Date()); // Sun Oct 08 2017 10:44:34 GMT+0300 (+03)
//sleep(5);
console.log(new Date()); // Sun Oct 08 2017 10:44:43 GMT+0300 (+03)

// 7. Create a function getCounter
function getCounter(initialValue) {
    let count = initialValue;

    return {
        log: function() {
            console.log(count);
            return this;
        },
        add: function(value) {
            count += value;
            return this;
        },
        reset: function() {
            count = 0;
            return this;
        }
    };
}

// Usage example
var c = getCounter(5);
c
    .log() // Output: 5
    .add(4)
    .log() // Output: 9
    .add(3)
    .log() // Output: 12
    .reset()
    .log() // Output: 0
    .add(8)
    .log(); // Output: 8

