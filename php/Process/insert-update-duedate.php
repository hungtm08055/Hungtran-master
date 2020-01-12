<?php 
    include "connect.php";
    
    $task_id = $_POST['id_task'];   //line 340 ajax.js
    $due_date = $_POST['duedate'];  //line 341 ajax.js

    $update = $db->prepare("UPDATE task SET duedate=? WHERE id= ?");
    $update->bindParam(1,$due_date);
    $update->bindParam(2,$task_id);
    $update->execute();

?>