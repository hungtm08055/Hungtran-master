<?php 
    include "connect.php";

    //get id_list by contextmenu ".ds2"
    $list_id = $_POST['id_list'];

    $delete_list = $db->prepare("DELETE FROM list WHERE id=?");
    $delete_list->bindParam(1,$list_id);
    $delete_list->execute(); 
    
    include "../Process/showTask_Uncompleted.php";
    include "../Process/showTask_Completed.php";
?>