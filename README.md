<img src="icon.png" align="right" />
<img src="chrome.png" align="left"/>
# README [![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome#readme)

## Resources:books:
Read or watch:
* [Chrome DevTools | Tools for Web Developers | Google Developers](https://developer.chrome.com/docs/devtools/)
* [Introduction | Down and Dirty with Chrome Developer Tools](https://blittle.github.io/chrome-dev-tools/)
* [Firefox Developer Tools | MDN](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
* [Dev Tips - Developer Tips by Umar Hansa](https://umaar.com/dev-tips/)
* [Get Started With Viewing And Changing CSS | Tools for Web Developers](https://developer.chrome.com/docs/devtools/)
* [Keeping it simple with the JavaScript console - LogRocket Blog](https://blog.logrocket.com/keeping-it-simple-with-the-javascript-console/)
* [Inspect Network Activity - Chrome DevTools 101](https://www.youtube.com/watch?v=e1gAyQuIFQo&ab_channel=GoogleChromeDevelopers)
---

## Learning Objectives:bulb:
What you should learn from this project:

- What is CSS
- How to add style to an element
- What is a class
- What is a selector
- How to compute CSS Specificity Value
- What are Box properties in CSS
- How does the browser load a webpage
---

## Requirements
### General
- All your files should end with a new line
- A README.md file, at the root of the folder of the project is mandatory
- You are not allowed to install, import or use external libraries. This website must be build with only HTML/CSS/JavaScript. No NodeJS, React, - VueJS, Bootstrap, etc.
- Your code should be W3C compliant and validate with [W3C-Validator](https://github.com/hs-hq/W3C-Validator)
---
<img src="images/infografia.png" align="center" />

## 1. What is CSS?
CSS stands for Cascading Style Sheets. It is a stylesheet language used for describing the presentation of a document written in HTML or XML. CSS defines how elements in a web page should be displayed, including their layout, colors, fonts, and other visual aspects.

## 2. How to add style to an element?
### You can add style to an element using CSS in three ways:

- Inline styles: Apply styles directly to an HTML element using the style attribute.
- Internal stylesheets: Include a <style> element within the <head> section of your HTML document.
- External stylesheets: Create a separate CSS file and link it to your HTML document using the <link> element.

## 3. What is a class?
In CSS, a class is a way to define a group of elements that share a common set of styles. It allows you to apply the same style to multiple elements without repeating the style definitions. You can add a class to an HTML element by including the class attribute and giving it a name.

## 4. What is a selector?
A selector in CSS is used to target and select specific HTML elements to apply styles to. Selectors can be based on element names, class names, IDs, attributes, or other criteria. They define the scope of the styles you want to apply. For example, the selector p targets all <p> elements, while .highlight targets all elements with the class "highlight".

## 5. How to compute CSS Specificity Value?
CSS specificity is a value assigned to CSS selectors that determines which styles are applied to an element when multiple conflicting styles exist. Specificity is calculated based on the selector's components. The general rule is that the more specific a selector is, the higher its specificity value. Specificity is represented by a four-part value: a, b, c, d.

## 6. To calculate the specificity value:

Count the number of ID selectors (#) in the selector and assign it to a.
Count the number of class selectors, attribute selectors, and pseudo-classes (. [] :) in the selector and assign it to b.
Count the number of element selectors and pseudo-elements (tag ::) in the selector and assign it to c.
Assign d a value of 0 for universal selectors (*) and combinators (+, ~, >).
For example, the selector div#myId.highlight has a specificity value of 1, 2, 0, 0 (1 ID selector, 2 class selectors).

## 7. What are Box properties in CSS?
Box properties in CSS refer to a set of properties that define the dimensions, spacing, and appearance of an element's box model. The box model consists of the content area, padding, border, and margin of an element.

## 8. Some common box properties include:

width and height: Specify the dimensions of the content area.
padding: Defines the space between the content and the border.
border: Sets the style, width, and color of the border around the content area.
margin: Controls the space between the element and its neighboring elements.
How does the browser load a webpage?
When a browser loads a webpage, it follows these general steps:

Retrieving the HTML: The browser sends a request to the server and retrieves the HTML document.
Parsing the HTML: The browser parses the HTML document to construct the Document Object Model (DOM), representing the structure of the webpage.

## Author
- **Manuel Zambrano** - [mnlazs](https://github.com/mnlazs) :rage4:
