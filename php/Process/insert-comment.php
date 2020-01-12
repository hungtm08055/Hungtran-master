<?php 
    include "connect.php";


    $task_id = $_POST['id_task'];   //line 940 ajax.js
    $comment = $_POST['title_comment']; // line 941 ajax.js
    
    $insert_comment = $db->prepare("INSERT INTO comment(title,taskId) VALUES (?,?)");
    $insert_comment->bindParam('1',$comment);
    $insert_comment->bindParam('2',$task_id);
    $insert_comment->execute();

    $lastid = $db->lastInsertId();
    
    $select = $db->prepare("SELECT * FROM comment WHERE id=?");
    $select->bindParam(1,$lastid);
    $select->execute();

    foreach($select as $comment_row)
    {
        echo $comment_row['createdate'];
    }
?>