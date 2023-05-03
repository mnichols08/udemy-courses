# Javascript Foundations
- Engine
Almost everyone that has worked with JS has heard of the V8 Engine. Most people do not realize however that is is a single-threaded. The Engine takes javascript code and converts it to Machine Language that the computer can understand. There are a plethora of ECMAScript engines.
One of the most notable to date is the V8 Engine introduced by Google in 2008. Spider Monkey was the first Javascript engine, which is still used today inside of Mozilla Firefox (which is what Netscape is today)
- Runtime
What goes on internally when our engine is operating at capacity? Anybody can build a Javascript Engine, but what does this task even entail? 
There is a parser to collect the data that is fed to the engine, and then from there is passed through a lexical analysis, which breaks the code into something called an Abstract Syntax Tree. By breaking all of the code down into an AST, which is stored in JSON and there is a useful tool online found at `https://astexplorer.net` that helps visualize this process.

- Interpreter / Compiler / JIT Compiler
After the code is converted into an AST, we provide the code to the interpreter. After the interpreter it passes through a profiler and a compiler.
- Writing Optimized Code

- Call Stack + Memory Heap

- Stack Overflow + Memory Leaks

- Garbage Collection

- Node.js

- Single Threaded Model

We can create a simplified Javscript by writing something like this
const jsEngine = code => code.split(/\s+/)
jsEngine('var a = 5')

There is a list of ECMAScript engines found at [https://en.wikipedia.org/wiki/List_of_ECMAScript_engines](https://en.wikipedia.org/wiki/List_of_ECMAScript_engines)

The V8 Engine is the most popular of them all.

In programming there are generally two ways of converting / translating text into machine language (code that a computer can understand)

The interpreter is a tool that translates and read javascript files line by line

A compiler is faster because it calculates code before it presents it to the user. 

The Javascript engine has what is called a JIT Compiler. Which stands for Just In Time Compiler What this does is it interprets code but it also compiles and optimizes the code constantly

Because of this we have to avoid doing a few things that might slow down the compiling process
Some things we should avoid using are
- eval()
- arguments
- for in
- with
- delete

- hidden classes - because our engine utilizes hidden classes - by adding or changing property values on objects created using the new keyword, we are de-optimizing our code
- inline caching - When we change values on objects we are causing inline caching to have to re load

## Why not just use machine code from the beginning?
Either compilation would have to be lightning fast - or the competing browsers would have to agree on some binary executable format or standard that could understand this format.

## [WebAssembly](https://webassembly.org/getting-started/developers-guide/)

## Call Stack
The Javascript engine does a lot of work for us. The biggest thing is reading our code and executing it. The major components that allow the engine to do this are the call stack and the memory heap. The call stack is a place to keep track of where we are in the code so that the code runs in order.
## Memory Heap
The memory heap is where the memory allocation happens. This is where information is stored. With these two things the javascript engine is able to  read our code and execute it.

## Stack Overflow
When we exceed maximum stack 

## Garbage Collection
Garbage collection is done by the mark and sweep algorighm. 
There are many variables which point to various objects. The gargage collector has a chance of missing things if we change variables

## Memory Leaks
Infinite loops,
Global Variables
Adding Event Listeners Without Removing Them
SetInterval that reference objects

## Memory is Limited

Javascript is a single threaded programming language, it is not doing more than one thing at once.
This is shown by referencing the call stack.
What problems are there with syncronous code? It is really difficult if we have a bunch of long tasks to complete.
The Web API comes with a browser and provide a javascript runtime

## Javascript is syncronous 
JS is single threaded but you can use asyncronous functions.

## 
A js file is kind of like notes on a sheet in music
an engine is like the composer that
A runtime is like the orchestra

Node.js is a runtime - a lot like a web browser and it even relies on the v8 Engine. It also relies on LibUV to write code that our computer can understand which gives us access to all sorts of cool things.

