let formElement = document.getElementById("submit-form");
let inputValueElement = document.getElementById("email-input");
let submitBtn = document.getElementById("submit-btn");
let emailName = document.getElementById("input-value");
let container = document.getElementById("container");

function subscribeNow(event) {
  event.preventDefault();
  let emailRecepient = inputValueElement.value;
  let newContent = `
        <img src="img/icon-list.svg" class="closing-icon"/>
        <h1>
        Thanks for Subscribing!
        </h1>
        <p class="text">
        A confirmation email has been sent to ${emailRecepient}. 
        Please open it and click<br/> the button
        inside to confirm your subscription.
        </p>
        <button type="submit" id="closing-btn">
        Dismiss message
        </button>
  `;
  container.innerHTML = newContent;
  container.style.display = "block";
  container.style.width = "300px";
}

formElement.addEventListener("submit", subscribeNow);
