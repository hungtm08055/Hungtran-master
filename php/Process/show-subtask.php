<?php
    include "connect.php";
    error_reporting(0);
    session_start();

    $task_id = $_POST['id_task']; // line 255 ajax.js

    $subtask_taskId = $db->prepare("SELECT * FROM subtask WHERE taskId=?");
    $subtask_taskId->execute(array($task_id));

    foreach($subtask_taskId as $subtask_row)
    {                            
        if($task_id == $subtask_row['taskId'])
        {
            echo "<div class='plus-cln' id=".$subtask_row['id']." check=1 uncheck=0>"
            . "<div class='plus-cln-icon'>";
            if($subtask_row['status'] == 0)
            {
                echo "<svg class='task-checkplus' width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;'> <g> <path d='M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z' style='fill:none;stroke-width:1px'>"."</path>"."</g>"."</svg>";                
                echo "<svg class='task-checkedplus1' width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 1.41421;'> <g> <path d='M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004'></path> <path d='M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5'>"."</path>"."</g>"."</svg>";

                echo "</div>"

                .'<form action="../php/Process/update-subtask.php" method="POST" class="form_subtask_update">'
                    . "<div class='plus-cln-text'>";
                            echo '<input class="plus-cln-text-input" name="subtask_input" type="text" value="'.$subtask_row['title'].'">'  // trường tên của subtask                                     
                            .'<input class="plus-cln-text-input-none" name="subtask_input-id" type="text" value="'.$subtask_row['id'].'">';
                                $id_subtask = $subtask_row['id'];
                                $_SESSION['id_subtask'] = $id_subtask;                                            
                            echo '<input class="plus-cln-text-input-none" type="submit">'
                    . "</div>"
                .'</form>';
            }
            else
            {
                echo "<svg class='task-checkplus none' width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;'> <g> <path d='M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z' style='fill:none;stroke-width:1px'>"."</path>"."</g>"."</svg>";                
                echo "<svg class='task-checkedplus1 block' width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 1.41421;'> <g> <path d='M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004'></path> <path d='M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5'>"."</path>"."</g>"."</svg>";

                echo "</div>"
                .'<form action="../php/Process/update-subtask.php" method="POST" class="form_subtask_update">'
                    . "<div class='plus-cln-text'>";
                            echo '<input class="plus-cln-text-input line-through" name="subtask_input" type="text" value="'.$subtask_row['title'].'">'  // trường tên của subtask                                     
                            .'<input class="plus-cln-text-input-none" name="subtask_input-id" type="text" value="'.$subtask_row['id'].'">';
                                $id_subtask = $subtask_row['id'];
                                $_SESSION['id_subtask'] = $id_subtask;                                            
                            echo '<input class="plus-cln-text-input-none" type="submit">'
                    . "</div>"
                .'</form>';
            }
            
        //    .' <a href="#?id_subtask='.$subtask_row["id"].'">';                               
            echo "<div class='plus-cln-remove'>x</div>"
            // .'</a>'
            . "</div>";                              
        }                              
    }   
?>  