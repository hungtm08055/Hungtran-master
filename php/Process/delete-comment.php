<?php 
    include "connect.php";

    $id_comment = $_POST['id_comment'];  // line 977 ajax.js
    
    $delete_subtask = $db->prepare("DELETE FROM comment WHERE createdate='$id_comment'");
    $delete_subtask->execute(array($id_comment));
    $delete_subtask->execute();
 
?>