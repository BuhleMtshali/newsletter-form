let formElement = document.getElementById("submit-form");
let inputValueElement = document.getElementById("email-input");
let submitBtn = document.getElementById("submit-btn");

function subscribeNow(event) {
  event.preventDefault();
}

submitBtn.addEventListener("submit", subscribeNow);
