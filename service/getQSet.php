<?php

header('Content-Type: application/json');
$con = mysqli_connect(localhost,"pract831_admin","1VvpGb!)k-#Z","pract831_practiceQ");
// Check connection
if (mysqli_connect_errno()){
  echo json_encode( array('err' => "Something Wrong Internaly, we are looking into it!"));
  return;
}

//$query = mysqli_query($con, "SELECT * FROM qSet" );

$query = mysqli_query($con, "SELECT distinct qSet.id, qSet.title, qSet.view, qSet.createdBy FROM qSet INNER JOIN questions ON questions.qSetId = qSet.id");
if (mysqli_num_rows($query) > 0) {
    
     while ($row = $query->fetch_assoc()) {
           $qSetArray[] = $row;
           $sql = "SELECT * FROM questions WHERE qSetId= '".$row['id']."'";
           $result = mysqli_query($con, $sql );
           $sql = "SELECT avatar, username, id FROM user WHERE id= '".$row['createdBy']."'";
           $users = mysqli_query($con, $sql);
           if (mysqli_num_rows($users) > 0) {
	           while ($user = $users->fetch_assoc()) {
			      $userArray[] = $user;
			   }
           }
           $array[] = array('qSet' => $qSetArray, 'totalQ' => mysqli_num_rows($result), 'user' =>  $userArray);
           $qSetArray = array();
    }
    echo json_encode($array);     
} 
else{
    echo json_encode(array());
}

/*
$listId = "";
$result = mysqli_query($con, "SELECT *  FROM qSet q where not exists ( select * from questions where qSetId = q.Id )");
if (mysqli_num_rows($result) > 0) {
	 while ($row = $result->fetch_assoc()) {
		if ( !empty($listId) ){
			$listId = $listId .", " . $row['id']; 
		}
		else {
			$listId = $listId . $row['id']; 
		}
	 }
}
echo "DELETE FROM qSet WHERE id IN (".$listId .")";
*/
?>