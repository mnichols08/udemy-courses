# The Two Pillars

* Static types are

* Numbers

* Booleans

* Strings

* undefined // absense of a definition

* null // absense of value

* Symbol('just me') // New with ES6 allows to create some unique properties for objects

* Object

* In Javascript we can use the `typeof` to determine the type of something. If we check what an array is, it is actually an object. As well as `null` but there is an actual error within JS that. Even a function is an object even though that typeof disagrees with us.

There are primitive and non-primitive. Primitive types are data that only represent a single value.

* A non-primitive type does not contain the value directly.
* Javascript has some standard built in objects that we should be aware of. [Standard Built In Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
* Both functions and arrays are Objects

They say that everything is an object in Javascript because behind the scenes everything gets wrapped in an Object, which provides them with some methods like `.toString()` for example.
Now in JS we have access to `Array.isArray()` which lets us check if something is an array.

Primitive values are immutable
This is what we call pass by value - we copy value and create that value somewhere else in memory
vs
Non-primitive values like objects are pass by reference - we point to the object wherever it is within memory - and it might have any number of pointers within

## Static vs Dynamically Typed

## Primintive Types

## Pass By Reference vs. Pass By Value

## Type Coercion

## Arrays, Functions, Objects
