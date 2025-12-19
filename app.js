const mq = window.matchMedia("(min-width: 1050px)");
const imgEl = document.getElementById("img");
console.log(imgEl);


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
