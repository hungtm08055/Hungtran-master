<?php 
    include "connect.php";
    error_reporting(0);

    $task_id = $_POST['id_task']; // line 274 ajax.js
    $status = $_POST['status'];  // line 275 ajax.js
    
    $update_status = $db->prepare("UPDATE task SET status = ? WHERE id='$task_id'");
    $update_status->bindParam('1',$status);
    $update_status->execute();
    
    // show task on Completted
    include "../Process/showTask_Completed.php";
?>