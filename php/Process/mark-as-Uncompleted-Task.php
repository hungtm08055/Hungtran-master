<?php 
    include "connect.php";
    error_reporting(0);

    $task_id = $_POST['id_task']; // line 301 ajax.js
    $unstatus = $_POST['unstatus'];  // line 302 ajax.js
    
    $update_status = $db->prepare("UPDATE task SET status = ? WHERE id='$task_id'");
    $update_status->bindParam('1',$status);
    $update_status->execute();

    // show task on uncompleted
    include "../Process/showTask_Uncompleted.php";
    
?>