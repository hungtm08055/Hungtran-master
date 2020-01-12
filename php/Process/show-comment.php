<?php
    include "connect.php";
    session_start();

    $email = $_SESSION['user'];  
    $task_id = $_POST['id_task']; 
    
    $check_comment = $db->prepare("SELECT * FROM comment WHERE taskId=?");
    $check_comment->execute(array($task_id));

    foreach($check_comment as $comment_row)
    {
        if($task_id == $comment_row['taskId'])
        {
            echo '<div class="comment" date_create="'.$comment_row['createdate'].'">'
                .'<div class="comment-icon">'.'<img src="../image/text.png" alt="">'.'</div>'
                .'<div class="comment-text">'
                    .'<div class="comment-text-author">"'.$email.'"&nbsp'
                        .'<div class="comment-time">';
                        echo $comment_row['createdate'];
                    echo '</div>'
                    .'</div>'
                    .'<div class="comment-title-text">';
                        echo $comment_row['title'];                                                                                                                                                                       
                    echo '</div>'
                    .'<input class="comment-title-text-none" type="text" value="'.$comment_row['id'].'">'                                       
                .'</div>'
                .'<div class="comment-text-icon">x'.'</div>'
            .'</div>';                                
        }
    }
?>