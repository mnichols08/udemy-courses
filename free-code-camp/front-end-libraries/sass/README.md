# SASS

Sass, or "Syntactically Awesome StyleSheets", is a language extension of CSS. It adds features that aren't available in basic CSS, which make it easier for you to simplify and maintain the style sheets for your projects.

In this Sass course, you'll learn how to store data in variables, nest CSS, create reusable styles with mixins, add logic and loops to your styles, and more.

## Store Data with Sass Variables
One feature of Sass that's different than CSS is it uses variables. They are declared and set to store data, similar to JavaScript.

In JavaScript, variables are defined using the let and const keywords. In Sass, variables start with a $ followed by the variable name.

Here are a couple examples:

```$main-fonts: Arial, sans-serif;
$headings-color: green;```
And to use the variables:

```h1 {
  font-family: $main-fonts;
  color: $headings-color;
}```
One example where variables are useful is when a number of elements need to be the same color. If that color is changed, the only place to edit the code is the variable value.

- [x] Create a variable $text-color and set it to red. Then change the value of the color property for the .blog-post and h2 to the $text-color variable.