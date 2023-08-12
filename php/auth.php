<?php
require_once('db.php');
error_log('resquested here');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $inputJSON = file_get_contents('php://input');
    $input = json_decode($inputJSON, true);

    if (isset($input['email']) && isset($input['password'])) {
        $email = $input['email'];
        $password = $input['password'];

        // Print the received email and password
        // echo "Received Email: " . $email . "<br>";
        // echo "Received Password: " . $password . "<br>";

        $sql = "SELECT password FROM auth_users WHERE email = '$email'";
        $result = $conn->query($sql);

        if ($result->num_rows >= 1) {
            $row = $result->fetch_assoc();
            $hashedPasswordFromDatabase = $row['password'];

            if (password_verify($password, $hashedPasswordFromDatabase)) {
                echo json_encode(array("message" => "Login successful"));
            } else {
                echo json_encode(array("message" => "Incorrect password"));
            }
        } else {
            echo json_encode(array("message" => "User not found"));
        }
    } else {
        echo json_encode(array("message" => "Email and password are required."));
    }
}

?>
