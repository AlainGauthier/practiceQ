<?php

header('Content-Type: application/json');
$con = mysqli_connect(localhost,"pract831_admin","1VvpGb!)k-#Z","pract831_practiceQ");
// Check connection
if (mysqli_connect_errno()){
  echo json_encode( array('err' => "Something Wrong Internaly, we are looking into it!"));
  return;
}


$sql = "UPDATE qSet SET view= view + 1 WHERE id='".$_POST['qsetid']."'";

if ($con->query($sql) === TRUE) {
	echo json_encode(array('msg' => "Question view was incremented"));
}
else{
	echo json_encode(array('msg' => "Question view was not incremented"));
}


?>