<?php

header('Content-Type: application/json');
$con = mysqli_connect(localhost,"pract831_admin","1VvpGb!)k-#Z","pract831_practiceQ");
// Check connection
if (mysqli_connect_errno()){
  echo json_encode( array('err' => "Something Wrong Internaly, we are looking into it!", 'field' => 'gen'));
  return;
}

$query = mysqli_query($con, "SELECT * FROM token WHERE token ='" . $_POST['token'] . "'");
if (mysqli_num_rows($query) > 0) {
     while ($row = $query->fetch_assoc()) {
        $userId = $row["userId"];
     }
} else{
    echo json_encode(['err' => "Oops! please login again." , 'field' => 'gen']);
    return;
}

$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);
$username = $_POST['username'];

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  echo json_encode( array('err' => "Invalid email format" , 'field' => 'email'  ));
  return;
}

$sql = "UPDATE user SET  email='".$email."', infinit='".$_POST['infinit']."', random='".$_POST['random']."', color='".$_POST['color']."' WHERE id = '" . $userId . "'";
if ($con->query($sql) === TRUE) { 
  echo json_encode(['msg' => 'user updated']);
}
else {
  echo json_encode( array('err' => "Something Wrong Internaly, we are looking into it!", 'field' => 'gen'));
}

$con->close();

?>