<?php 
    include "connect.php";

    $task_id = $_POST['id_task'];    // line 380 ajax.js

    $delete_task = $db->prepare("DELETE FROM task WHERE id='$task_id'");
    $delete_task->execute(array($task_id));
    $delete_task->execute();
    
    include "../Process/showTask_Uncompleted.php";
    include "../Process/showTask_Completed.php";
?>