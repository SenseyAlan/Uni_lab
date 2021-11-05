<?php
    session_start();
?>
<body>
Тест 1:
<?php
echo "Hello, World!<br>"
?>
Тест 2:
<?php echo 2+2;

    if ($_SESSION['newsession']!=''){
        echo "<div>Здавствуйте ". $_SESSION['newsession']."</div>";
    }
?>
<br>
<a href="signUp_page.php">Регистрация</a>
</body>
