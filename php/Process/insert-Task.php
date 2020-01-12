<?php 
    ob_start();
    
    include_once "connect.php";
    $list_id = $_POST['id_list']; // from ajax
    $task_input = $_POST['title_task']; // from ajax
    $insert = $db->prepare("INSERT INTO task(title,listId) values (?,?)");
    $insert->bindParam('1',$task_input);
    $insert->bindParam('2',$list_id); // truyền lại
    $insert->execute();     
    $last_id = $db->lastInsertId();
    echo $last_id;    
?>