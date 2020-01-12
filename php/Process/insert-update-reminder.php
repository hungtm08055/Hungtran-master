<?php 
    include "connect.php";
    
    $task_id = $_POST['id_task'];   //line 391 ajax.js
    $reminder = $_POST['reminder'];     //line 392 ajax.js

    $update = $db->prepare("UPDATE task SET reminder=? WHERE id=?");
    $update->bindParam(1,$reminder);
    $update->bindParam(2,$task_id);
    $update->execute();

    
    $task = $db->prepare("SELECT * FROM task WHERE id=?");
    $task->bindParam(1,$task_id);
    $task->execute();

    foreach($task as $task_row)
    {
        echo $task_row['title'];
    }

?>