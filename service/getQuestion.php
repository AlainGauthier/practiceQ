<?php

header('Content-Type: application/json');
$con = mysqli_connect(localhost,"pract831_admin","1VvpGb!)k-#Z","pract831_practiceQ");
// Check connection
if (mysqli_connect_errno()){
  echo json_encode( array('err' => "Something Wrong Internaly, we are looking into it!"));
  return;
}

$sql = "SELECT * FROM questions WHERE qId ='". $_GET['qId'] ."'";
$query = mysqli_query($con, $sql );
$qArray = array();
if (mysqli_num_rows($query) > 0) {
     while ($row = $query->fetch_assoc()) {
           $qArray[] = $row;
    } 
} 
  
echo json_encode( array('question' => $qArray) );

?>