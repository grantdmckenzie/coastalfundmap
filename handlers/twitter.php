<?php

  error_reporting(E_ALL);
  ini_set('display_errors', 1);

  require 'connection_details.php';
  $dbconn = pg_connect("host=stko-testing.geog.ucsb.edu port=5432 dbname=".$db_2." user=".$db_user." password=".$db_pass);
    
  $query = "select * from coast_tweets order by created_at desc limit 200";
  
  $result = pg_query($dbconn, $query);
  
  $data = array();
  while($row = pg_fetch_object($result)) {
      
      $data[] = $row;
  }
  echo json_encode($data);

?>
