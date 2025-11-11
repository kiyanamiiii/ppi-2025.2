<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teste</title>
</head>

<body>
    salve

    <?php
    echo "Olá, Mundo!";
    $nome = "salve";
    echo "<br>Bem vindo, $nome!";
    ?>

    <h2>Diabo dos Infernos</h2>
    <?php
    $a = 10;
    $b = 5;
    $soma = $a + $b;
    echo "soma dos dois valores 
        " . "$soma <br>";
    ?>

    <h2>Deus das ...</h2>
    <?php
    $situacao = $soma > 15 ? "maior" : "menor";
    echo "a soma é $situacao que 15 <br>";
    ?>

    <h2>Array em PhP</h2>
    <?php
    $array = array("1", "2", "3");

    for ($i = 0; $i < count($array); $i++) {
        echo $array[$i] . "<br>";
    }

    foreach ($array as $elemento) {
        echo "elemento: " . $elemento . "<br>";
    }
    ?>

    <h2>Array sinistro</h2>
    <?php
    $vetor = array(
        'nome' => 'daniel',
        'sobrenome' => 'silva',
        'idade' => '25'
    );

    echo "nome: " . $vetor['nome'] . "<br>";
    echo "sobrenome: " . $vetor['sobrenome'] . "<br>";
    echo "idade: " . $vetor['idade'];
    ?>

    <h2>Variaveis de ambiente</h2>
    <?php
    $n1 = $_GET['n1'];
    $n2 = $_GET['n2'];
    $soma = $n1 + $n2;
    ?>

    <form action="" method="get">
        <input type="number" placeholder="numero1" id="inputN1" name="n1">
        <br>
        <input type="number" placeholder="numero2" id="inputN1" name="n2">
        <br>
        <input type="submit" name="" id="" value="Calcular">
    </form>
    <?php
    if (isset($_GET['n1'])) {
        echo $soma;
    }
    ?>
</body>

</html>