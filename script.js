const guessingWords = ['hello', 'world', 'string', 'random', 'javascript', 'supercalifragilisticexpialidocious']

const buttons = document.querySelectorAll("button")
const newGame = document.querySelector("#newGame")
const paragraphs = document.getElementsByTagName("p")
const div = document.querySelector(".blankSpaces")
let word = ''

const createNewGame = () => {
  word = guessingWords[Math.floor(Math.random() * guessingWords.length)]
  console.log(word)

  for (let i = 0; i < word.length; i++) {
    const newParagraph = document.createElement("p")
    div.appendChild(newParagraph)

  } for (let i = 0; i < word.length; i++) {
    paragraphs[i].innerText = ''

  } for (let i = 0; i < word.length; i++) {
    paragraphs[i].innerText = "__"

  } buttons.forEach(button => {
    button.removeAttribute("disabled", "disabled")
  })
}
// Need to find a way where it won't select a word that was just chosen.

createNewGame() // This creates the first game when you open the browser.

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "newGame") { return } // This prevents the New Game button from being disabled.

    for (let i = 0; i < word.length; i++) {
      if (e.target.id === word.charAt([i])) {
        paragraphs[i].innerHTML = '' // This removes the "__" before replacing with a letter.
        paragraphs[i].innerHTML = e.target.id.toUpperCase()
      }
    }
    button.setAttribute("disabled", "disabled") // This disables buttons on click.
  })
})

document.addEventListener("keydown", (e) => {
  buttons.forEach(button => {

    for (let i = 0; i < word.length; i++) {
      if (e.key === word.charAt([i])) {
        paragraphs[i].innerHTML = '' // This removes the "__" before replacing with a letter.
        paragraphs[i].innerHTML = e.key.toUpperCase()
      }
    }
    if (e.key === button.id) {
      button.setAttribute("disabled", "disabled") // This disables buttons on keydown.
    }
  })
})
// I feel like I may be able to combine these into 1 function? I can have conditionals using e.type, but keydown has to be added onto the document.

newGame.addEventListener("click", () => {
  for (let i = word.length - 1; i >= 0; i--) {
    paragraphs[i].remove() // This removes all the p tags before new ones are created.
  }
  createNewGame()
})


// function draw() {
  //   const canvas = document.getElementById("hangman")
  //   if (canvas.getContext("2d")) {
    //     const hangman = canvas.getContext("2d")
    //   }
    // }
    // draw()

// Learning how to draw on a canvas!
    
// Need to add a function that prevents buttons from being clicked/keydowned after game is solved(POINTER EVENTS: NONE).
// How does the code know when the game is solved? Some sort of checking function, but I'm not sure what it would check for.
    
// I think I can make 1 draw function with if conditionals and have an empty array where incorrect letters are pushed into it.
// Depending on the length of the array, certain strokes will be drawn.