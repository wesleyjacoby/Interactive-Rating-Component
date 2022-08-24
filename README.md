# Frontend Mentor - Interactive Rating Component Solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size.
- See hover states for all interactive elements on the page.
- Select and submit a number rating.
- See the "Thank you" card state after submitting a rating.

### Screenshot

![](./images/interactive-rating-component-desktop.png)
![](./images/interactive-rating-component-mobile.png)
![](./images/interactive-rating-component-mobile-thanks.png)

### Links

- Solution URL: [GitHub](https://github.com/wesleyjacoby/Interactive-Rating-Component)
- Live Site URL: [GitHub Pages](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

This project was a steep learning curve for me. The HTML and CSS aspect was easy, but I quickly came to realise that I needed to use a `<form></form>` for the rating numbers and not just some `div` with a `p` tag in it.

Next I had to learn how to style radio buttons, which is something I hadn't done before. I saw some new ways of selecting elements using CSS, like:

To see how you can add code snippets, see below:

```css
#rating-form input[type='radio']:checked+label {
    background-color: var(--light-grey);
    color: var(--white);
}
```

the hardest part was trying to get that information out of the form and use it to update the page. I don't know if it's correct or how elegant it is, but this is the code that made it happen:
```js
form.addEventListener('submit', function (event) {
    event.preventDefault();
    for (button of radioButtons) {
        if (button.checked) {
            console.log(button.value);
            rating.append(button.value);
            mainContainer.classList.add('fade-in');
            innerContainer.classList.add('hide');
            innerContainer2.classList.remove('hide');
        }
    }
})
```
I also played around with some animations, which was not part of the challenge.

### Continued development

I have lots to learn going forward - especially with regards to JavaScript!

## Author

- Frontend Mentor - [@wesleyjacoby](https://www.frontendmentor.io/profile/wesleyjacoby)