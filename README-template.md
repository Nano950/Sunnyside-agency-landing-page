# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./Screen%20Shot%202022-05-04%20at%207.36.44%20AM.png)

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef/hub/sunnyside-agency-landing-page-ryITXMQr5)
- Live Site URL: [Add live site URL here](https://nano950.github.io/Sunnyside-agency-landing-page/)

## My process

-I added all html elements before adding any css
-I started by trying to lay out the grid before I styled anything
-Then I started to edit each section of the page from left to right, then top to bottom

### Built with

- CSS custom properties
- Flexbox
- CSS Grid

- [Styled Components](https://styled-components.com/) - For styles

### What I learned

-specify a grid area for each grid item

```js
let count = 0;

function openMenu() {
    let menu = document.getElementById("menu"); 
    menu.style.display = "block"; 
    count += 1;
    if (count == 2) {
        menu.style.display = "none";
        count = 0;
    }
};
```

### Continued development

 - using grid
 - checking for silly mistake like typos
 - better understand how javascript is used in dynamic websites (what its used for)

### Useful resources

- [Codecademy](https://www.codecademy.com/learn) - The cheats that summarized information on different topics helped me review and remember things.

## Author

- Frontend Mentor - [@Nano950](https://www.frontendmentor.io/profile/Nano950)