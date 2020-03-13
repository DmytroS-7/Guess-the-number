let randomNumber;

(function() {
  randomNumber = getRandomNumber(10);
  console.log("Random init ", randomNumber);
  const input = document.getElementById("checkField");
  const button = document.getElementById("checkBtn");
  button.addEventListener("click", () => {
    checkNumber(input);
  });
})();

function checkNumber(input) {
  if (!input.value) {
    alert("Введите число!");
  } else {
    checkValue(input);
  }
}

function checkValue(input) {
  const p = document.getElementById("status");
  if (input.value > randomNumber) {
    p.innerHTML = "Не угадали, ваше число больше";
    p.className = "wrong";
  } else if (input.value < randomNumber) {
    p.innerHTML = "Не угадали, ваше число меньше";
    p.className = "wrong";
  } else {
    p.innerHTML = `Вы угадали число ${randomNumber}. Поздравляем!!!`;
    p.className = "success";
    input.value = "";
    randomNumber = getRandomNumber(10);
    console.log("Random New ", randomNumber);
  }
}

function getRandomNumber(n) {
  return Math.floor(Math.random() * n + 1);
}
