# Section 03 - Javascript Foundation II

- Execution Context
- Lexical Environment
- Scope Chain
- Hoisting
- Function Invocation
- Function Scope vs Block Scope
- Dynamic vs Lexical Scope
- this - call, apply, bind
- IIFE

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



