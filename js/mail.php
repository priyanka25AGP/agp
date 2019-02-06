<?php
$name = $_POST["name"]
$email = $_POST["email"]
$msg =  $_POST["message"]

$formContent = "From: $name \n Email: $email" \n Message: $msg;

$recipient = "agpriyanka82@gmail";
$mailHeader ="From: $email \r\n";
// send email
mail($recipient,$formContent,$mailHeader) or die(error);
echo "Thank You!!";
?>
