<?php 
    session_start();
    unset($_SESSION['user']);
    unset($_SESSION['list_id']);
    // unset($_SESSION['addElements']);
    // unset($_SESSION['addComment']);
    // unset($_SESSION['addSubtask']);
    header("location:login.php");
?>