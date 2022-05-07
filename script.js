const toggleButton = document.querySelector('input[type= "checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image-1");
const image2 = document.getElementById("image-2");
const image3 = document.getElementById("image-3");
const textBox = document.getElementById("text-box");
const slide = document.querySelector(".slider");

// listen for Dark and Light Mode;
function darkTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    DarkLightMode("dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    DarkLightMode("Light");
  }
}

function DarkLightMode(mood) {
  textBox.style.backgroundColor =
    mood === "dark" ? "rgb(255 255 255 / 50%)" : "";
  nav.style.backgroundColor = mood == "dark" ? "rgb(0 0 0 / 50%)" : "";
  toggleIcon.children[0].innerHTML = `${mood} Mode`.toUpperCase();
  toggleIcon.children[1].classList.toggle("fa-moon");
  toggleIcon.children[1].classList.toggle("fa-sun");

  image1.src = `img/${mood}-apps-on-mobile.png`;
  image2.src = `img/${mood}-on-chair.png`;
  image3.src = `img/${mood}-presentation.png`;
}

// Add event listener for switch button
toggleButton.addEventListener("change", darkTheme);

const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleButton.checked = true;
    DarkLightMode("dark");
  }
}
