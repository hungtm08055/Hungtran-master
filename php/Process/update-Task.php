<?php
    include "connect.php";

    $task_id = $_POST['id_task'];
    $title_task = $_POST['title_task'];
    
    $update_subtask = $db->prepare("UPDATE task SET title = ? WHERE id = ?");
    $update_subtask->bindParam('1',$title_task);
    $update_subtask->bindParam('2',$task_id);
    $update_subtask->execute();

    
?>