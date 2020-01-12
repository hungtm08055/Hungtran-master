<?php 
    include "connect.php";
    error_reporting(0);

    $task_id = $_POST['id_task']; // line 274 ajax.js
    $unstatus = $_POST['unstatus'];  // line 275 ajax.js
    
    $update_status = $db->prepare("UPDATE task SET status = ? WHERE id='$task_id'");
    $update_status->bindParam('1',$unstatus);
    $update_status->execute();
    
    // show task on uncompleted
    include "../Process/showTask_Uncompleted.php";
?>