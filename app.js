const mq = window.matchMedia("(min-width: 1050px)");
const imgEl = document.getElementById("img");
console.log(imgEl);
const emailInput = document.getElementById("email-input");
console.log(emailInput);
const buttonEl = document.getElementById("send-button");

const successEl = document.getElementById("success");
const normalEl = document.getElementById("normal");

function applyLayout(e) {
  if (e.matches) {
    // >= 1050px
    imgEl.src = "./assets/images/desktop-img.svg";
  } else {
    // < 1050px
    imgEl.src = "./assets/images/mobile-img.svg";
  }
}

// estado inicial
applyLayout(mq);

// escuchar cambios
mq.addEventListener("change", applyLayout);

buttonEl.addEventListener("click", function () {
  if (validateEmail(emailInput.value)) {
    successEl.classList.toggle("hidden");
    normalEl.classList.toggle("hidden");
    emailInput.style.outline = "2px solid green"
    console.log("Correcto!!");
  } else {
    emailInput.style.outline = "2px solid red"
  }
});


const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
