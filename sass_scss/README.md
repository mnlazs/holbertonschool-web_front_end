<div align="center">
  <img src="sass.png" align="center" width="300" style="margin: 5px;"/>
</div>

# README [![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome#readme)

## Resources:books:
Read or watch:
* [Sass Basics](https://sass-lang.com/guide)
* [Sass flow control directives: @if, @for, @each and @while](https://sass-lang.com/documentation//at-rules/control)
* [Sass references](https://sass-lang.com/documentation/)
---

## Learning Objectives:bulb:

- What Sass means
- How to write Sass & Scss file
- What is the difference between Sass and Scss
- What is the Sass preprocessing
- How to declare a variable
- How to use nested definition
- How to import a Sass file
- How to use mixins
- How to declare extend/inheritance styles
- How to manipulate operators
---

## Requirements
### General
- Allowed editors: vi, vim, emacs
- All your files will be executed on Ubuntu 18.04 LTS using Sass 3.7.4 (or higher)
- All your files should end with a new line
- All your Scss files should have a comment at the beginning (i.e. syntax above)
- All your files should start by a comment describing the task
- A README.md file, at the root of the folder of the project, is mandatory
- The length of your files will be tested using wc

---

## 1. What Sass means
Sass stands for "Syntactically Awesome Style Sheets." It is a preprocessor scripting language that is interpreted or compiled into CSS. Sass adds functionality and features to CSS, making it easier to write and maintain stylesheets.

## 2. How to write Sass & Scss files
Sass files have the extension ".sass," and SCSS files have the extension ".scss." SCSS is a newer syntax introduced in Sass 3, and it is more similar to CSS syntax. To write Sass or SCSS, you need a text editor or an Integrated Development Environment (IDE). Simply create a new file with the respective extension and start writing Sass or SCSS code.

## 3. What is the difference between Sass and Scss
The main difference between Sass and SCSS is the syntax. Sass uses an indented syntax without curly braces and semicolons, while SCSS uses a syntax that is closer to CSS with curly braces and semicolons. SCSS is more popular and widely used as it feels more familiar to developers transitioning from CSS.

## 4. What is Sass preprocessing
Sass preprocessing refers to the step where Sass code is compiled into regular CSS code. This process is handled by a Sass compiler or preprocessor, which takes the Sass or SCSS files as input and generates a CSS file as output. Preprocessing allows developers to use features like variables, nesting, mixins, and more, which are not directly supported in standard CSS.

## 5. How to declare a variable
In Sass, you can declare variables to store values that can be reused throughout your stylesheets. To declare a variable, use the `$` symbol followed by the variable name and assign a value to it. Here's an example:

```scss
$primary-color: #ff0000;
```

In this example, the variable `$primary-color` is assigned the value `#ff0000`, which represents a red color.

## 6. How to use nested definitions
Sass allows you to nest your CSS rules within one another, providing a more structured and readable way of writing styles. To use nested definitions, simply nest the child selector inside the parent selector. Here's an example:

```scss
.navbar {
  background-color: #f0f0f0;
  padding: 10px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: inline-block;
      margin-right: 10px;
    }
  }
}
```

In this example, the styles for the nested `ul` and `li` elements are scoped within the `.navbar` selector.

## 7. How to import a Sass file
To import a Sass file into another Sass file, use the `@import` directive followed by the path to the file you want to import. Here's an example:

```scss
@import 'variables';
@import 'layout';
```

In this example, the Sass files "variables.scss" and "layout.scss" are imported into the current Sass file. Make sure to omit the file extension in the import statement.

## 8. How to use mixins
Mixins in Sass allow you to define reusable blocks of styles that can be included in multiple selectors. To create a mixin, use the `@mixin` directive followed by the mixin name and its styles. Here's an example:

```scss
@mixin button-styles {
  background-color: #ff0000;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
}

.button {
  @include button-styles;
}
```

In this example, the `button-styles` mixin is defined with a set of styles, and it is included within the `.button`

## Author
- **Manuel Zambrano** - [mnlazs](https://github.com/mnlazs) :rage4:
