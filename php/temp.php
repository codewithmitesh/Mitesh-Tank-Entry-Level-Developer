<?php
  header('Content-Type: application/json');
  $data = array(
    'message' => 'Hello, world!',
    'timestamp' => time()
);

// Convert the data to JSON format
$jsonData = json_encode($data);

// Output the JSON response
echo $jsonData;
?>