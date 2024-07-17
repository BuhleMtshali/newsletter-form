let formElement = document.getElementById("submit-form");
let inputValueElement = document.getElementById("email-input");
let submitBtn = document.getElementById("submit-btn");
let emailName = document.getElementById("input-value");
let container = document.getElementById("container");

const originalContent = container.innerHTML;

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
        <h1 class="thanks-heading">
        Thanks for Subscribing!
        </h1>
        <p class="text confirm-text">
        A confirmation email has been sent to
         <span class="bold"> ${emailRecepient}</span>. 
        Please open it and click<br/> the button
        inside to confirm your subscription.
        </p>
        <button type="submit" id="closing-btn">
        Dismiss message
        </button>
  `;

    container.style.textAlign = "left";

    container.innerHTML = newContent;
    let closingBtn = document.getElementById("closing-btn");
    closingBtn.addEventListener("click", resetNow);
  }, 6000);
  container.style.display = "block";
  container.style.width = "300px";
}

function resetNow() {
  container.innerHTML = originalContent;
  container.style.display = "flex";
  container.style.width = "650px";
}

formElement.addEventListener("submit", subscribeNow);
