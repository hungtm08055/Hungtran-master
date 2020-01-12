<?php 
    include "connect.php";

    $id_subtask = $_POST['id_subtask'];  // get id_subtask from "plus-cln-text-input-none" of subtask

    $delete_subtask = $db->prepare("DELETE FROM subtask WHERE id='$id_subtask'");
    $delete_subtask->execute(array($id_subtask));
    $delete_subtask->execute();
        
?>