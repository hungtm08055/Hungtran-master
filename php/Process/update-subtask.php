<?php
    include "connect.php";

    $subtask_input = $_POST['title_subtask'];   // line 813 ajax.js
    $id_subtask = $_POST['id_subtask']; //line 812 ajax.js
    
    $update_subtask = $db->prepare("UPDATE subtask SET title = ? WHERE id = ?");
    $update_subtask->bindParam('1',$subtask_input);
    $update_subtask->bindParam('2',$id_subtask);
    $update_subtask->execute();
    
?>