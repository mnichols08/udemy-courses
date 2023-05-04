# Intermediate HTML

## [Ordered Lists](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)
`<ol>`: The Ordered List element
The `<ol>` HTML element represents an ordered list of items — typically rendered as a numbered list.
## [Unordered Lists](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)
`<ul>`: The Unordered List element
The `<ul>` HTML element represents an unordered list of items, typically rendered as a bulleted list.
## [List Items](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)
`<li>`: The List Item element
The `<li>` HTML element is used to represent an item in a list. It must be contained in a parent element: an ordered list (`<ol>`), an unordered list (`<ul>`), or a menu (`<menu>`). In menus and unordered lists, list items are usually displayed using bullet points. In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter.

## Nesting and Indentation
We can nest lists inside of lists or really any number of many combinations.
This allows us to really add structure to our documents

## Anchor Elements And Attributes
### [Anchor](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
`<a>`: The Anchor element
The `<a>` HTML element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.

Content within each `<a>` should indicate the link's destination. If the href attribute is present, pressing the enter key while focused on the `<a>` element will activate it.

### [Attribute](https://developer.mozilla.org/en-US/docs/Glossary/Attribute)
An attribute extends an HTML or XML element, changing its behavior or providing metadata.
An attribute always has the form name="value" (the attribute's identifier followed by its associated value).
You may see attributes without the equals sign or a value. That is a shorthand for providing the empty string in HTML, or the attribute's name in XML.

## [Images](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
- The `<img>` HTML element embeds an image into the document.
- The src attribute is required, and contains the path to the image you want to embed.
- The alt attribute holds a text description of the image, which isn't mandatory but is incredibly useful for accessibility — screen readers read this description out to their users so they know what the image means. Alt text is also displayed on the page if the image can't be loaded for some reason: for example, network errors, content blocking, or linkrot.
- A Self Closing Tag - making it a void elemnent

## Birthday Party Invite
Aiming for a retro 90s style website to tell people it's our birthday! We are gonna add in some dates some lists and all sorts os fun stuff!