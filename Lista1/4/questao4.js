document.getElementById("imcForm").addEventListener("submit", function (e) {
	e.preventDefault();

	const peso = parseFloat(document.getElementById("peso").value);
	const altura = parseFloat(document.getElementById("altura").value);
	const resultDiv = document.getElementById("result");
	const imgPerfil = document.getElementById("imgPerfil");

	if (!peso || !altura) {
		resultDiv.textContent = "Preencha todos os campos!";
		imgPerfil.style.display = "none";
		return;
	}

	const imc = peso / (altura * altura);
	let classificacao = "";

	if (imc < 18.5) {
		classificacao = "Abaixo do peso";
	} else if (imc < 24.9) {
		classificacao = "Peso normal";
	} else if (imc < 29.9) {
		classificacao = "Sobrepeso";
	} else if (imc < 34.9) {
		classificacao = "Obesidade grau 1";
	} else if (imc < 39.9) {
		classificacao = "Obesidade grau 2";
	} else {
		classificacao = "Obesidade grau 3 (mórbida)";
	}

	resultDiv.textContent = `IMC: ${imc.toFixed(2)} - ${classificacao}`;

	let faixa = Math.floor(imc);
	let imgSrc = "";
	switch (true) {
		case faixa < 18:
			imgSrc = "/Lista1/4/img/abaixopeso.png";
			break;
		case faixa < 25:
			imgSrc = "/Lista1/4/img/normal.png";
			break;
		case faixa < 30:
			imgSrc = "/Lista1/4/img/sobrepeso.png";
			break;
		case faixa < 35:
			imgSrc = "/Lista1/4/img/obesidade1.png";
			break;
		case faixa < 40:
			imgSrc = "/Lista1/4/img/obesidade2.png";
			break;
		default:
			imgSrc = "/Lista1/4/img/obesidade3.png";
	}
	imgPerfil.src = imgSrc;
	imgPerfil.style.display = "block";
});
