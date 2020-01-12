<?php 
    include "connect.php";

    // from : layout->submit "edit-list" to save the edited list
    $list_title = $_POST['title_list'];
    $list_id = $_POST['id_list'];
    
    $update_list = $db->prepare("UPDATE list SET title=? WHERE id=?");
    $update_list->bindParam(1,$list_title);
    $update_list->bindParam(2,$list_id);
    $update_list->execute();

    // header("location:../../html/hienthi.php");
?>