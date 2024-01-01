# Bootstrap

Bootstrap is a front end framework used to design responsive web pages and applications. It takes a mobile-first approach to web development, and includes pre-built CSS styles and classes, plus some JavaScript functionality.

In this course, you'll learn how to build responsive websites with Bootstrap, and use its included classes to style buttons, images, forms, navigation, and other common elements.

## Use Responsive Design with Bootstrap Fluid Containers
In the HTML5 and CSS section of freeCodeCamp we built a Cat Photo App. Now let's go back to it. This time, we'll style it using the popular Bootstrap responsive CSS framework.

Bootstrap will figure out how wide your screen is and respond by resizing your HTML elements - hence the name responsive design.

With responsive design, there is no need to design a mobile version of your website. It will look good on devices with screens of any width.

You can add Bootstrap to any app by adding the following code to the top of your HTML:

`<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>`

In this case, we've already added it for you to this page behind the scenes. Note that using either > or /> to close the link tag is acceptable.

- [x] To get started, we should nest all of our HTML (except the link tag and the style element) in a div element with the class container-fluid.

- Make Images Mobile Responsive
First, add a new image below the existing one. Set its src attribute to https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg.

It would be great if this image could be exactly the width of our phone's screen.

Fortunately, with Bootstrap, all we need to do is add the img-responsive class to your image. Do this, and the image should perfectly fit the width of your page.

## Center Text with Bootstrap
- [x] Now that we're using Bootstrap, we can center our heading element to make it look better. All we need to do is add the class text-center to our h2 element.

Remember that you can add several classes to the same element by separating each of them with a space, like this:

`<h2 class="red-text text-center">your text</h2>`

## Create a Bootstrap Button
Bootstrap has its own styles for button elements, which look much better than the plain HTML ones.

- [x] Create a new button element below your large kitten photo. Give it the btn and btn-default classes, as well as the text of Like.

## Create a Block Element Bootstrap Button
Normally, your button elements with the btn and btn-default classes are only as wide as the text that they contain. For example:

`<button class="btn btn-default">Submit</button>`
This button would only be as wide as the word Submit.

By making them block elements with the additional class of btn-block, your button will stretch to fill your page's entire horizontal space and any elements following it will flow onto a "new line" below the block.

`<button class="btn btn-default btn-block">Submit</button>`
This button would take up 100% of the available width.

Note that these buttons still need the btn class.

- [x] Add Bootstrap's btn-block class to your Bootstrap button.

## Taste the Bootstrap Button Color Rainbow
The btn-primary class is the main color you'll use in your app. It is useful for highlighting actions you want your user to take.

- [x] Replace Bootstrap's btn-default class with btn-primary in your button.

Note that this button will still need the btn and btn-block classes.

## Call out Optional Actions with btn-info
Bootstrap comes with several pre-defined colors for buttons. The btn-info class is used to call attention to optional actions that the user can take.

- [x] Create a new block-level Bootstrap button below your Like button with the text Info, and add Bootstrap's btn-info class to it.

Note that these buttons still need the btn and btn-block classes.

## Warn Your Users of a Dangerous Action with btn-danger
Bootstrap comes with several pre-defined colors for buttons. The btn-danger class is the button color you'll use to notify users that the button performs a destructive action, such as deleting a cat photo.

- [x] Create a button with the text Delete and give it the class btn-danger.

Note that these buttons still need the btn and btn-block classes.

## Use the Bootstrap Grid to Put Elements Side By Side
Bootstrap uses a responsive 12-column grid system, which makes it easy to put elements into rows and specify each element's relative width. Most of Bootstrap's classes can be applied to a div element.

Bootstrap has different column width attributes that it uses depending on how wide the user's screen is. For example, phones have narrow screens, and laptops have wider screens.

Take for example Bootstrap's col-md-* class. Here, md means medium, and * is a number specifying how many columns wide the element should be. In this case, the column width of an element on a medium-sized screen, such as a laptop, is being specified.

In the Cat Photo App that we're building, we'll use col-xs-*, where xs means extra small (like an extra-small mobile phone screen), and * is the number of columns specifying how many columns wide the element should be.

- [ ] Put the Like, Info and Delete buttons side-by-side by nesting all three of them within one `<div class="row">` element, then each of them within a `<div class="col-xs-4">` element.

The row class is applied to a div, and the buttons themselves can be nested within it.