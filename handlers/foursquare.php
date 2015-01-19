<?php

  error_reporting(E_ALL);
  ini_set('display_errors', 1);

  require 'connection_details.php';
  $dbconn = pg_connect("host=stko-testing.geog.ucsb.edu port=5432 dbname=".$db_db." user=".$db_user." password=".$db_pass);
    
  $query = "select a.id, a.lat, a.lng, a.name, b.name as cat from coastboundary, foursquare a left join categories b on substring(trim(a.cats) from 0 for 25) = b.category WHERE st_intersects(st_geomfromtext('POINT('||a.lng||' '||a.lat||')',4326), coastboundary.geom) and b.name != 'Home (private)'";
  
  $result = pg_query($dbconn, $query);
  
  $data = array();
  while($row = pg_fetch_object($result)) {
      
      $data[] = $row;
  }
  echo json_encode($data);

?>
