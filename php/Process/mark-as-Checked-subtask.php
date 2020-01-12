<?php 
    include "connect.php";

    $subtask_id = $_POST['id_subtask'];  // id của subtask
    $check = $_POST['check'];  //get giá trị status

    $update_status = $db->prepare("UPDATE subtask SET status = ? WHERE id=$subtask_id");
    $update_status->bindParam('1',$check);
    $update_status->execute();
    
?>