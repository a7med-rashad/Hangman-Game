
const lettersArray = Array.from("ابتثجحخدذرزسشصضطظعغفقكلمنهوي")

let lettersContainer = document.querySelector(".letters")

lettersArray.forEach(letter => {
    let span = document.createElement("span")
    span.appendChild(document.createTextNode(letter))
    span.className = 'letter-box'

    lettersContainer.appendChild(span)
})

const words = {
    أغاني: ["الاطلال", "البخت", "اتنسيت", "تعالا ادلعك",/*, "", "", "", "", "", ""*/],
    أفلام: ["الفيل الازرق", "اشتباك", "لاتراجع ولااستسلام", "هيبتا"/*, "", "", "", "", "", ""*/],
    اشخاص_مشهوره: ["عمرو دياب", "نجيب محفوظ", "عادل امام", "ابوتريكه", "سعد الصغير", "رونالدو", "تامر حسني", "حمدي الوزير"],
    بلاد: ["سوريا", "فلسطين", "اليمين", "مصر"/*, "", "", "", "", "", ""*/],
}


let allkey = Object.keys(words);
randomCategName = allkey[Math.floor(Math.random() * allkey.length)]
let randomPropValue = words[randomCategName];
let randomWord = randomPropValue[Math.floor(Math.random() * randomPropValue.length)]
console.log(randomWord)

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

let wrongTry = 0;
let hangman = document.querySelector(".hangman-draw")

document.addEventListener("click", (e) => {
  let theStatu = false;
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
    if (theStatu !== true) {
      wrongTry++;
      hangman.classList.add(`wrong-${wrongTry}`)
      
      if (wrongTry === 8) {
        endGame()
        relod()
        
        lettersContainer.classList.add("finished")

        document.getElementById("fail").pause()
      }

      document.getElementById("fail").play()

    } else {
      document.getElementById("success").play()
      
    }
  }
})


function endGame() {
  let popup = document.createElement("div")
  popup.appendChild(document.createTextNode(`Game Over, الكلمه الصحيحه هي ${randomWord}`))
  popup.className = "popup"
  document.body.appendChild(popup)
  let popupButton = document.createElement("div")
  popupButton.appendChild(document.createTextNode("Again"))
  popupButton.className = "button"
  popup.appendChild(popupButton)
  document.body.appendChild(popup)
  document.getElementById("game-over").play()
  document.getElementById("fail").stop()
}

function relod() {
}
