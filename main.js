// Program title

//btn
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // shortcuts
  let q1 = document.getElementById("queston-1").value.toLowerCase();
  let q2 = +document.getElementById("queston-2").value.toLowerCase();
  let q3 = document.getElementById("queston-3").value.toLowerCase();
  let q4 = document.getElementById("queston-4").value.toLowerCase();
  let msg = document.getElementById("msg");

  let score = 0;
  // q1
  if (q1 === "sid meier's civilization 6") {
    score++;
    document.getElementById("queston-1-output").innerHTML = "corect";
    document.getElementById("queston-1-output").style.color = "green";
  } else {
    document.getElementById("queston-1-output").innerHTML = "incorect";
    document.getElementById("queston-1-output").style.color = "red";
  }
  //q2
  if (q2 === 50) {
    score++;
    document.getElementById("queston-2-output").innerHTML = "corect";
    document.getElementById("queston-2-output").style.color = "green";
  } else {
    document.getElementById("queston-2-output").innerHTML = "incorect";
    document.getElementById("queston-2-output").style.color = "red";
  }
  //q3
  if (q3 === "trajan" || q3 === "caesar" || q3 === "julius caesar") {
    score++;
    document.getElementById("queston-3-output").innerHTML = "corect";
    document.getElementById("queston-3-output").style.color = "green";
  } else {
    document.getElementById("queston-3-output").innerHTML = "incorect";
    document.getElementById("queston-3-output").style.color = "red";
  }
  //q4
  if (q4 === "leader pass") {
    score++;
    document.getElementById("queston-4-output").innerHTML = "corect";
    document.getElementById("queston-4-output").style.color = "green";
  } else {
    document.getElementById("queston-4-output").innerHTML = "incorect";
    document.getElementById("queston-4-output").style.color = "red";
  }
  // score
  let finalScore = (score / 4) * 100;
  document.getElementById("score").innerHTML = `${finalScore}%`;
  //output statment based on grade
  if (finalScore <= 25) {
    msg.innerHTML = "better luck next time";
  } else if (finalScore <= 50) {
    msg.innerHTML = "good try";
  } else if (finalScore <= 75) {
    msg.innerHTML = "good job";
  } else {
    msg.innerHTML = "perfect";
  }
}
