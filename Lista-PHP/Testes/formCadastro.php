<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IMC</title>
</head>

<body>
    <h2>Cálculo do IMC</h2>
    <form action="imc.php" method="get">
        <label for="iname">Nome: </label>
        <input type="text" id="iname" name="nome">
        <br>
        <label for="iemail">E-mail</label>
        <input type="email" name="email" id="iemail">
        <br>
        <label for="iweight">Peso (kg): </label>
        <input type="number" id="iweight" name="peso" required>
        <br>
        <label for="iheight">Altura (m): </label>
        <input type="number" id="iheight" name="altura" required>
        <br>
        <input type="submit" value="Calcular IMC">
    </form>
</body>

</html>