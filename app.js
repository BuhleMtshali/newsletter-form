let formElement = document.getElementById("submit-form");
let inputValueElement = document.getElementById("email-input");
let submitBtn = document.getElementById("submit-btn");
let emailName = document.getElementById("input-value");
let container = document.getElementById("container");

function subscribeNow(event) {
  event.preventDefault();
  container.innerHTML = `
            <h1 class="loading-heading">Loading your data...</h1>
            <i class="fa-solid fa-spinner fa-spin" style="color: #ff6155;"></i>
            <p class="text loading-text">
            Please wait while we load your data to the system...
            </p>
            
    `;
  container.style.textAlign = "center";

  setTimeout(function () {
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
  }, 6000);
  let closingBtn = document.getElementById("closing-btn");

  container.style.display = "block";
  container.style.width = "300px";
}

formElement.addEventListener("submit", subscribeNow);
