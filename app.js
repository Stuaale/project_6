const overlay = document.getElementById("overlay");
const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const phraseListParent = document.querySelector("ul");
const startGame = document.querySelector(".btn__reset");
let title = document.querySelector(".title");
let missed = 0;
const phrases = ["Beating Around the Bush", "Curiosity Killed The Cat", "Right Off the Bat","Wake Up Call","Barking Up The Wrong Tree"];

 


//Function to get a random Phrase

function getRandomPhrase (arr){
  const randomNumber = Math.floor( Math.random() * arr.length); //creates a random number between 0 and the length of the array passed
  const getPhrase = arr[randomNumber].toString().toLowerCase(); //selects the phrase from the array using the random number returned
  for (let i = 0; i < getPhrase.length; i++) { //loop to run through each letter in phrase
  const li = document.createElement("li"); //create new list item for each letter from the phrase
  li.textContent = getPhrase.charAt([i]); //inputs each letter using the index into the newly created list item
  if (li.textContent !== " "){ 
    li.classList.add("letter");
  } else
    li.classList.add("space");
    phraseListParent.appendChild(li); //appends the new elements into the ul parent
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

//function to reset the game.

  function reset (){
    const button = document.getElementsByTagName("button");
    const hearts = document.getElementsByClassName("tries")
    const phraseParent = document.querySelector("ul").children;
    overlay.style.display = "none";
    missed = 0;
    for ( let i = 0; i < button.length; i++ ){
      button[i].className = "";
      button[i].disabled = false;
    for (let i = 0; i < hearts.length; i++){
      hearts[i].innerHTML = "<img src = 'images/liveheart.png' height='35px' width = '30px'>"; //reverts image back to blue heart
    }
    for ( let i = 0; i < phraseParent.length; i++ ){
      phraseParent[i].remove(); //removes all of the list items

    }
    }
 getRandomPhrase(phrases)
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
    let letterFound = checkLetter(letterClicked);
    button.classList.add("chosen");
    button.disabled = "true"; 
    if (letterFound == null){   
      missed += 1; 
      let li = document.querySelectorAll(".tries")[0];      
      let hearts = document.querySelectorAll("ol")[0].children;   //select all of the heart elements    
      hearts[4].remove();      //remove the last heart 
      let lostHeart = document.createElement("li");//create an element for lost hearts
      lostHeart.innerHTML = "<img src = 'images/lostheart.png' height='35px' width = '30px'>";
      lostHeart.classList.add("tries");      
      let heartContainer = document.querySelectorAll("ol")[0];//get list of ol list child elements
      heartContainer.insertBefore(lostHeart, hearts[0]) //inserst new lostHeart element as first child.
     
}}
checkWin();
});


