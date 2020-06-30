const overlay = document.getElementById("overlay");
const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const startGame = document.querySelector(".btn__reset");
let missed = 0;
let phrases = [["Beating Around the Bush"],
              ["Curiosity Killed The Cat"],
              ["Right Off the Bat"],
              ["Wake Up Call"],
              ["Barking Up The Wrong Tree"]];

 
        
//Hide the start screen overlay
  

startGame.addEventListener("click", () => {
    if (overlay.style.display = "flex"){
      overlay.style.display = "none"
    } else {
      overlay.style.display = "flex"
    }
  });

