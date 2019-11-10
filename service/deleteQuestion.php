<?php

header('Content-Type: application/json');
$con = mysqli_connect(localhost,"pract831_admin","1VvpGb!)k-#Z","pract831_practiceQ");
// Check connection
if (mysqli_connect_errno()){
  echo json_encode( array('err' => "Something Wrong Internaly, we are looking into it!"));
  return;
}


$sql = "DELETE FROM questions WHERE qSetId ='".$_POST['qSetId']."' AND qId= '".$_POST['qId']."'";

if ($con->query($sql) === TRUE) {
	echo json_encode(array('msg' => "Question deleted"));
}
else{
	echo json_encode(array('msg' => "The question not could be deleted"));
}


?>