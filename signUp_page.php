<?php
$data = $_POST;
$errors = array();
if(isset($data['do_signUp'])){
    if ($data['login'] == ''){
        $errors[] = "Введите имя пользователя";
    }

    if(empty($errors)){
        $user = $data['login'];
      session_start();

      $_SESSION['newsession'] = $user;
        header("Location: index.php"); exit;
        echo "<div>Регистрация успешна. Ваша сессия:". $_SESSION['newsession']."</div><hr>";
    }
    else{
        echo "<div>".array_shift($errors)."</div><hr>";
    }
}

?>
<form action="/signUp_page.php" method="post">
    <p>
    <p><strong>Логин</strong>:</p>
    <input type="text" name="login" value="<?php echo @$data['login'];?>" >
    </p>
    <button type="submit" name="do_signUp">Зарегестрироваться</button>
</form>