<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

    require 'connection_details.php';
    
    $url = "https://api.instagram.com/v1/media/search?lat=34.41&lng=-119.86&distance=5000&access_token=".$access_token."&min_timestamp=".(time() - 604800);	// last 7 days
  
    $dbconn = pg_connect("host=localhost port=5432 dbname=".$db_db." user=".$db_user." password=".$db_pass);
    
    function fetchData($url){
      $ch = curl_init();
      curl_setopt($ch, CURLOPT_URL, $url);
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
      curl_setopt($ch, CURLOPT_TIMEOUT, 20);
      $result = curl_exec($ch);
      curl_close($ch); 
      return $result;
    }
    
    $result = fetchData($url);
    $data = json_decode($result);
    // echo count($data->data);
    
    if ($data->meta->code == "200") {
	// $d = array();
	foreach($data->data as $photo) {
	  if (isset($photo->images)) {
	    $a = (Object)array();
	    $a->id = "'".$photo->id."'";
	    $a->lat = $photo->location->latitude;
	    $a->lng = $photo->location->longitude;
	    $a->loc = isset($photo->location->name) ? "'".pg_escape_string($photo->location->name)."'" : "''";
	    $a->userid = $photo->user->id;
	    $a->username = "'".pg_escape_string($photo->user->username)."'";
	    $a->fullname = "'".pg_escape_string($photo->user->full_name)."'";
	    $a->userphoto = "'".$photo->user->profile_picture."'";
	    $a->caption = isset($photo->caption->text) ? "'".pg_escape_string($photo->caption->text)."'" : "''";
	    $a->ts = $photo->created_time;
	    $a->filter = "'".pg_escape_string($photo->filter)."'";
	    $a->photo_thumb = "'".$photo->images->thumbnail->url."'";
	    $a->photo_full = "'".$photo->images->standard_resolution->url."'";
	    toDB($a);
	  }
	}
    }

    
    function toDB($a) {
	global $dbconn;
	$query = "SELECT ignore_instagram(";
	foreach($a as $key=>$val) {
	    $query .= $val .",";
	}
	$query = rtrim($query,",");
	$query .=")";
	// echo $query . "\n";
	pg_query($dbconn, $query);
    }

?>