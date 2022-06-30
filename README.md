# spock-rock-game-JS

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Screenshot from 2022-06-29 23-54-27](https://user-images.githubusercontent.com/101960666/176589246-b72fdc32-8ac3-4a37-9a31-381fc7e9fc55.png)

### Links

- Live Site URL: [Rock Paper Scissors Lizard Spock](https://happi89.github.io/spock-rock-game-JS/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow

### What I learned

f=First time I used the onclick function in html
```html
onclick="playerSelect('rock')"
```

learnt about the bind function
```js
document.getElementById.bind(document);
```

learnt about switch statements
```js
switch(choice) {
    case 'rock':
      playerChoice = 'rock';
      playerChoiceEl.textContent = ' --- Rock';
      playerRock.classList.add('selected');
      break;
```

### Useful resources

- [W3Schools Bind Function](https://www.w3schools.com/js/js_function_bind.asp) - This helped me write fewer characters when grabbing elements from the dom using get element by id.
- [W3Schools Switch Statement](https://www.w3schools.com/js/js_switch.asp) - This gave me a quick refresher about the switch statement and I used it for the first time in a real project instead of a if statement. I will be using the switch statement instead from now when dealing with alot of cases/if blocks.
