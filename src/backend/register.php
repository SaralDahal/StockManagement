<?php
// Include the database connection
include 'db.php';

// Allow requests from any origin
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");

// Get the JSON input from the request
$data = json_decode(file_get_contents("php://input"));

// Validate input data
if (!isset($data->username) || !isset($data->email) || !isset($data->password)) {
    echo json_encode(["success" => false, "message" => "Invalid input"]);
    exit();
}

// inputs and hash the password 
$username = mysqli_real_escape_string($conn, $data->username);
$email = mysqli_real_escape_string($conn, $data->email);
$password = password_hash($data->password, PASSWORD_BCRYPT);

//SQL query to insert user data
$sql = "INSERT INTO users (Username, Email, Password) VALUES ('$username', '$email', '$password')";

if (mysqli_query($conn, $sql)) {
    echo json_encode(["success" => true, "message" => "Registration successful"]);
} else {
    echo json_encode(["success" => false, "message" => "Error: " . mysqli_error($conn)]);
}

// Close the database connection
mysqli_close($conn);
