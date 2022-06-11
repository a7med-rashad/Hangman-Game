
const lettersArray = Array.from("abcdefghijklmnopqrstuvwxyz")

let lettersContainer = document.querySelector(".letters")

lettersArray.forEach(letter => {
    let span = document.createElement("span")
    span.appendChild(document.createTextNode(letter))
    span.className = 'letter-box'

    lettersContainer.appendChild(span)
})

const words = {
    programming: ["php", "javas cript", "go", "scala"],
    movies: ["prestige", "incep tion", "parasite", "up"],
    people: ["albert einstein", "hitch cock"],
    countries: ["syria", "pales tine", "yemen", "egypt"],
}


let allkey = Object.keys(words);
randomCategName = allkey[Math.floor(Math.random() * allkey.length)]
let randomPropValue = words[randomCategName];
let randomWord = randomPropValue[Math.floor(Math.random() * randomPropValue.length)]

document.querySelector(".game-info .category span").innerHTML = randomCategName;

let lettersGuessContanier =  document.querySelector(".letters-guess")

wordLetterAndSpace = Array.from(randomWord)

wordLetterAndSpace.forEach(letter => {
    let emptySpan = document.createElement("span")

    if (letter === ' ') {
        emptySpan.className = 'has-space'
    }

    lettersGuessContanier.appendChild(emptySpan)
})



let chosenWord = Array.from(randomWord)

let guessSpans = document.querySelectorAll(".letters-guess span")
let theStatu = false;
document.addEventListener("click", (e) => {
  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked")
    clickedLetter = e.target.innerHTML.toLowerCase()
    
    chosenWord.forEach((wordLetter, wordindex) => {
      if (clickedLetter == wordLetter){
        theStatu = true;
        guessSpans.forEach((span, spanIndex) => {
          if (wordindex == spanIndex) {
            span.innerHTML = clickedLetter
          }
        })
      }
    })
    console.log(theStatu)
  }
})
