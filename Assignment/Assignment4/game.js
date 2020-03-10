window.onload = pageLoad;

function pageLoad() {
  document.getElementById("start").onclick = startGame;
}

function startGame() {
  alert("Ready");
  clearScreen();
  addBox();
  timeStart();
}

let timer = null;
function timeStart() {
  let TIMER_TICK = 1000;
  let min = 0.5; // 0.5 minute
  let second = min * 60;
  let x = document.getElementById("clock");
  if (timer != null) {
    clearInterval(timer);
  }
  timer = setInterval(timeCount, TIMER_TICK);
  x.innerHTML = second;
  function timeCount() {
    var allbox = document.querySelectorAll("#squares-layer div");
    if (allbox.length <= 0) {
      clearInterval(timer);
      alert("You Win!");
      return;
    } else {
      if (second == 0) {
        alert("You lose");
        clearInterval(timer);
        clearScreen();
        return;
      }
      second--;
      x.innerHTML = second;
    }
  }
}

function addBox() {
  var numbox = document.getElementById("numbox").value;
  var squaresLayer = document.getElementById("squares-layer");
  var colorDrop = document.getElementById("color").value;
  for (var i = 0; i < numbox; i++) {
    var tempbox = document.createElement("div");
    tempbox.className = "square " + colorDrop;
    tempbox.id = "box" + i;
    tempbox.style.left = Math.random() * (500 - 25) + "px";
    tempbox.style.top = Math.random() * (500 - 25) + "px";
    //add element to HTML node
    squaresLayer.appendChild(tempbox);
    bindBox(tempbox);
  }
}

function bindBox(box) {
  //เมื่อกดแล้ว กล่องจะหายไป
  box.onclick = function() {
    box.parentNode.removeChild(box);
  };
}

function clearScreen() {
  var allbox = document.querySelectorAll("#squares-layer div");

  //delete all  squares
  for (var i = 0; i < allbox.length; i++) {
    allbox[i].parentNode.removeChild(allbox[i]);
  }
}
