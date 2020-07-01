const overlay = document.getElementById("overlay");
const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const startGame = document.querySelector(".btn__reset");

let missed = 0;
const phrases = ["Beating Around the Bush", "Curiosity Killed The Cat", "Right Off the Bat","Wake Up Call","Barking Up The Wrong Tree"];

 
        
//Hide the start screen overlay  

startGame.addEventListener("click", () => {
    if (overlay.style.display = "flex"){
      overlay.style.display = "none"
    }
  });

//Function to get a random Phrase

function getRandomPhrase (arr){
  const randomNumber = Math.floor( Math.random() * arr.length);
  const getPhrase = arr[randomNumber].toString().toLowerCase();
  for (let i = 0; i < getPhrase.length; i++) {
  const li = document.createElement("li");
  li.textContent = getPhrase.charAt([i]);

  if (li.textContent !== " "){
    li.classList.add("letter");
  } else
    li.classList.add("space");
  let ul = document.querySelector("ul");
  ul.appendChild(li);
  }
  return getPhrase;
}


//add phrase to display

getRandomPhrase(phrases);

// Check Letter Function

function checkLetter (letter){
  const listItems = document.querySelectorAll(".letter");
  let match = null;
  let letterFound = "";
  for (let i = 0; i < listItems.length; i++){
    if (letter == listItems[i].innerHTML){
      listItems[i].classList.add("show");
      letterFound += listItems[i].innerHTML; 
      console.log(letterFound) 
  }
}
return match; 
}


//Event lister for keyoard

qwerty.addEventListener("click", (event) => {
  if (event.target.tagName == "BUTTON"){
    const button = event.target;
    const letterClicked = event.target.innerHTML;
    button.classList.add("chosen");
    letterClicked.disabled = "true";
    checkLetter(letterClicked);
  } 
});

// Check to see if game won

function checkWin (){
  let listItems = document.querySelectorAll(".letter");
  let showListItems = document.querySelectorAll(".show");
    if (listItems.length === showListItems.length){
      overlay.classList.add("win");
      startGame.textContent = "You Win";
      overlay.style.display = "flex";
    } 
    else if ( missed > 4){
      overlay.classList.add("lose");   
      startGame.textContent = "You Lose";
      overlay.style.display = "flex";
    }
    return checkWin()

    }