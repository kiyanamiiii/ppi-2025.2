for (
	let i = 0, nPrg = parseInt(prompt("How much paragraphs?"));
	i < nPrg;
	i++
) {
	let p = document.createElement("p");
	p.innerText = i + 1;
	document.body.appendChild(p);
}
