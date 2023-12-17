window.addEventListener("load", generateFaces);
let numberOfFaces = 5;
const theLeftSide = document.getElementById("leftSide");
const theRightSide = document.getElementById("rightSide");

function generateFaces() {
  for (let i = 0; i < numberOfFaces; i++) {
    let face = document.createElement("img");
    face.src = "images/smile.png";

    let randomTop = Math.floor(Math.random() * 400) + 1;
    let randomLeft = Math.floor(Math.random() * 400) + 1;

    face.style.top = randomTop + "px";
    face.style.left = randomLeft + "px";
    theLeftSide.appendChild(face);
  } //Ends for loop

  const leftSideImages = theLeftSide.cloneNode(true);
  leftSideImages.removeChild(leftSideImages.lastChild);
  theRightSide.appendChild(leftSideImages);

  theLeftSide.lastChild.addEventListener("click", nextLevel);
  document.body.addEventListener("click", gameOver);
} //Ends generateFaces()

function nextLevel(event) {
  event.stopPropagation();
  numberOfFaces += 5;
  clearAllNodes();
  generateFaces();
} //Ends nextLevel

function gameOver() {
  document.body.removeEventListener("click", gameOver);
  theLeftSide.lastChild.removeEventListener("click", nextLevel);
  clearAllNodes();
  alert("Game over!");
} //Ends gameOver

function clearAllNodes() {
  while (theLeftSide.firstChild) {
    theLeftSide.removeChild(theLeftSide.firstChild);
  } //ends while lopp - leftSide
  while (theRightSide.firstChild) {
    theRightSide.removeChild(theRightSide.firstChild);
  } //ends while loop - right side
} //Ends clearAllNodes
