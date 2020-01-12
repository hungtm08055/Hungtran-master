<?php
   $conn = 'mysql:host=localhost;dbname=wunderlist'; // kết nối tới database
   $username = 'root';
   $password = '123456';
   $options = array(
    PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    );
    try {
        $db = new PDO($conn, $username, $password, $options); // tổng hợp kết nối 
        }
        // Catch any errors
        catch (PDOException $e) {
        echo $e->getMessage();
        exit();
        }
?>
