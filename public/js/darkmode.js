// Just use it
const currentTheme = localStorage.getItem("theme");
const documentStyle = getComputedStyle(document.documentElement);

const darkboxLabel = document.getElementById("darkboxLabel"); // Label ID
const darkbox = document.getElementById("darkbox"); // Checkbox ID
const black = "black"; // Name of the black propriety
const white = "white"; // Name of the white propriety

const blackHex = documentStyle.getPropertyValue(`--${black}`);
const whiteHex = documentStyle.getPropertyValue(`--${white}`);

function goDark() {
  document.documentElement.style.setProperty(`--${black}`, whiteHex);
  document.documentElement.style.setProperty(`--${white}`, blackHex);
}

function goLight() {
  document.documentElement.style.setProperty(`--${black}`, blackHex);
  document.documentElement.style.setProperty(`--${white}`, whiteHex);
}

if (currentTheme == "dark") {
  goDark();
  darkbox.checked = true;
}

darkbox.addEventListener("change", function () {
  let theme = "light";
  if (blackHex == whiteHex || this.checked == true) {
    theme = "dark";
    goDark();
  } else {
    goLight();
    theme = "light";
  }
  localStorage.setItem("theme", theme);
});
