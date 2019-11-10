<?php


header('Content-Type: application/json');
$con = mysqli_connect(localhost,"pract831_admin","1VvpGb!)k-#Z","pract831_practiceQ");
// Check connection
if (mysqli_connect_errno()){
  echo json_encode( array('err' => "Something Wrong Internaly, we are looking into it!", 'field' => 'gen'));
  return;
}

$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);
$username = $_POST['username'];

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  echo json_encode( array('err' => "Invalid email format" , 'field' => 'email' ));
  return;
}

$query = mysqli_query($con, "SELECT * FROM user WHERE email ='".$email."'");
if(mysqli_num_rows($query) > 0){
     echo json_encode( array('err' =>  "Oops! There's already a user with that email", 'field' => 'email'));
    return;
}

$query = mysqli_query($con, "SELECT * FROM user WHERE username ='".$username."'");
if(mysqli_num_rows($query) > 0){
     echo json_encode( array('err' =>  "This user is taken, try another one", 'field' => 'user'));
    return; 
}

$sql =  "INSERT INTO user (username, email, infinit, random, color, password ) VALUES ('".$username."', '". $email . "', '".$_POST['infinit']."','".$_POST['random']."','".$_POST['color']."','" .$password."')"  ;

if ($con->query($sql) === TRUE) {
     $token = bin2hex(openssl_random_pseudo_bytes(16));
     $sql = "INSERT INTO token (userId, token ) VALUES ('".$con->insert_id."', '".$token."')";
     if ($con->query($sql) === TRUE)
          echo json_encode( array('token' => $token, 'username' =>  $username, 'id' => $con->insert_id));
     else {
          echo json_encode( array('err' => "Something Wrong Internaly, we are looking into it!", 'field' => 'gen'));   
     }
} 
else {
  echo json_encode( array('err' => "Something Wrong Internaly, we are looking into it!", 'field' => 'gen'));
}

$con->close();


?>