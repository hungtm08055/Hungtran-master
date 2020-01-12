<?php
    include "../Process/connect.php";
    error_reporting(0);
    session_start();
    date_default_timezone_set('Asia/Ho_Chi_Minh');
    
    $list_id = $_POST['id_list']; //from ajax
    
    $task_listId = $db->prepare("SELECT * FROM task WHERE listId = ?"); // lay listId cua bang list
    $task_listId->execute(array($list_id));

    foreach($task_listId as $task_row)
    {                 
        // show duedate
        $current_date = date("Y-m-d"); // current time                                            
        $origin_date = $task_row['duedate'];                                                                                        
        $newDate = preg_replace("/(\d+)\D+(\d+)\D+(\d+)/","$3.$2.$1",$origin_date);
            
        // show reminder
        $current_time = date("H:i");
        $origin_time = $task_row['reminder'];
        
        if($origin_time == $current_time && $origin_date == $current_date)
        {
            echo '<script language = "javascript">';
            echo 'alert("Its time for '.$task_row['title'].'!")';
            echo '</script>';                                                        
        }                                                                              
    }
?>      
