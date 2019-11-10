<?php

header('Content-Type: application/json');
$con = mysqli_connect(localhost,"pract831_admin","1VvpGb!)k-#Z","pract831_practiceQ");
// Check connection
if (mysqli_connect_errno()){
  echo json_encode( array('err' => "Something Wrong Internaly, we are looking into it!"));
  return;
}

$query = mysqli_query($con, "SELECT * FROM token WHERE token ='" . $_POST['token'] . "'");
if (mysqli_num_rows($query) > 0) {
     while ($row = $query->fetch_assoc()) {
        $userId = $row["userId"];
     }
} else{
    $userId = '';
}


$query = mysqli_query($con, "INSERT INTO qSet (title, createdBy) VALUES ('".$_POST['qtitle']."', '".$userId."')" );
$query = mysqli_query($con, "SELECT * FROM qSet WHERE id = '".  mysqli_insert_id($con)."'" );
$qSet = array();
if (mysqli_num_rows($query) > 0) {
    while ($row = $query->fetch_assoc()) {
           $qSet[] = $row;
     }

	echo json_encode( array('qSet' => $qSet, 'question' => array() ));
} 

?>