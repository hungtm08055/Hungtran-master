<?php 
    include "connect.php";
    
    $task_id = $_POST['id_task'];   // line 428 ajax.js
    $subtask = $_POST["title_subtask"]; //line 427 ajax.js
           
    $insert = $db->prepare("INSERT INTO subtask(title,taskId) values (?,?)");
    $insert->bindParam('1',$subtask);
    $insert->bindParam('2',$task_id); // truyền lại
    $insert->execute();

    $last_id = $db->lastInsertId();
    echo $last_id;
?>