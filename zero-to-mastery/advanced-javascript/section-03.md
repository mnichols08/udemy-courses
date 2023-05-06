# Section 03 - Javascript Foundation II

* Execution Context
* Lexical Environment
* Scope Chain
* Hoisting
* Function Invocation
* Function Scope vs Block Scope
* Dynamic vs Lexical Scope
* this - call, apply, bind
* IIFE

## Execution Context

How do we run code in JavaScript?
Well we assign variables and we run functions, right?
Each time we run a function, we use open and close parenthisis to tell the engine we want to run a function.
When the engine comes across these, they add the function to the call stack. This is called execution context.

Initially the javascript creates what is called the global execution context. Any time we run code in Javascript it will always be a part of an execution context - whether it is global or inside of a function.
Global Exection Context gives us the `global` object as well as the `this` keyword, which are initially equal to eachother.
After this initial creation phaise is over, we enter the execution phase - where our code is actually ran.
When code is run on the JS engine, a global execution context is created and when we run a function a new execution context is created.

## Lexical Environment

Lexical environments are simply where we write something - it means our code breaks our code up into sections that derive their access to variables. Every function will have access to the global execution context but maybe not other execution contexts. When we create a function, we a brand new environment for our code to work within. In javascript our lexical scope (available data and variables where the function was defined) determines our available variables. Not where the function is called (dynamic scope).

## Hoisting

The behavior of moving the variables and function declarations to the top of their respective environments during compilation phase.

## Functions

* A function expression looks like this

```
var canada = () => {
  console.log('cold');
}
canada()
```

* And function declaration looks like this

```
india()
function india() {
  console.log('warm)
}
```

## Arguments

arguments is an array-like object accessible inside functions that contains the values of the arguments passed to that function.
We can use Array.from(arguments) to make arguments more useable with modern javascript

## Variable Environment

```
//Variable Environement
function two() {
  var isValid; // 5. isValid is undefined in this execution context.
}

function one() {
  var isValid = true; // 3. this variable will be put into the new execution context. It's own variable environment
  two(); // 4. New execution context created.
}

var isValid = false; // 1. Global variable is created as undefined. Then during execution, it changes in memory to false.
one() // 2. New execution context is created on top of the stack.

```

* A variable is a named reference to a value. That way an unpredictable value can be accessed through a predetermined name.

## Scope Chain

### Scope

The scope is the current context of execution in which values and expressions are "visible" or can be referenced. If a variable or expression is not in the current scope, it will not be available for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

### JavaScript has the following kinds of scopes:

* Global scope: The default scope for all code running in script mode.
* Module scope: The scope for code running in module mode.
* Function scope: The scope created with a function.
* In addition, variables declared with let or const can belong to an additional scope

## JS is Weird

```
const function = () => {
  height = 50;
  return height;
}
```

JS will automatically add var height to this but it may not be ideal - we can use `use-strict` to prevent this from happening
