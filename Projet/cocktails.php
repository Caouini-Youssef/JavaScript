<?php
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

$obj = new stdClass();
$obj->success = false;
$obj->message = 'Erreur';

if (isset($_GET['cocktails']))
{
    if ($_GET['cocktails'] === "ALL")
    {
        $obj->success = true;
        //REQUETE SQL
    }
    else
    {
        if (false)
        {
            $obj->success = true;
        }
        else{
            $obj->message = "ALL";
        }
    }
}
else
{
    $obj->message = "SET";
}

echo json_encode($obj);