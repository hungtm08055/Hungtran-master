<?php 
    ob_start();
    session_start();
    include "connect.php";
    
    $user_id = $_SESSION['user_id'];
    $new_list = $_POST['title_list'];

    $insert = $db->prepare("INSERT INTO list(title,userId) values (?,?)");
    $insert->bindParam('1',$new_list);
    $insert->bindParam('2',$user_id);
    $insert->execute();
   
    $last_id = $db->lastInsertId();
    echo $last_id;
?>
    
    

        
    
   
    
    
    




















