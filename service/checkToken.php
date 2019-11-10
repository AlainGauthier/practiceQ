<?php

header('Content-Type: application/json');
$con = mysqli_connect(localhost,"pract831_admin","1VvpGb!)k-#Z","pract831_practiceQ");
// Check connection
if (mysqli_connect_errno()){
  echo json_encode( array('err' => "Something Wrong Internaly, we are looking into it!"));
  return;
}

$query = mysqli_query($con, "SELECT * FROM token WHERE token ='" . $_POST['token'] . "' AND reset = '1' AND timestamp BETWEEN DATE_SUB(NOW(), INTERVAL 1 DAY) AND NOW()");
if (mysqli_num_rows($query) > 0) {
     
     echo json_encode( array('msg' => 'valid token') );

} else{
    echo json_encode(['err' => "Invalid token" ]);
    return;
}

$con->close();
?>