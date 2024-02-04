// i am putting the bubbles in the div from the js

let time =30;
let score = 0;
let targetNo;

function addbubble() {

    let nobubble = "";
  var bblediv = document.querySelector(".bubbles");
  for (let i = 1; i < 71; i++) {
    nobubble += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }
  bblediv.innerHTML = nobubble;
  
}

function addTarget() {
    targetNo=Math.floor(Math.random() * 10)
  document.querySelector("#target").textContent = targetNo;
}

function timer() {
  const runnnigTime = setInterval(function () {
    if (time >-1) {
      document.querySelector("#timer").textContent = time;
      time--;
    } else {
      document.querySelector(".bubbles").innerHTML = `<h1>Score : ${score}</h1>`;
        clearInterval(runnnigTime);
    }
  }, 1000);
}

function increaseScore() {
  if (time > 0) {
    document.querySelector(".bubbles").addEventListener("click", (e) => {
      let value = Number(e.target.innerHTML);

      if (value == targetNo) {
        score += 10;
        document.querySelector("#score").textContent = score;
        addbubble();
        addTarget();

      }
    });
    
  } else {
  }
}

timer();
increaseScore();
addTarget();
addbubble();

