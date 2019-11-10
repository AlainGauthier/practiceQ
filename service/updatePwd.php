<?php

header('Content-Type: application/json');
$con = mysqli_connect(localhost,"pract831_admin","1VvpGb!)k-#Z","pract831_practiceQ");
// Check connection
if (mysqli_connect_errno()){
  echo json_encode( array('err' => "SOMETHING WRONG!, WE'RE CHECKING IT!", 'field' => 'gen'));
  return;
}

$query = mysqli_query($con, "SELECT * FROM token WHERE token ='" . $_POST['token'] . "' AND reset = '1' AND timestamp BETWEEN DATE_SUB(NOW(), INTERVAL 1 DAY) AND NOW()");
if (mysqli_num_rows($query) > 0) {
     while ($row = $query->fetch_assoc()) {
        $userId = $row["userId"];
     }
} else{
    echo json_encode(['err' => "Oops! PLEASE REQUEST A NEW PASSWORD." , 'field' => 'gen']);
    return;
}

$password = password_hash($_POST['password'], PASSWORD_DEFAULT);


$sql = "UPDATE user SET password='".$password."' WHERE id = '" . $userId . "'";
if ($con->query($sql) === TRUE) { 
  echo json_encode(['msg' => 'PASSWWORD UPDATED SUCESSFULLY!']);
  $query = mysqli_query($con, "DELETE FROM token WHERE userId ='" . $userId . "' AND reset = '1' ");

}
else {
  echo json_encode( array('err' => "SOMETHING Wrong!, WE'RE CHECKING IT!", 'field' => 'gen'));
}

$con->close();

?>