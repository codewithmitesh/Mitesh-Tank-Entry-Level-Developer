<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

$dbHost = "sql.freedb.tech";
$dbPort = 3306;
$dbName = "freedb_spacex";
$dbUser = "freedb_mitesh";
$dbPassword = "fHb7#U937G*Jd95";

$conn = new mysqli($dbHost, $dbUser, $dbPassword, $dbName, $dbPort);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>