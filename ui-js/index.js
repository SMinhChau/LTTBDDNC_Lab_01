const h3A = document.createElement("h3");
const h3B = document.createElement("h3");

h3A.innerText = "A: ";
var inputA = document.createElement("INPUT");
inputA.setAttribute("type", "number");

h3B.innerText = "B: ";
var inputB = document.createElement("INPUT");
inputB.setAttribute("type", "number");

const button = document.createElement("button");
button.innerText = "Total";

button.addEventListener("click", () => {
  value = Number(inputB.value) + Number(inputB.value);
  alert(value);
});

inputA.style.height = "15";
inputB.style.height = "15";

button.style.display = "block";
button.style.marginTop = "10px";
button.style.height = "30px";
button.style.width = "50px";

document.body.appendChild(h3A);
document.body.appendChild(inputA);
document.body.appendChild(h3B);
document.body.appendChild(inputB);
document.body.appendChild(button);
document.body.appendChild(output);
