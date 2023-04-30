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
