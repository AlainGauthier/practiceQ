<?php


header('Content-Type: application/json');
$con = mysqli_connect(localhost,"pract831_admin","1VvpGb!)k-#Z","pract831_practiceQ");
// Check connection
if (mysqli_connect_errno()){
  echo json_encode( array('err' => "Something Wrong Internaly, we are looking into it!", 'field' => 'gen'));
  return;
}

$email = $_POST['email'];


$query = mysqli_query($con, "SELECT * FROM user WHERE email ='".$email."'");
if (mysqli_num_rows($query) > 0) {
     while ($row = $query->fetch_assoc()) {
        $userId = $row["id"];
     }
} else{
    echo json_encode(['err' => "There is no account associated with this email!" , 'field' => 'email']);
    return;
}

$token = bin2hex(openssl_random_pseudo_bytes(16));
$sql = "INSERT INTO token (userId, token, reset ) VALUES ('". $userId ."', '".$token."', '1')";
if (!$con->query($sql) === TRUE){
     echo json_encode( array('err' => "Something Wrong Internaly, we are looking into it!", 'field' => 'gen'));   
}
else{


$headers .= 'Reply-To: info@practiceq.com'. "\r\n";
$headers .= 'Return-Path: info@practiceq.com'."\r\n";
$headers .= 'From: Practice Q <info@practiceq.com>'. "\r\n";
$headers .= 'MIME-Version: 1.0'."\r\n";
$headers .= 'Content-type: text/plain; charset=iso-8859-1'."\r\n";
$headers .= 'Content-Transfer-Encoding: binary';
$headers .= 'X-Priority: 3\r\n';
$headers .= 'X-Mailer: PHP'. phpversion() .'\r\n';

// the message
$msg = "Please follow this link to reset your password: http://practiceq.com?reset=" .$token."\r\n\r\n - Practice Q";

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
mail($email,"Practice Q - password reset", $msg, $headers );

     echo json_encode( array('msg' => "Check your e-mail", 'field' => 'gen'));   
}

$con->close();

?>