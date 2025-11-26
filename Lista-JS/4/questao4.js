document.getElementById("imcForm").addEventListener("submit", (e) => {
	e.preventDefault();

	const peso = parseFloat(document.getElementById("peso").value);
	const altura = parseFloat(document.getElementById("altura").value);
	const resultDiv = document.getElementById("resultadoIMC");
	const imgPerfil = document.getElementById("imgPerfil");

	if (
		!Number.isFinite(peso) ||
		!Number.isFinite(altura) ||
		peso <= 0 ||
		altura <= 0
	) {
		resultDiv.textContent = "Preencha todos os campos corretamente!";
		imgPerfil.style.display = "none";
		return;
	}

	const imc = peso / (altura * altura);

	function getCategoryAndImage(imc) {
		if (imc < 18.5)
			return { label: "Abaixo do peso", img: "/Lista1/4/img/abaixopeso.png" };
		if (imc < 24.9)
			return { label: "Peso normal", img: "/Lista1/4/img/normal.png" };
		if (imc < 29.9)
			return { label: "Sobrepeso", img: "/Lista1/4/img/sobrepeso.png" };
		if (imc < 34.9)
			return { label: "Obesidade grau 1", img: "/Lista1/4/img/obesidade1.png" };
		if (imc < 39.9)
			return { label: "Obesidade grau 2", img: "/Lista1/4/img/obesidade2.png" };
		return {
			label: "Obesidade grau 3 (mórbida)",
			img: "/Lista1/4/img/obesidade3.png",
		};
	}

	const { label, img } = getCategoryAndImage(imc);
	resultDiv.textContent = `IMC: ${imc.toFixed(2)} - ${label}`;
	imgPerfil.src = img;
	imgPerfil.style.display = "block";
});
