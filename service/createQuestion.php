<?php

header('Content-Type: application/json');
$con = mysqli_connect(localhost,"pract831_admin","1VvpGb!)k-#Z","pract831_practiceQ");
// Check connection
if (mysqli_connect_errno()){
  echo json_encode( array('err' => "Something Wrong Internaly, we are looking into it!"));
  return;
}


$sql = "INSERT INTO questions (qSetId, question, time) VALUES ('".$_POST['qSetId']."','".$_POST['question']."', '".$_POST['time']."')";
if ($con->query($sql) === TRUE) {
	echo json_encode(array('msg' => "Question added"));
}
else{
	echo json_encode(array('msg' => "The question could be added"));
}


?>