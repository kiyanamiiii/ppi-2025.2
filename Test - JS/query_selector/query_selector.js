let title1 = document.querySelector("#title1");
let title2 = document.querySelector("#title2");

title1.style.color = "blue";
title2.style.fontSize = "20px";

for (let i = 0; i < title.length; i++) {
	title[i].innerHTML = i;
}

array.forEach((element) => {
	element.innerHTML += "-" + i;
});
