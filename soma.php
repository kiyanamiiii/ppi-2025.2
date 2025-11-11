<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Soma</title>
</head>

<body>
    <h1>Soma</h1>
    <div>Informe n1 e n2 na url</div>
    <?php
    $n1 = $_GET['n1'];
    $n2 = $_GET['n2'];
    $soma = $n1 + $n2;
    ?>
</body>

</html>