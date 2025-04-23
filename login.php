<?php
session_start();

// Initialize variables
$host = "localhost";
$username = "root";
$password = "";
$database = "ecommerce";

// Create connection
$db = mysqli_connect($host, $username, $password, $database);

// Check connection
if (!$db) {
    die("Connection failed: " . mysqli_connect_error());
}

// LOGIN USER
if (isset($_POST["email"]) && isset($_POST["password"])) {
    // Get the entered email from the form
    $email = mysqli_real_escape_string($db, $_POST['email']);

    // Check if the email exists in the database
    $query = "SELECT * FROM users WHERE email = '$email'";
    $result = mysqli_query($db, $query);

    if (mysqli_num_rows($result) > 0) {
        // Fetch user data
        $row = mysqli_fetch_assoc($result);
        $stored_password = $row["password"];

        // Get the entered password from the form
        $entered_password = mysqli_real_escape_string($db, $_POST['password']);

        // Check if the entered password matches the stored password
        if ($entered_password == $stored_password) {
            header("Location: index.html");
            exit;
        } else {
            echo "Incorrect password!";
        }
    } else {
        echo "Invalid email address. Make sure to enter a correct email address";
    }
}

// Close the database connection
mysqli_close($db);
?>
