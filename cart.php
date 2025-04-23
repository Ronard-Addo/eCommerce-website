<?php
session_start();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $cartData = json_decode(file_get_contents("php://input"), true);
    $_SESSION['cart'] = $cartData;
    echo json_encode(["message" => "Cart updated"]);
}
?>
