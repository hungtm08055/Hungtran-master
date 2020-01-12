<?php 
    include "connect.php";

    $list_id = $_POST['id_list'];    // line 324 ajax.js
    $task_id = $_POST['id_task'];    // line 325 ajax.js
    $star = $_POST['star'];          // line 327 ajax.js
    $status = $_POST['status'];
    
    $update_star = $db->prepare("UPDATE task SET star = ? WHERE id='$task_id'");
    $update_star->bindParam('1',$star);
    $update_star->execute();
    
    include "showTitle_Uncompleted.php";
    
?>