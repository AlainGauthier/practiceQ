<?php

header('Content-Type: application/json');
$con = mysqli_connect(localhost,"pract831_admin","1VvpGb!)k-#Z","pract831_practiceQ");
// Check connection
if (mysqli_connect_errno()){
  echo json_encode( array('err' => "SOMETHING WRONG!, WE'RE CHECKING IT!!"));
  return;
}

$query = mysqli_query($con, "SELECT * FROM token WHERE token ='" . $_POST['token'] . "'");
if (mysqli_num_rows($query) > 0) {
     while ($row = $query->fetch_assoc()) {
        $userId = $row["userId"];
     }
} else{
    echo json_encode(['err' => "Oops! PLEASE LOGIN AGAIN" ]);
    return;
}

$query = mysqli_query($con, "SELECT avatar, color, email, id, infinit, random, username FROM user WHERE id = '".$userId."'" );
$qArray = array();

if (mysqli_num_rows($query) > 0) {
     while ($row = $query->fetch_assoc()) {
           $qArray[] = $row;
    } 
} 
echo json_encode( array('user' => $qArray) );


?>