<div align="left">
  <img src="images/icon.png" align="right"/>
 </div>

# README [![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome#readme)

## Resources:books:
Read or watch:
* [A Complete Guide to Flexbox | CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [Flexbox Froggy - A game for learning CSS flexbox](https://flexboxfroggy.com/#es)
* [Flexbox Defense](http://www.flexboxdefense.com/)
* [Flexbox Cheatsheet](https://yoksel.github.io/flex-cheatsheet/)
* [CSS Flexible Box Layout - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
* [Build with Flexbox](https://intranet.hbtn.io/rltoken/fNfq2XrH6D0OFpXZZA6n_w)
* [Flexplorer](https://bennettfeely.com/flexplorer/)
* [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/css-flexbox-1/#flex)
* [FLEX: A simple visual cheatsheet for flexbox](https://flexbox.malven.co)
---

## Learning Objectives:bulb:

- What is Flexbox?
- How to convert float positioning to a flex display
- How to horizontally and vertically align elements using Flexbox
- The difference between the main and cross axes
- Properties that work on flex elements vs flex container
- Shorthands for flex
- How to create a new page with flex in mind
---

## Requirements
### General
Allowed editors: vi, vim, emacs
A README.md at the root of the project directory is mandatory
All of your code will be executed on Ubuntu 18.04 using Python 3.7.x
All of your files should end with a new line

---

# 1. What is Flexbox?
Flexbox, short for Flexible Box Layout, is a CSS layout module that provides a flexible way to arrange and align elements within a container. It offers a one-dimensional layout model, allowing you to distribute space among items within the container and control their alignment, order, and size.

# 2. How to convert float positioning to a flex display:
To convert float positioning to a flex display, you can follow these steps:

### Step 1 
Set the container's display property to `flex`. For example:
```css
.container {
  display: flex;
}
```

### Step 2 
Remove any float properties from the child elements within the container.

### Step 3 
Adjust the necessary flex properties, such as `flex-direction`, `justify-content`, and `align-items`, to achieve the desired layout.

# 3. How to horizontally and vertically align elements using Flexbox:
To horizontally and vertically align elements using Flexbox, you can use the following CSS properties:

- To horizontally align items within the container, use `justify-content` property:
```css
.container {
  display: flex;
  justify-content: center; /* horizontally center align */
}
```

- To vertically align items within the container, use `align-items` property:
```css
.container {
  display: flex;
  align-items: center; /* vertically center align */
}
```

# 4. The difference between the main and cross axes:
In Flexbox, the main axis refers to the primary axis along which flex items are laid out, and the cross axis is perpendicular to the main axis.

- For `flex-direction: row` (default), the main axis runs horizontally from left to right, and the cross axis runs vertically from top to bottom.

- For `flex-direction: column`, the main axis runs vertically from top to bottom, and the cross axis runs horizontally from left to right.

The main axis is defined by the `justify-content` property, and the cross axis is defined by the `align-items` property.

# 5. Properties that work on flex elements vs flex container:
In Flexbox, there are properties that apply to the flex container and properties that apply to flex items (elements within the container):

- Properties that apply to the flex container:
  - `display`: Specifies the container as a flex container.
  - `flex-direction`: Sets the direction of the main axis.
  - `justify-content`: Defines how flex items are aligned along the main axis.
  - `align-items`: Specifies how flex items are aligned along the cross axis.
  - `flex-wrap`: Controls whether flex items should wrap or remain on a single line.

- Properties that apply to flex items:
  - `flex-grow`: Specifies how flex items grow relative to each other.
  - `flex-shrink`: Determines how flex items shrink relative to each other.
  - `flex-basis`: Defines the default size of flex items before free space is distributed.
  - `flex`: Shorthand for setting `flex-grow`, `flex-shrink`, and `flex-basis` together.
  - `align-self`: Overrides the `align-items` property for individual flex items.

# 6. Shorthands for flex:
Flexbox provides several shorthand properties to simplify the syntax for working with flex items:

- `flex` is a shorthand for `flex-grow`, `flex-shrink`, and `flex-basis` combined. For example:
```css
.item {
  flex: 1 0 auto; /* flex-grow | flex-shrink | flex-basis */
}
```

- `align-items` and `justify-content` can also accept a single value as a shorthand for setting both the main and cross axis alignment simultaneously. For example:
```css
.container {
  align-items: center; /* align
```

## Author
- **Manuel Zambrano** - [mnlazs](https://github.com/mnlazs) :rage4:
