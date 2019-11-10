<?php

$headers .= 'Reply-To: '.$_POST['from']. "\r\n";
$headers .= 'Return-Path: info@practiceq.com'."\r\n";
$headers .= 'From:$_POST["name"] <' .$_POST["from"]. '>\r\n';
$headers .= 'MIME-Version: 1.0'."\r\n";
$headers .= 'Content-type: text/plain; charset=iso-8859-1'."\r\n";
$headers .= 'Content-Transfer-Encoding: binary';
$headers .= 'X-Priority: 3\r\n';
$headers .= 'X-Mailer: PHP'. phpversion() .'\r\n';

// the message
$msg = $_POST['msg'];

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
mail('info@practiceq.com',"Practice Q - Contact", $msg, $headers );

          echo json_encode( array('msg' => "msg", 'header' => $headers ));   


?>