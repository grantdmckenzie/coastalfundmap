<?php

    require 'connection_details.inc';
    
    $url = "https://api.instagram.com/v1/media/search?lat=34.41&lng=-119.86&distance=5000&access_token=".$access_token;
    $ch = curl_init();
 

    curl_setopt($ch, CURLOPT_URL, $url);
 
    curl_setopt($ch, CURLOPT_USERAGENT, "MozillaXYZ/1.0");

    curl_setopt($ch, CURLOPT_HEADER, 1);
 
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
 
    // Timeout in seconds
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
 
    // Download the given URL, and return output
    $output = curl_exec($ch);
 
    // Close the cURL resource, and free system resources
    curl_close($ch);
 
    var_dump($output);



?>