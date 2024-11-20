<?php
$servername = "localhost";  // Your database server, often "localhost"
$username = "root";         // Database username (default is "root" for XAMPP/MAMP)
$password = "";             // Database password (default is "" for XAMPP/MAMP)
$dbname = "stock_management";  // The name of your database

// Create a new connection to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check for connection errors
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
