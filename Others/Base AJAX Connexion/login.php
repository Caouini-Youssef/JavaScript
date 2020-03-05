<?php
    session_start();

    $obj = new stdClass();
    $obj->success = false;
    $obj->message = 'Nom d\'utilisateur ou mot de passe incorrect';

    if ($_POST['username'] === 'test' && $_POST['password'] === 'test')
    {
        $obj->success = true;
    }
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

echo json_encode($obj);
?>