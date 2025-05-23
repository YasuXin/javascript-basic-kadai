const textElement = document.querySelector("#text");
const btnElement = document.querySelector("#btn");

btnElement.addEventListener("click", function() {
  textElement.textContent = "ボタンをクリックしました";
});