<?php
header('Content-Type: application/json');

$con = mysqli_connect(localhost,"pract831_admin","1VvpGb!)k-#Z","pract831_practiceQ");
// Check connection
if (mysqli_connect_errno()){
  echo json_encode( ['err' => "Something Wrong Internaly, we are looking into it!"]);
  return;
}

$query = "DELETE FROM token WHERE token ='" . $_POST['token'] . "'";
if ($con->query($query) === TRUE) {
    echo json_encode(['msg' => "logout succesfuuly." ]);
    return; 
} else{
    echo json_encode(['err' =>  "Oops! please login again." ]);
    return;
}

$con->close();
?>


