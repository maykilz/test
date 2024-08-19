<?
$login =$_POST['username'];
$password = md5($_POST['password']);
$role = $_POST['role']; 
$rang = $_POST['rang'];   
$name = $_POST['name']; 
$surname = $_POST['surname'];

 
if (
    preg_match('~[\\\/:*?"\'<>|]~', $login) )
  {
    print('Ошибка регистрации, уберите лишние символы'); 
    exit(); 
} else {
 
include('dbconnect.php');
$insertSql = "INSERT INTO users (login, password, role, rang, name, surname) VALUES ('$login', '$password', '$role', '$rang', '$name', '$surname')";
$result = mysqli_query($db, $insertSql);
if ($db == false) { 
    print("Ошибка соединения". mysqli_connect_error());}
  
if ($result) { 
    print('Регистрация прошла успешно');
    echo '<br><button><a href="login.html">Авторизация</a></button>'  ;
}
else {
    print('Регистрация не успешна');

} 
}

?>