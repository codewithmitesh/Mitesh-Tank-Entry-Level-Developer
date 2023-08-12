<?php
require_once('db.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {


$inputJSON = file_get_contents('php://input');
    $input = json_decode($inputJSON, true);

    if (isset($input['email']) && isset($input['password'])) {
        $email = $input['email'];
        $password = $input['password'];

        // Print the received email and password
        // echo "Received Email: " . $email . "<br>";
        // echo "Received Password: " . $password . "<br>";

        // Hash the password
        $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

        // Insert data into the database
        $sql = "INSERT INTO auth_users (email, password) VALUES ('$email', '$hashedPassword')";

        if ($conn->query($sql) === TRUE) {
            echo json_encode(array("message" => "User registered successfully"));
        } else {
            echo json_encode(array("message" => "Error: " . $sql . "<br>" . $conn->error));
        }
    } else {    
        echo json_encode(array("message" => "Email and password are required."));
    }

}
?>
