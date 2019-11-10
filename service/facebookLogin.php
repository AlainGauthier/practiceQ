<?php
header('Content-Type: application/json');

$con = mysqli_connect(localhost,"pract831_admin","1VvpGb!)k-#Z","pract831_practiceQ");
// Check connection
if (mysqli_connect_errno()){
  echo json_encode( ['err' => "SOMETHING WRONG!, WE'RE CHECKING IT!"]);
  return;
}

if ( $_POST['token'] == ''){
          echo json_encode( ['err' => "INVALID TOKEN"]); 
          $con->close(); 
          return;
}


$query = mysqli_query($con, "SELECT * FROM user WHERE email ='".$_POST['email']."'");
if(mysqli_num_rows($query) > 0){
    
	while($row = $query->fetch_assoc()) {
	   $id =  $row["id"];
	   $password = $row["password"];
	   $avatar = $row["avatar"];
	   $email  = $row["email"];
	   $username = $row["username"];
	}

     $extToken = $_POST['token'];
     $token = bin2hex(openssl_random_pseudo_bytes(16));

     $sql = "INSERT INTO token (userId, token, ext_token ) VALUES ('".$id."', '".$token."', '".$extToken."')";
     if ($con->query($sql) === TRUE)
          echo json_encode( ['token' => $token, 'username' =>  $username, 'avatar' => $avatar, 'email' =>  $email, 'id' => $id ] );
     else {
          echo json_encode( ['err' => "SOMETHING WRONG!, WE'RE CHECKING IT!!"]);   
     }

}
else {
          echo json_encode( ['err' => "INVALID CREDENTIAL"]);  
          return;
}

     

$con->close();
?>


