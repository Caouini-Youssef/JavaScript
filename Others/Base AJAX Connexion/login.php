<?php
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

session_start();

$obj = new stdClass();
$obj->success = false;
$obj->message = 'Erreur';

if (isset($_POST['username']) && isset($_POST['password'])) {
    if ($_POST['username'] === 'test' && $_POST['password'] === 'test') {
        $_SESSION['username'] = $_POST['username'];
        $_SESSION['password'] = $_POST['password'];
        $obj->success = true;
    } else {
        $obj->message = 'Nom d\'utilisateur ou mot de passe incorrect';
    }
}
echo json_encode($obj);