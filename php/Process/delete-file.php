<?php 
    include "connect.php";

    $date_create = $_POST['date_create'];  // get id_subtask from "plus-cln-text-input-none" of subtask

    $delete = $db->prepare("DELETE FROM file WHERE createdate=?");
    $delete->bindParam(1,$date_create);
    $delete->execute();
        
?>