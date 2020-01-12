<?php 
    include "connect.php";

    $task_id = $_POST['id_task'];

    $select = $db->prepare("SELECT * FROM task WHERE id=?");
    $select->bindParam(1,$task_id);
    $select->execute();

    foreach($select as $task_row)
    {
        echo 'Created on ';echo $task_row['createdate'];
    }
?>