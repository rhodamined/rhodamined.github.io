/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. 
Use the html and css code included in the starter code folder to get started.

1) 
Write down pseudocode for the following program.

2) 
Follow the steps below to write your code.
* create a function to house the following:
* generate a random number between 1 - 6 and store to a variable called random1
* generate a random number between 1 - 6 and store to a variable called random2
* combine the string 'dice-' and random1 to form a variable called first die, firstDie
* combine the string 'dice-' and random2 to form a variable called second die, secondDie
* get the first die by ID and update the class to firstDie (hint: document.getElementById)
* get the second die by ID and update the class to secondDie (hint:document.getElementById)

3) 
Connect function in app.js to button in html. 
So, that when the button is pressed your function is called
*/

function roll() {
  const random1 = getInt();
  const random2 = getInt();
  const firstDie = `dice-${random1}`
  const secondDie = `dice-${random2}`

  document.getElementById('first-die').className = `dice ${firstDie}`
  document.getElementById('second-die').className = `dice ${secondDie}`

  // red for snake eyes
  let newColor = random1+random2 === 2 ? '#FF0000' : '#FFFFFF'
  document.body.style.backgroundColor = newColor;
}


// adapted code from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getInt() {
  const min = 1
  const max = 6 //roll 6-sided die
  return Math.floor(Math.random() * (max - min + 1)) + min //max inclusive, min inclusive
}
