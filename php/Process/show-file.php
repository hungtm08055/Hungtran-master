<?php
    include "connect.php"; 

    $task_id = $_POST['id_task']; 

    $file = $db->prepare("SELECT * FROM file WHERE taskId=?");
    $file->execute(array($task_id));
    
    foreach($file as $file_row)
    {
        if($task_id == $file_row['taskId'])
        {                                    
        ?>                  
            <div class="file-list-layout">               
                <div class="file-list-content" date_create="<?php echo $file_row['createdate']; ?>">
                <!-- hien thi anh  -->                                            
                        <div class="file-list-content-icon"><img width="40" height="40" src="../image/<?php echo $file_row['file']; ?>" alt=""></div>
                        <div class="file-list-content-text">
                            <a href="../image/<?php echo $file_row['file']; ?>"><div class="file-list-content-text-imgname"><?php echo $file_row['file']; ?></div></a>
                            <div class="file-list-content-text-time">
                                <img src="../image/text.png" style="border-radius:50%;" width="15" height="15" alt="">
                                <div class="file-list-content-text-timetext"><?php echo $file_row['createdate']; ?></div>
                                <div class="file-remove">x</div>
                            </div>
                        </div>                           
                </div>                       
            </div>
        <?php
        } 
    }
?>