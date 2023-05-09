# The Two Pillars

## Static vs Dynamically Typed

* Static types are

* Numbers

* Booleans

* Strings

* undefined // absense of a definition

* null // absense of value

* Symbol('just me') // New with ES6 allows to create some unique properties for objects

* Object

* In Javascript we can use the `typeof` to determine the type of something. If we check what an array is, it is actually an object. As well as `null` but there is an actual error within JS that. Even a function is an object even though that typeof disagrees with us.

## Primintive Types

There are primitive and non-primitive. Primitive types are data that only represent a single value.

* A non-primitive type does not contain the value directly.
* Javascript has some standard built in objects that we should be aware of. [Standard Built In Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
* Both functions and arrays are Objects

They say that everything is an object in Javascript because behind the scenes everything gets wrapped in an Object, which provides them with some methods like `.toString()` for example.
Now in JS we have access to `Array.isArray()` which lets us check if something is an array.

## Pass By Reference vs. Pass By Value

Primitive values are immutable
This is what we call pass by value - we copy value and create that value somewhere else in memory
vs
Non-primitive values like objects are pass by reference - we point to the object wherever it is within memory - and it might have any number of pointers within

* because of this we must be careful not to overwrite properties values accidentally
  We can clone objects using the `Object.assign({}, obj)` or spread operator `{...obj}`
* These create shallow clones so if there are objects within these objects then they will no longer be dynamic so you can only clone the first layer
  or we can do something like this:

### Deep Clones

```
var c = [1,2,3];
var d = c;
d.push( 4 );

console.log(c);   // [1,2,3,4]
console.log(d);   // [1,2,3,4]

var a = 5;
var b = a;

b++;

let obj = {
  a: 'a',
  b: 'b',
  c: {
    deep: 'try and copy me'
  }
};
let clone = Object.assign({}, obj);
let clone2 = {...obj}
let superClone = JSON.parse(JSON.stringify(obj))

obj.c.deep = 'hahaha';
console.log(obj)
console.log(clone)
console.log(clone2)
console.log(superClone)
```

Doing deep clones can have performance implications if the object is large so it is rather uncommmon

### Exercise: Compare Objects

* How would you compare two objects if they are pointing to a different location in memory but still have the same properties?

```
var user1 = {name : "nerd", org: "dev"};
var user2 = {name : "nerd", org: "dev"};
var eq = JSON.stringify(user1) == JSON.stringify(user2);
alert(eq); // gives false

```

### Exercise: Pass By Reference

```
const number = 100
const string = "Jay"
let obj1 = {
  value: "a"
}
let obj2 = {
  value: "b"
}
let obj3 = obj2;
 
function change(number, string, obj1, obj2) {
    number = number * 10;
    string = "Pete";
    obj1 = obj2;
    obj2.value = "c";
}
 
change(number, string, obj1, obj2);
 
//Guess the outputs here before you run the code: 
console.log(number); // 100
console.log(string); // Jay
console.log(obj1.value); // a
```

## Type Coercion

## Arrays, Functions, Objects
