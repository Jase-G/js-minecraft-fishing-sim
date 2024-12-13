// Functionize Minecraft Fishing Start Code

//fish count vars
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
  //determine selected character
  let character = document.getElementById("character-select").value;

  //vars
  let fishPicOut = document.getElementById("result-img");
  let randNum = Math.random();

  if (character === "steve") {
    //fish with steve
    if (randNum < 0.7) {
      fishPicOut.src = "img/Raw-Cod.png";
      numCod++;
      document.getElementById("num-cod").innerHTML = numCod;
    } else if (randNum < 0.9) {
      fishPicOut.src = "img/Raw-Salmon.png";
      numSalmon++;
      document.getElementById("num-salmon").innerHTML = numSalmon;
    } else if (randNum < 0.95) {
      fishPicOut.src = "img/Tropical-Fish.png";
      numTropical++;
      document.getElementById("num-tropical").innerHTML = numTropical;
    } else {
      fishPicOut.src = "img/Pufferfish.png";
      numPuffer++;
      document.getElementById("num-puffer").innerHTML = numPuffer;
    }
  } else if (character === "alex") {
    //fish with alex
    if (randNum < 0.1) {
      fishPicOut.src = "img/Raw-Cod.png";
      numCod++;
      document.getElementById("num-cod").innerHTML = numCod;
    } else if (randNum < 0.2) {
      fishPicOut.src = "img/Raw-Salmon.png";
      numSalmon++;
      document.getElementById("num-salmon").innerHTML = numSalmon;
    } else if (randNum < 0.5) {
      fishPicOut.src = "img/Tropical-Fish.png";
      numTropical++;
      document.getElementById("num-tropical").innerHTML = numTropical;
    } else {
      fishPicOut.src = "img/Pufferfish.png";
      numPuffer++;
      document.getElementById("num-puffer").innerHTML = numPuffer;
    }
  } else if (character === "villager") {
    //fish with alex
    if (randNum < 0.25) {
      fishPicOut.src = "img/Raw-Cod.png";
      numCod++;
      document.getElementById("num-cod").innerHTML = numCod;
    } else if (randNum < 0.5) {
      fishPicOut.src = "img/Raw-Salmon.png";
      numSalmon++;
      document.getElementById("num-salmon").innerHTML = numSalmon;
    } else if (randNum < 0.75) {
      fishPicOut.src = "img/Tropical-Fish.png";
      numTropical++;
      document.getElementById("num-tropical").innerHTML = numTropical;
    } else {
      fishPicOut.src = "img/Pufferfish.png";
      numPuffer++;
      document.getElementById("num-puffer").innerHTML = numPuffer;
    }
  }
}
