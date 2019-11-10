<?php

header('Content-Type: application/json');
$con = mysqli_connect(localhost,"pract831_admin","1VvpGb!)k-#Z","pract831_practiceQ");
// Check connection
if (mysqli_connect_errno()){
  echo json_encode( ['err' => "Something Wrong Internaly, we are looking into it!"]);
  return;
}


$query = mysqli_query($con, "SELECT * FROM token WHERE token ='" . $_POST['token'] . "'");
if (mysqli_num_rows($query) > 0) {
     while ($row = $query->fetch_assoc()) {
        $userId = $row["userId"];
     }
} else{
    echo json_encode(['err' => "Oops! Image not uploaded, please login again." ]);
    return;
}


$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
$target_file = $target_dir . 'service/' .  bin2hex(openssl_random_pseudo_bytes(16)) .  "." . $imageFileType;

// ------------------------------------------------------------------------
// Check if image file is a actual image or fake image
// ------------------------------------------------------------------------
if (isset($_POST["submit"])) {
     $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
     if ($check !== false) {
          echo json_encode(['err' => "File is an image - " . $check["mime"] . "."]);
          $uploadOk = 1;
     }
     else {
          echo json_encode(['err' => "File is not an image."]);
          $uploadOk = 0;
          return;
     }
}

// ------------------------------------------------------------------------
// Check file size
// ------------------------------------------------------------------------
if ($_FILES["fileToUpload"]["size"] > 2000000) {
     echo json_encode(['err' => "Oops, your file is larger than 2MB."]);
     $uploadOk = 0;
     return;
}
// ------------------------------------------------------------------------
// Allow certain file formats
// ------------------------------------------------------------------------
if ($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif" && $imageFileType != "tiff") {
     echo json_encode(['err' => "No no, only JPG, JPEG, PNG, TIFF & GIF files are allowed."]);
     $uploadOk = 0;
          return;
}
// ------------------------------------------------------------------------
// Check if $uploadOk is set to 0 by an error
// ------------------------------------------------------------------------
if ($uploadOk == 0) {
     echo json_encode(['err' => "Sorry, your file was not uploaded."]);
              return;
 // if everything is ok, try to upload file
}
else {
     if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
         
               $sql = "UPDATE user SET avatar='".$target_file."' WHERE id = '" . $userId . "'";
               if ($con->query($sql) === TRUE) {
		         echo json_encode(['file' => '/service/' . $target_file]);
               }
          
     }
     else {
          echo json_encode(['err' => "Sorry, there was an error uploading your file."]);
     }
}
?>