const firstColor = document.getElementById("firstColor");
const secondColor = document.getElementById("secondColor");
const submit = document.getElementById("submit");
const background = document.querySelector(".right");

function toRGB(hex) {
  if (hex.length == 7) {
    hex = hex.slice(1);
  } else if (hex.length != 6) {
    throw "Only six-digit hex colors are allowed.";
  }

  var aRgbHex = hex.match(/.{1,2}/g);
  var aRgb = [
    parseInt(aRgbHex[0], 16),
    parseInt(aRgbHex[1], 16),
    parseInt(aRgbHex[2], 16),
  ];
  return aRgb;
}

submit.addEventListener("click", () => {
  const first = toRGB(firstColor.value);
  const second = toRGB(secondColor.value);
  const result = [
    Math.round((first[0] + second[0]) / 2),
    Math.round((first[1] + second[1]) / 2),
    Math.round((first[2] + second[2]) / 2),
  ];

  background.style.backgroundColor = `rgb(${result[0]}, ${result[1]}, ${result[2]})`;
});
