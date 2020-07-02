const overlay = document.getElementById("overlay");
const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
let startGame = document.querySelector(".btn__reset");
let title = document.querySelector(".title");



let missed = 0;
const phrases = ["Beating Around the Bush", "Curiosity Killed The Cat", "Right Off the Bat","Wake Up Call","Barking Up The Wrong Tree"];

 


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
  for (let i = 0; i < listItems.length; i++){
    if (letter == listItems[i].innerHTML){
      listItems[i].classList.add("show");
      match = listItems[i].innerHTML;  

  }
}
return match; 
}



// Check to see if game won

function checkWin (){
  let listItems = document.querySelectorAll(".letter");
  let showListItems = document.querySelectorAll(".show");
    if (listItems.length == showListItems.length){
      overlay.className ="win";
      overlay.style.display = "flex";      
      title.innerHTML = "You Win"      
      startGame.textContent = "Try Again";

    } 
    else if ( missed > 4){
      overlay.className = "lose";   
      title.textContent = "You Lose";
      overlay.style.display = "flex";
      startGame.textContent = "Try Again";      
    }   
    }

  function reset (){
    const button = document.getElementsByTagName("button");
    const hearts = document.getElementsByClassName("tries")
    const phrase = document.getElementsByClassName("show");
    overlay.style.display = "none";
    missed = 0;
    for ( let i = 0; i < button.length; i++ ){
      button[i].className = "";
      button[i].disabled = false;
    for (let i = 0; i < hearts.length; i++){
      hearts[i].innerHTML = "<img src = 'images/liveheart.png' height='35px' width = '30px'>";
    }
    for ( let i = 0; i < phrase.length; i++ ){
      phrase[i].classList.remove("show");

    }
    }
    }
  


            
//Hide the start screen overlay  

startGame.addEventListener("click", () => {
  if (startGame.textContent == "Start Game"){
    overlay.style.display = "none"
  } else if (startGame.textContent == "Try Again")
  reset()
}); 


    //Event lister for keyoard

qwerty.addEventListener("click", (event) => {
  if (event.target.tagName == "BUTTON"){
    const button = event.target;
    const letterClicked = event.target.innerHTML;
    button.classList.add("chosen");
    button.disabled = "true";
    let letterFound = checkLetter(letterClicked);
    if (letterFound == null){   
      missed += 1; 
      let li = document.querySelectorAll(".tries")[0];
      let ol = document.querySelectorAll("ol")[0];
      ol.removeChild(li);
      let lostHeart = document.createElement("li");
      lostHeart.innerHTML = "<img src = 'images/lostheart.png' height='35px' width = '30px'>";
      lostHeart.classList.add("tries");  
      ol.insertBefore(lostHeart, li[0])
     
}}
checkWin();
});

