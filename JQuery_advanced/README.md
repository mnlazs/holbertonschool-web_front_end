<div align="center">
  <img src="images/ajax-web.jpg" width="650" style="margin: 15px;"/>
</div>


# README [![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome#readme)

## Resources:books:
Read or watch:
* [jQuery CDN](https://releases.jquery.com/)
* [jQuery API Documentation](https://api.jquery.com/)
* [Json server](https://github.com/typicode/json-server)

## Learning Objectives: bulb:

- Learn how to load jQuery from a CDN in a page
- Learn the different ways to create DOM elements with jQuery
- Learn how to modify elements
- Learn how to add new elements to a page with different positions
- Learn how to add a click handler on an element
- Learn how to send GET, POST, DELETE or any type of AJAX query with jQuery
- Learn how to create a pagination
---

## Requirements
### General
Allowed editors: vi, vim, emacs, Visual Studio Code.  
All your files should end with a new line.  
A README.md file, at the root of the folder of the project, is mandatory.  

---

## Loading jQuery from a CDN in a Page

To load jQuery from a CDN (Content Delivery Network) in a web page, include the following `<script>` tag in your HTML file:

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

## Creating DOM Elements with jQuery

jQuery provides various methods to create DOM elements:

- Using the `$()` function:
```javascript
let newDiv = $('<div>');
```

- Using the `append()`, `prepend()`, `after()`, or `before()` methods:
```javascript
$('#parentElement').append('<div>New Element</div>');
```

- Using the `html()` or `text()` methods:
```javascript
$('#element').html('<p>New HTML content</p>');
```

## Modifying Elements

To modify elements using jQuery, you can use the following methods:

- `attr()`: Get or set attributes of elements.
- `css()`: Get or set CSS properties of elements.
- `text()`, `html()`: Get or set the text content or HTML content of elements.
- `addClass()`, `removeClass()`, `toggleClass()`: Add, remove, or toggle CSS classes on elements.
- `val()`: Get or set the value of form elements.

## Adding New Elements to a Page with Different Positions

You can add new elements to a page at different positions using jQuery methods:

- `append()`, `prepend()`: Add elements as the last or first child of a parent element.
- `after()`, `before()`: Add elements as siblings after or before an existing element.
- `appendTo()`, `prependTo()`: Append or prepend elements to a target element.

## Adding a Click Handler on an Element

To add a click event handler to an element using jQuery, you can use the `click()` method:

```javascript
$('#myButton').click(function() {
    // Code to be executed when the element is clicked
});
```

## Sending AJAX Queries with jQuery

You can send various types of AJAX queries (e.g., GET, POST, DELETE) using jQuery's `$.ajax()` method:

```javascript
$.ajax({
    method: 'GET',
    url: '/api/data',
    success: function(response) {
        // Code to handle the successful response
    },
    error: function(xhr, status, error) {
        // Code to handle the error
    }
});
```

## Creating Pagination

To create pagination with jQuery, follow these general steps:

- Calculate the total number of pages and the number of items per page.
- Dynamically generate the pagination elements (e.g., page numbers, previous/next buttons) using jQuery's DOM manipulation methods.
- Handle click events on the pagination elements to update the displayed data based on the selected page.

These explanations should help you understand the concepts and get started with jQuery. For more details and examples, refer to the jQuery documentation or search for specific tutorials online.
## Author
- **Manuel Zambrano** - [mnlazs](https://github.com/mnlazs) :rage4:
