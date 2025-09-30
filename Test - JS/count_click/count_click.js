var i = 0;

btn = document.createElement("button");
btn.id = "btn";
btn.innerText = "Clica ae faz favor";

prg = document.createElement("p");
prg.id = "prg";

document.body.appendChild(btn);
document.body.appendChild(prg);

document.body.style.height = "100vh";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.flexDirection = "column";

addEventListener;
btn.addEventListener("click", () => {
	i++;
	prg.innerText = i;
});
