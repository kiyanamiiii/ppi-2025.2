const numerosSorteados = [];

document.getElementById("sorteioForm").addEventListener("submit", (e) => {
	e.preventDefault();

	const min = parseInt(document.getElementById("minimo").value, 10);
	const max = parseInt(document.getElementById("maximo").value, 10);
	const listaSorteio = document.getElementById("listaSorteio");

	if (!Number.isInteger(min) || !Number.isInteger(max) || min > max) {
		alert("Informe valores inteiros válidos e com mínimo ≤ máximo.");
		return;
	}

	function getRandomInteger(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	const sorteado = getRandomInteger(min, max);
	alert(`Número sorteado: ${sorteado}`);
	numerosSorteados.push(sorteado);
	console.log(numerosSorteados);

	const listItem = document.createElement("li");
	listItem.textContent = sorteado;
	listaSorteio.appendChild(listItem);
});
