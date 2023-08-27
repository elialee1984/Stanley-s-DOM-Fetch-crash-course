// 1.
const root = document.getElementById("root");

// 2.
const h1 = document.createElement("h1");

root.appendChild(h1);

// 3.
const secondUl = document.querySelector("#second-list");
const allUls = document.querySelectorAll("ul");

// 4.
const li = document.createElement("li");
allUls.appendChild(li);