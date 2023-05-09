# Introduction to CSS

* Stands for 'Cascading Style Sheets'
* Act sort of like a waterfall
* A stylesheet is a collection of code which

## Why do we need CSS?

Without styles, we only have styles - and developers would be forced to style everything inline within HTML.

* There are three ways of adding CSS to a web page

1. Inline

* Goes into the same line as an html tag for example `<div style="background:blue"></div>`
* Really not recommended - take highest prescedence in the CSS logic

2. Internal

* When we just type `<style></style>` and write our CSS within those tags and place the tags somewhere in our document above the html it effects, usually in the head but often directly above if rendered via JS

3. External

* A best practice, when we import CSS directly from another file

## CSS Selectors

```
=>p<= {}
```

### Class Selector

* Using the `.` as a prefix declares a class to apply styles to

### ID Selector

* Using the `#` as a previx declares an ID to apply styles to

* IDs are unique -- classes are broad and can be used as often as necessary

### Attribute Selector

* Use bracket notation to select elements with particular attribute or value like so `p[draggable]{color:red}`

### Universal Selector

* Just an Asterisk `*` - means select all
