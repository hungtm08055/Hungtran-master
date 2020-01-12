<?php 
    include "connect.php";
    session_start();

    $task_id = $_POST['id_task'];

    $image_file = $_POST['file_format'];
   
    $insert_file = $db->prepare("INSERT INTO file(file,taskId) VALUES (?,?)");
    $insert_file->bindParam(1,$image_file);
    $insert_file->bindParam(2,$task_id);  
    $insert_file->execute();

    $lastid = $db->lastInsertId();
    
    $select = $db->prepare("SELECT * FROM file WHERE id=?");
    $select->bindParam(1,$lastid);
    $select->execute();

    foreach($select as $file_row)
    {
        echo $file_row['createdate'];
    }
?>
