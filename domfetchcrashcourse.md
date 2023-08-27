# Prompt
In all of these problems, do NOT touch the html. Do everything using javascript :D 
Just a crash course for DOM manipulation and fetching data. I am assuming everyone already knows js basics like
1. if statements
2. variables
3. functions
4. for loops
5. arrays
6. object

If you dont feel comfortable in ANY of these topics, slide in my DMs!

# Cheatsheet
- document.querySelector('a css selector')
- document.querySelectorAll('a css selector')
- document.createElement('div' or 'h1' or 'p' or 'a' or 'ul' or whatever);
- `<after you select an html element>`.appendChild(`<another html element>`); example:
```js
this is your html code-
<div id="root"></div>

this is your javascript code-
const root = document.querySelector('#root');
const h1 = document.createElement('h1');

// notice how `root` and `h1` are both html element
root.appendChild(h1);
```
- `<after you select an html element>`.textContent = 'hello';
- `<after you select an html element>`.innerHTML = `<h1>any html can go in here</h1>`;
- `<after you select an html element>`.removeChild(`<another html element>`); example-
```js
your html is
<div id="root">
  <h1>hello</h1>
</div>

your js is
const root = document.querySelector('#root');
const h1 = document.querySelector('h1');

// notice how root and h1 are both html elements
root.removeChild(h1);
```
- addEventListener
```
const h1 = document.createElement('h1');
h1.addEventListener('click' or 'mouseover' or 'anything, just google it', (event) => {

});
```

# Basic problems
1. This is your index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

How can you select the div element?

2. From now on, I'm gonna ignore the entire HTML boilerplate and only write example code that's within the `<body>` tag.   
Here is your html
```html
<div id="root"></div>
```
Using ONLY JavaScript, how can you create an `<h1>` tag inside of the `<div>` tag?  

3. This is your html
```html
<ul id="first-list"></ul>
<ul id="second-list"></ul>
<ul id="third-list"></ul>
```
How can you select the second ul?

3. How can you select ALL the uls?

4. After selecting all of the uls, how can you add just a single `li` in each of the uls? In the end, your html would look like this
```js
<ul id="first-list">
  <li></li>
</ul>
<ul id="second-list">
  <li></li>
</ul>
<ul id="third-list">
  <li></li>
</ul>
```

5. Now lets remove the lis from each of these uls

# Slightly more advanced
6. You have an array of users
```js
const users = [
  { name: 'stanley', age: 24, isDrunk: true },
  { name: 'alex', age: be careful what you put for this everyone!, isDrunk: false },
];
```

Create an unordered list that looks like this. Make sure it's ul and lis, and make sure you write a function to accomplish this
```js
- stanley is age 24 and is drunk
- alex is age 23? and is sober
```

7. Add a single button next to each user. This button should display just an "X". It would look like this
```js
- stanley is age 24 and is drunk [X]
- alex is age 23? and is sober [X]
```

8. When user clicks on the button, console.log(the user that they clicked on)

9. When user clicks on the button, remove the user from the array

### Hints for 9.
1. you can use array.filter to remove the user from the array
2. after removing the user from the array, render the list again using the new state of the array

# Fetch!

# Cheatsheet
- fetch
```js
const getData = async () => {
  try {
    const response = await fetch('some url');
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
```

# Basic problems

10. Currently, all of our users is stored in an array literally just like this
```js
const users = [
  { name: 'stanley', age: 24, isDrunk: true },
  { name: 'alex', age: be careful what you put for this everyone!, isDrunk: false },
];
```

Instead of hardcoding all of our users in an array, we want to use real data from an actual database. Lets imagine we want to get a pokemon from a database. The pokemon we want to get is ditto. We can get it from this API endpoint https://pokeapi.co/api/v2/pokemon/ditto. 
  
How can you get the data from that api endpoint into your code? Just save it in a variable and console.log it

11. Awesome! We just fetched our ditto. I know the object is huge, but just look through the object to see what properties you want to use. Lets display our ditto in our UI like this
```
- ditto
<an image of ditto, probably just the front_default one>

Abilities
- limber
- imposter
```

- for delete and post, id recommend just doing the puppy bowl for delete and post LOL this is meant as just a super crash course