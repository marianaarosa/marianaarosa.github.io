const title = "Projetos GitHub @codemariana";

function typeWriter(element, text, speed) {
  let i = 0;
  const interval = setInterval(() => {
    element.innerHTML += text.charAt(i);
    i++;
    if (i > text.length) clearInterval(interval);
  }, speed);
}

window.addEventListener("load", () => {
  const titleElement = document.getElementById("typing");
  typeWriter(titleElement, title, 100);
});
