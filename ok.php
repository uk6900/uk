<?php
 $servername = "127.0.0.1:3306";
 $usrname = "root";
 $password = "";
 $dbname = "video";
 
 $conn = new mysqli($servername, $usrname, $password, $dbname);
 
 if ($conn -> connect_errno) {
   echo "Failed to connect to MySQL: " . $conn -> connect_error;
   exit();
 };
?>
<!doctype html>
<html>
  <head>
    <style>
    video{
     float: left;
    }
    </style>
  </head>
  <body>
    <div>
 
     <?php
     $fetchVideos = mysqli_query($conn, "SELECT location FROM video ORDER BY id DESC");
     while($row = mysqli_fetch_assoc($fetchVideos)){
       $location = $row['location'];
 
       echo "<div >";
       echo "<video src='".$location."' controls width='320px' height='200px' >";
       echo "</div>";
     }
     ?>
 
    </div>

  </body>
</html>