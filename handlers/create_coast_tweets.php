<?php

  require '/var/www/html/coast/handlers/connection_details.php';
  $dbconn = pg_connect("host=stko-testing.geog.ucsb.edu port=5432 dbname=".$db_db." user=".$db_user." password=".$db_pass);
    
  $query = "drop table coast_tweets; create table coast_tweets as select tweets.id, tweets.created_at, tweets.tweet, tweets.lat, tweets.lng, tweets.src from tweets, coastboundary where st_intersects(st_geomfromtext('POINT('||lng||' '||lat||')',4326), geom); grant all on coast_tweets to instagram;";

  pg_query($dbconn, $query) or die();

?>