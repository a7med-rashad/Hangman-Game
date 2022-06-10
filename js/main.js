
const lettersArray = Array.from("abcdefghijklmnopqrstuvwxyz")

let lettersContainer = document.querySelector(".letters")

lettersArray.forEach(letter => {
    let span = document.createElement("span")
    span.appendChild(document.createTextNode(letter))
    span.className = 'letter-box'

    lettersContainer.appendChild(span)
})

const words = {
    programming: ["php", "javascript", "go", "scala"],
    movies: ["prestige", "inception", "parasite", "up"],
    people: ["albert einstein", "hitchcock"],
    countries: ["syria", "palestine", "yemen", "egypt"],
}


let allkey = Object.keys(words);
randomCategName = allkey[Math.floor(Math.random() * allkey.length)]
let randomPropValue = words[randomCategName];
let randomWord = randomPropValue[Math.floor(Math.random() * randomPropValue.length)]

document.querySelector(".game-info .category span").innerHTML = randomCategName;

let lettersGuessContanier =  document.querySelector(".letters-guess")

wordLetters = Array.from(randomWord)

wordLetters.forEach(letter => {
    let emptySpan = document.createElement("span")

    if (letter === ' ') {
        emptySpan.className = 'has-space'
    }

    lettersGuessContanier.appendChild(emptySpan)
})


