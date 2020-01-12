
<div id="left-responsive">
            <div class="left">
                <div class="navsearch">
                    <span title="Toggle Sidebar"><svg class="list-toggle" wclassth="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"> <g> <path d="M0.5,3.5l19,0" style="fill:none;stroke-wclassth:1px;stroke:white;"></path> <path d="M0.5,9.53l19,0" style="fill:none;stroke-wclassth:1px;stroke:white;"></path> <path d="M0.5,15.5l19,0" style="fill:none;stroke-wclassth:1px;stroke:white;"></path> </g> </svg></span>
                    <form action="../php/Process/show_search_result.php" method="POST" id="search">
                        <div class="search-input hiddenclass"><input type="text" name="search"></div>
                    </form>
                    <span title="Search"><svg class="search-icon hiddenclass" wclassth="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-wclassth="1" fill-rule="evenodd"> <g> <path d="M8.5025,15 C4.9225,15 2.0025,12.08 2.0025,8.5 C2.0025,4.92 4.9225,2 8.5025,2 C12.0825,2 15.0025,4.92 15.0025,8.5 C15.0025,12.08 12.0825,15 8.5025,15 L8.5025,15 Z M8.5025,3 C5.4625,3 3.0025,5.46 3.0025,8.5 C3.0025,11.54 5.4625,14 8.5025,14 C11.5425,14 14.0025,11.54 14.0025,8.5 C14.0025,5.46 11.5425,3 8.5025,3 L8.5025,3 Z M17.5025,18 C17.3825,18 17.2425,17.96 17.1425,17.86 L13.6425,14.36 C13.4625,14.16 13.4625,13.84 13.6425,13.64 C13.8425,13.46 14.1625,13.46 14.3625,13.64 L17.8625,17.14 C18.0425,17.34 18.0425,17.66 17.8625,17.86 C17.7625,17.96 17.6225,18 17.5025,18 L17.5025,18 Z" class="z"></path> </g> </g> </svg></span>
                </div>
                <div class="scroll-left">
                    <div class="usertool">
                            <div class="avatar" title="<?php echo $email ?>"><img src="../image/text.png"></a></div>
                            <div class="username hiddenclass clickfather">
                                <?php 
                                    echo $email; 
                                    // echo $user_id;                            
                                ?>
                                <div class="username-hover  click1ptu">
                                    <ul class="ul-style">
                                        <!-- <div class="ul1"><li>Last sync 4 minutes ago</li></div>
                                        <div class="ul2"><li>Sync Now</li></div>
                                        <div class="ul3"><li>Account Settings</li></div>
                                        <div class="ul4"><li>Change Background</li></div>
                                        <div class="ul5"><li>Restore deleted lists</li></div>
                                        <div class="ul6"><li>Install the Browser Extension</li></div>
                                        <div class="ul7"><li>Love Wunderlist?</li></div>
                                        <div class="ul8"><li>Tell Your Friends...</li></div>
                                        <div class="ul9"><li>Wunderlist Website</li></div>
                                        <div class="ul10"><li>tranmanhhung102@gmail.com</li></div> -->
                                        <div class="ul11"><a href="logout.php"><li> Sign out</li></a></div>
                                    </ul>
                                </div>
                            </div>
                            <div class="option hiddenclass"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M10.502,13c-0.132,0 -0.26,-0.053 -0.354,-0.146l-4.002,-4c-0.195,-0.195 -0.195,-0.512 0,-0.708c0.195,-0.195 0.512,-0.195 0.707,0l3.649,3.647l3.644,-3.647c0.195,-0.195 0.512,-0.195 0.707,0c0.195,0.195 0.195,0.512 0,0.708l-3.997,4c-0.094,0.093 -0.221,0.146 -0.354,0.146"></path> </g> </svg></div>
                            <div class="comment-notify">
                                <!-- show time Activities -->
                                <?php  
                                    // if(isset($origin_time))
                                    // {                                        
                                        echo '<div class="noti hiddenclass clickfather" title="Activities"><svg class="bell" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="bell"> <path d="M15.2,10.14 C14.74,9.6 14.46,8.92 14.4,8.2 L14.28,6.94 C14.14,5.08 12.76,3.54 11,3.12 L11,3 C11,2.44 10.56,2 10,2 C9.44,2 9,2.44 9,3 L9,3.12 C7.24,3.54 5.86,5.08 5.72,6.94 L5.6,8.2 C5.54,8.92 5.28,9.6 4.8,10.16 L4.04,11.06 C3.38,11.88 3,12.9 3,13.94 L3,14.5 C3,14.78 3.22,15 3.5,15 L16.5,15 C16.78,15 17,14.78 17,14.5 L17,13.94 C17,12.9 16.62,11.88 15.96,11.06 L15.2,10.14 Z M16,14 L4,14 L4,13.94 C4,13.14 4.28,12.34 4.82,11.7 L5.58,10.8 C6.18,10.08 6.52,9.2 6.6,8.28 L6.7,7.02 C6.84,5.34 8.3,4 10,4 C11.7,4 13.16,5.34 13.3,7.02 L13.4,8.28 C13.48,9.2 13.84,10.08 14.42,10.8 L15.18,11.7 C15.72,12.34 16,13.14 16,13.94 L16,14 Z M12.3,16.1 C12.08,15.94 11.76,15.98 11.58,16.2 C10.82,17.22 9.18,17.22 8.4,16.2 C8.24,15.98 7.92,15.94 7.7,16.1 C7.48,16.26 7.44,16.58 7.62,16.8 C8.18,17.56 9.06,18 10,18 C10.94,18 11.82,17.56 12.38,16.8 C12.56,16.58 12.52,16.26 12.3,16.1 L12.3,16.1 Z" id="m"></path> </g> </g> </svg>
                                            <div class="noti-hover hidden click1ptu">
                                                <div class="noti-hover-text">Activities</div>';
                                              
                                                    echo '<div class="reminder1">'; 
                                                        echo '<div class="reminder_icon"><img width="39" height="39" src="../image/arlam.png" alt=""></div>';
                                                        echo '<div class="reminder_message">'
                                                            .'<div class="reminder_message1">Reminder:'.'</div>'
                                                            .'<div class="reminder_message2">';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                            echo '</div>'
                                                            // <div class ="reminder_message3">
                                                            
                                                            // </div>
                                                        . '</div>';
                                                    echo '</div>';
        
                                                $reminder = $db->prepare("SELECT reminder FROM task");
                                                $reminder->execute();
                                                $rmd = $reminder->fetchAll();

                                                foreach($rmd as $reminder_row)
                                                {                                                                                                                                                                        
                                                    if($reminder_row['reminder'] > 0 )
                                                    {                                                        
                                                        echo '<div class="reminder1">'; 
                                                            echo '<div class="reminder_icon"><img width="39" height="39" src="../image/arlam.png" alt=""></div>';
                                                            echo '<div class="reminder_message">'
                                                                .'<div class="reminder_message1">Reminder:'.'</div>'
                                                                .'<div class="reminder_message2">';                                                                        
                                                                    $task = $db->prepare("SELECT title FROM task WHERE reminder=?");
                                                                    $task->execute(array($reminder_row['reminder']));
                                                                    
                                                                    foreach($task as $task_row)
                                                                    {
                                                                        if($reminder_row['reminder'] > 0 )
                                                                        {
                                                                            echo $task_row['title'];
                                                                        }
                                                                    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                                                                echo '</div>'
                                                                // <div class ="reminder_message3">
                                                                
                                                                // </div>
                                                            . '</div>';
                                                        echo '</div>'; 
                                                    }                                                                                                                                                                                                                                                                           
                                                }                                                                                                                                                                                                                                                                                           
                                            echo '</div>
                                        </div>';                                         
                                    // }
                                    // else
                                    // {                                        
                                    //     echo '<div class="noti hiddenclass clickfather" title="Activities"><svg class="bell" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="bell"> <path d="M15.2,10.14 C14.74,9.6 14.46,8.92 14.4,8.2 L14.28,6.94 C14.14,5.08 12.76,3.54 11,3.12 L11,3 C11,2.44 10.56,2 10,2 C9.44,2 9,2.44 9,3 L9,3.12 C7.24,3.54 5.86,5.08 5.72,6.94 L5.6,8.2 C5.54,8.92 5.28,9.6 4.8,10.16 L4.04,11.06 C3.38,11.88 3,12.9 3,13.94 L3,14.5 C3,14.78 3.22,15 3.5,15 L16.5,15 C16.78,15 17,14.78 17,14.5 L17,13.94 C17,12.9 16.62,11.88 15.96,11.06 L15.2,10.14 Z M16,14 L4,14 L4,13.94 C4,13.14 4.28,12.34 4.82,11.7 L5.58,10.8 C6.18,10.08 6.52,9.2 6.6,8.28 L6.7,7.02 C6.84,5.34 8.3,4 10,4 C11.7,4 13.16,5.34 13.3,7.02 L13.4,8.28 C13.48,9.2 13.84,10.08 14.42,10.8 L15.18,11.7 C15.72,12.34 16,13.14 16,13.94 L16,14 Z M12.3,16.1 C12.08,15.94 11.76,15.98 11.58,16.2 C10.82,17.22 9.18,17.22 8.4,16.2 C8.24,15.98 7.92,15.94 7.7,16.1 C7.48,16.26 7.44,16.58 7.62,16.8 C8.18,17.56 9.06,18 10,18 C10.94,18 11.82,17.56 12.38,16.8 C12.56,16.58 12.52,16.26 12.3,16.1 L12.3,16.1 Z" id="m"></path> </g> </g> </svg>
                                    //         <div class="noti-hover hidden click1ptu">
                                    //             <div class="noti-hover-text">Activities</div>
                                    //             <div class="noti-hover-icon"><svg viewBox="0 0 188 220" version="1.1" xmlns="http://www.w3.org/2000/svg">           <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">               <g transform="translate(-183.000000, -315.000000)" fill="#D5D5D5">                   <g transform="translate(55.000000, 305.000000)">                       <path d="M314.603832,179.039847 L314.603832,170.587855 C314.603832,162.473942 310.884955,154.698109 304.461441,149.626914 C293.304811,140.836842 285.867058,127.989813 283.83858,113.452386 L274.710428,50.2314836 C266.934595,45.1602882 258.144523,41.7794912 249.354451,39.4129334 C248.002132,38.736774 246.987893,37.7225349 246.987893,36.0321364 L246.987893,35.355977 C246.987893,21.4947096 235.493183,10 221.631916,10 C207.770648,10 196.275939,21.4947096 196.275939,35.355977 C196.275939,37.3844552 195.2617,38.736774 193.571301,39.0748537 C184.781229,41.4414115 176.329237,44.8222085 168.553404,49.8934039 L159.425252,113.452386 C157.396774,127.989813 149.959021,140.836842 138.802391,149.626914 C132.378877,154.698109 128.66,162.473942 128.66,170.587855 L128.66,179.039847 L314.603832,179.039847 Z M221.631916,43.8079694 C216.8988,43.8079694 213.179923,40.0890928 213.179923,35.355977 C213.179923,30.6228613 216.8988,26.9039847 221.631916,26.9039847 C226.365032,26.9039847 230.083908,30.6228613 230.083908,35.355977 C230.083908,40.0890928 226.365032,43.8079694 221.631916,43.8079694 Z M197.966337,195.943832 C196.952098,198.648469 196.275939,201.353107 196.275939,204.395824 C196.275939,218.257091 207.770648,229.751801 221.631916,229.751801 C235.493183,229.751801 246.987893,218.257091 246.987893,204.395824 C246.987893,201.353107 246.311733,198.648469 245.297494,195.943832 L197.966337,195.943832 Z"></path>                   </g>               </g>           </g>       </svg></div>
                                    //             <div class="noti-hover-text2">No Activities</div>
                                    //             <div class="noti-hover-text3">Get notified when other people you\'re collaborating with add files, create and assign to-dos in shared lists.</div>
                                    //         </div>
                                    //     </div>';                                       
                                    // }
                                ?>
                                <!-- <div class="noti hiddenclass clickfather" title="Activities"><svg class="bell" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="bell"> <path d="M15.2,10.14 C14.74,9.6 14.46,8.92 14.4,8.2 L14.28,6.94 C14.14,5.08 12.76,3.54 11,3.12 L11,3 C11,2.44 10.56,2 10,2 C9.44,2 9,2.44 9,3 L9,3.12 C7.24,3.54 5.86,5.08 5.72,6.94 L5.6,8.2 C5.54,8.92 5.28,9.6 4.8,10.16 L4.04,11.06 C3.38,11.88 3,12.9 3,13.94 L3,14.5 C3,14.78 3.22,15 3.5,15 L16.5,15 C16.78,15 17,14.78 17,14.5 L17,13.94 C17,12.9 16.62,11.88 15.96,11.06 L15.2,10.14 Z M16,14 L4,14 L4,13.94 C4,13.14 4.28,12.34 4.82,11.7 L5.58,10.8 C6.18,10.08 6.52,9.2 6.6,8.28 L6.7,7.02 C6.84,5.34 8.3,4 10,4 C11.7,4 13.16,5.34 13.3,7.02 L13.4,8.28 C13.48,9.2 13.84,10.08 14.42,10.8 L15.18,11.7 C15.72,12.34 16,13.14 16,13.94 L16,14 Z M12.3,16.1 C12.08,15.94 11.76,15.98 11.58,16.2 C10.82,17.22 9.18,17.22 8.4,16.2 C8.24,15.98 7.92,15.94 7.7,16.1 C7.48,16.26 7.44,16.58 7.62,16.8 C8.18,17.56 9.06,18 10,18 C10.94,18 11.82,17.56 12.38,16.8 C12.56,16.58 12.52,16.26 12.3,16.1 L12.3,16.1 Z" id="m"></path> </g> </g> </svg>
                                    <div class="noti-hover hidden click1ptu">
                                        <div class="noti-hover-text">Activities</div>
                                        <div class="noti-hover-icon"><svg viewBox="0 0 188 220" version="1.1" xmlns="http://www.w3.org/2000/svg">           <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">               <g transform="translate(-183.000000, -315.000000)" fill="#D5D5D5">                   <g transform="translate(55.000000, 305.000000)">                       <path d="M314.603832,179.039847 L314.603832,170.587855 C314.603832,162.473942 310.884955,154.698109 304.461441,149.626914 C293.304811,140.836842 285.867058,127.989813 283.83858,113.452386 L274.710428,50.2314836 C266.934595,45.1602882 258.144523,41.7794912 249.354451,39.4129334 C248.002132,38.736774 246.987893,37.7225349 246.987893,36.0321364 L246.987893,35.355977 C246.987893,21.4947096 235.493183,10 221.631916,10 C207.770648,10 196.275939,21.4947096 196.275939,35.355977 C196.275939,37.3844552 195.2617,38.736774 193.571301,39.0748537 C184.781229,41.4414115 176.329237,44.8222085 168.553404,49.8934039 L159.425252,113.452386 C157.396774,127.989813 149.959021,140.836842 138.802391,149.626914 C132.378877,154.698109 128.66,162.473942 128.66,170.587855 L128.66,179.039847 L314.603832,179.039847 Z M221.631916,43.8079694 C216.8988,43.8079694 213.179923,40.0890928 213.179923,35.355977 C213.179923,30.6228613 216.8988,26.9039847 221.631916,26.9039847 C226.365032,26.9039847 230.083908,30.6228613 230.083908,35.355977 C230.083908,40.0890928 226.365032,43.8079694 221.631916,43.8079694 Z M197.966337,195.943832 C196.952098,198.648469 196.275939,201.353107 196.275939,204.395824 C196.275939,218.257091 207.770648,229.751801 221.631916,229.751801 C235.493183,229.751801 246.987893,218.257091 246.987893,204.395824 C246.987893,201.353107 246.311733,198.648469 245.297494,195.943832 L197.966337,195.943832 Z"></path>                   </g>               </g>           </g>       </svg></div>
                                        <div class="noti-hover-text2">No Activities</div>
                                        <div class="noti-hover-text3">Get notified when other people you're collaborating with add files, create and assign to-dos in shared lists.</div>
                                    </div>
                                </div> -->
                                <div class="mess hiddenclass clickfather" title="Conservations"><svg class="conversations rtl-flip" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="conversations"> <path d="M3.46,18 C3.28,17.98 3.1,17.86 3.04,17.68 C2.96,17.5 3,17.3 3.12,17.16 C4.1,16.08 4.3,14.12 3.54,13.12 C3.18,12.64 2.72,12 2.42,11.26 C2.14,10.52 2,9.76 2,9 C2,5.14 5.58,2 10,2 C14.42,2 18,5.14 18,9 C18,12.82 14.46,15.96 10.08,16 L10,16 C8.7,16 7.42,15.72 6.28,15.2 C6.02,15.08 5.92,14.78 6.04,14.54 C6.14,14.28 6.44,14.18 6.7,14.28 C7.68,14.74 8.8,14.98 9.92,15 L10,15 C13.86,15 17,12.3 17,9 C17,5.68 13.86,3 10,3 C6.14,3 3,5.68 3,9 C3,9.64 3.12,10.28 3.36,10.88 C3.6,11.52 4,12.08 4.34,12.52 C5.2,13.64 5.22,15.52 4.48,16.96 C5.2,16.84 5.92,16.56 6.52,16.1 C6.74,15.94 7.06,15.98 7.22,16.2 C7.38,16.42 7.34,16.74 7.12,16.9 C6.16,17.62 5,18 3.82,18 L3.46,18 Z" id="I"></path> </g> </g> </svg>
                                    <div class="mess-hover hidden click1ptu ">
                                        <div class="mess-hover-text">Conservations</div>
                                        <div class="mess-hover-icon"><svg viewBox="0 0 311 225" version="1.1" xmlns="http://www.w3.org/2000/svg">           <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">               <g transform="translate(-171.000000, -314.000000)" fill-opacity="0.426941803" fill="#A3A3A3">                   <g transform="translate(55.000000, 305.000000)">                       <path d="M294.605267,178.281513 C307.457215,195.55639 329.751489,207 355.18,207 C363.64,223.74 380.92,234.18 399.82,233.82 L400.18,233.82 C393.52,229.14 389.56,221.58 389.56,213.66 C389.38,206.1 392.8,198.9 398.56,194.04 C415.84,182.52 427,164.34 427,144 C427,109.08 394.78,81 355,81 C347.732898,81 340.718094,81.937109 334.105931,83.6818347 C335.192798,89.2714344 335.758877,95.0202169 335.758877,100.889173 C335.758877,131.893283 319.797048,159.687193 294.605267,178.281513 L294.605267,178.281513 Z M220,9.08 C162.54,9.08 116,49.64 116,100.08 C116,129.46 132.12,155.72 157.08,172.36 C165.4,179.38 170.34,189.78 170.08,200.7 C170.08,212.14 164.36,223.06 154.74,229.82 L155.26,229.82 C182.56,230.34 207.52,215.26 219.74,191.08 C277.46,191.08 324,150.26 324,100.08 C324,49.64 277.46,9.08 220,9.08 Z"></path>                   </g>               </g>           </g>       </svg></div>
                                        <div class="mess-hover-text2">No Conservations</div>
                                        <div class="mess-hover-text3">Start a conversation now by commenting on a to-do in a shared list.</div>
                                    </div>
                                </div>
                            </div>
                    </div> 
                    <div class="ds1 ">
                            <div class="ds1icon"><span class="list-icon" title="Inbox"> <svg class="inbox" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill-rule="evenodd"> <g> <path d="M10,15 C8.8,15 7.78,14.14 7.56,13 L2.5,13 C2.22,13 2,12.78 2,12.5 L2,3.5 C2,2.68 2.68,2 3.5,2 L16.5,2 C17.32,2 18,2.68 18,3.5 L18,12.5 C18,12.78 17.78,13 17.5,13 L12.44,13 C12.22,14.14 11.2,15 10,15 L10,15 Z M3,12 L8,12 C8.28,12 8.5,12.22 8.5,12.5 C8.5,13.32 9.18,14 10,14 C10.82,14 11.5,13.32 11.5,12.5 C11.5,12.22 11.72,12 12,12 L17,12 L17,3.5 C17,3.22 16.78,3 16.5,3 L3.5,3 C3.22,3 3,3.22 3,3.5 L3,12 Z M5.5,6 C5.22,6 5,5.78 5,5.5 C5,5.22 5.22,5 5.5,5 L14.5,5 C14.78,5 15,5.22 15,5.5 C15,5.78 14.78,6 14.5,6 L5.5,6 Z M5.5,8 C5.22,8 5,7.78 5,7.5 C5,7.22 5.22,7 5.5,7 L14.5,7 C14.78,7 15,7.22 15,7.5 C15,7.78 14.78,8 14.5,8 L5.5,8 Z M5.5,10 C5.22,10 5,9.78 5,9.5 C5,9.22 5.22,9 5.5,9 L14.5,9 C14.78,9 15,9.22 15,9.5 C15,9.78 14.78,10 14.5,10 L5.5,10 Z M3.5,18 C2.68,18 2,17.32 2,16.5 L2,14.5 C2,14.22 2.22,14 2.5,14 C2.78,14 3,14.22 3,14.5 L3,16.5 C3,16.78 3.22,17 3.5,17 L16.5,17 C16.78,17 17,16.78 17,16.5 L17,14.5 C17,14.22 17.22,14 17.5,14 C17.78,14 18,14.22 18,14.5 L18,16.5 C18,17.32 17.32,18 16.5,18 L3.5,18 Z" id="A"></path> </g> </g> </svg> </span></div>
                            <div class="ds1text hiddenclass danhsachtext">Inbox</div>
                            <div class="count hiddenclass">1</div>
                        </div>
                    <div class="ds">
                        <!-- origin element to add  -->
                        <div class='ds2 danhsach' id_list="0">
                            <div class="ds2-hover">                                                                        
                                <div class='ds2icon'>
                                    <svg class='list rtl-flip' width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <g id='Web-svgs' stroke='none' stroke-width='1' fill-rule='evenodd'> <g id='list'> <path d='M3,7 C2.44,7 2,6.56 2,6 L2,5 C2,4.44 2.44,4 3,4 L4,4 C4.56,4 5,4.44 5,5 L5,6 C5,6.56 4.56,7 4,7 L3,7 Z M4,5 L3,5 L3,6 L4,6 L4,5 Z M7.5,6 C7.22,6 7,5.78 7,5.5 C7,5.22 7.22,5 7.5,5 L17.5,5 C17.78,5 18,5.22 18,5.5 C18,5.78 17.78,6 17.5,6 L7.5,6 Z M3,12 C2.44,12 2,11.56 2,11 L2,10 C2,9.44 2.44,9 3,9 L4,9 C4.56,9 5,9.44 5,10 L5,11 C5,11.56 4.56,12 4,12 L3,12 Z M4,10 L3,10 L3,11 L4,11 L4,10 Z M7.5,11 C7.22,11 7,10.78 7,10.5 C7,10.22 7.22,10 7.5,10 L17.5,10 C17.78,10 18,10.22 18,10.5 C18,10.78 17.78,11 17.5,11 L7.5,11 Z M3,17 C2.44,17 2,16.56 2,16 L2,15 C2,14.44 2.44,14 3,14 L4,14 C4.56,14 5,14.44 5,15 L5,16 C5,16.56 4.56,17 4,17 L3,17 Z M4,15 L3,15 L3,16 L4,16 L4,15 Z M7.5,16 C7.22,16 7,15.78 7,15.5 C7,15.22 7.22,15 7.5,15 L17.5,15 C17.78,15 18,15.22 18,15.5 C18,15.78 17.78,16 17.5,16 L7.5,16 Z' id='K'> </path> </g> </g>
                                    </svg>
                                </div>                                                                                                                                     
                                <div class='ds2text hiddenclass danhsachtext'>                                                                                                                                         
                                </div>                                              
                            </div>
                        </div>
                        <!-- clone element-->
                        <?php                                
                            $user_id = $_SESSION['user_id']; 
                            
                            $list_userid = $db->prepare("SELECT * FROM list WHERE userId = ?"); // lay userId cua bang list
                            $list_userid->execute(array($user_id));
                                                
                            foreach($list_userid as $list_row) 
                            {
                                if($user_id == $list_row['userId'])
                                {                             
                                    echo "<div class='ds2 danhsach' id_list='".$list_row['id']."'>"
                                        .'<div class="ds2-hover">'
                                            // .'<a class="test" href="hienthi.php?id_list='.$list_row['id'].'">'                                            
                                                    ."<div class='ds2icon'>"
                                                        . "<svg class='list rtl-flip' width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <g id='Web-svgs' stroke='none' stroke-width='1' fill-rule='evenodd'> <g id='list'> <path d='M3,7 C2.44,7 2,6.56 2,6 L2,5 C2,4.44 2.44,4 3,4 L4,4 C4.56,4 5,4.44 5,5 L5,6 C5,6.56 4.56,7 4,7 L3,7 Z M4,5 L3,5 L3,6 L4,6 L4,5 Z M7.5,6 C7.22,6 7,5.78 7,5.5 C7,5.22 7.22,5 7.5,5 L17.5,5 C17.78,5 18,5.22 18,5.5 C18,5.78 17.78,6 17.5,6 L7.5,6 Z M3,12 C2.44,12 2,11.56 2,11 L2,10 C2,9.44 2.44,9 3,9 L4,9 C4.56,9 5,9.44 5,10 L5,11 C5,11.56 4.56,12 4,12 L3,12 Z M4,10 L3,10 L3,11 L4,11 L4,10 Z M7.5,11 C7.22,11 7,10.78 7,10.5 C7,10.22 7.22,10 7.5,10 L17.5,10 C17.78,10 18,10.22 18,10.5 C18,10.78 17.78,11 17.5,11 L7.5,11 Z M3,17 C2.44,17 2,16.56 2,16 L2,15 C2,14.44 2.44,14 3,14 L4,14 C4.56,14 5,14.44 5,15 L5,16 C5,16.56 4.56,17 4,17 L3,17 Z M4,15 L3,15 L3,16 L4,16 L4,15 Z M7.5,16 C7.22,16 7,15.78 7,15.5 C7,15.22 7.22,15 7.5,15 L17.5,15 C17.78,15 18,15.22 18,15.5 C18,15.78 17.78,16 17.5,16 L7.5,16 Z' id='K'> </path> </g> </g>>"
                                                        ."</svg>"
                                                    ."</div>";                                                                                                                                     
                                                echo "<div class='ds2text hiddenclass danhsachtext'>";
                                                    // khi hiển thị list sẽ hiển thị thêm id của list 
                                                        echo $list_row['title'];                                                                                                                                                                    
                                                        $list_id = $_GET['id_list']; // dùng GET để lấy nó ra cho mỗi lần ấn vào thẻ <a>
                                                        $_SESSION['id_list'] = $list_id;// lưu vào session                                                                                                                                            
                                                echo "</div>"                                                
                                            // .'</a>'
                                        .'</div>'
                                    ."</div>"; 
                                }
                            }    
                        ?>  
                    </div>                 
                <div class="newlist">
                </div>
            </div>
            <div class="createlist">
                <div class="plusicon"><svg class="plus-small" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"> <g> <path d="M10,10l0,6.5c-0.003,0.053 -0.008,0.103 -0.024,0.155c-0.038,0.116 -0.12,0.217 -0.226,0.278c-0.047,0.027 -0.094,0.042 -0.146,0.056c-0.052,0.008 -0.051,0.008 -0.104,0.011c-0.053,-0.003 -0.103,-0.008 -0.155,-0.024c-0.15,-0.05 -0.271,-0.171 -0.321,-0.321c-0.016,-0.052 -0.021,-0.102 -0.024,-0.155l0,-6.5l-6.5,0c-0.046,-0.002 -0.058,-0.001 -0.104,-0.011c-0.103,-0.022 -0.197,-0.076 -0.268,-0.154c-0.169,-0.188 -0.169,-0.482 0,-0.67c0.035,-0.038 0.077,-0.072 0.122,-0.098c0.078,-0.045 0.161,-0.062 0.25,-0.067l6.5,0l0,-6.5c0.005,-0.089 0.022,-0.172 0.067,-0.25c0.126,-0.219 0.406,-0.31 0.636,-0.207c0.048,0.022 0.093,0.05 0.132,0.085c0.078,0.071 0.132,0.165 0.154,0.268c0.01,0.046 0.009,0.058 0.011,0.104l0,6.5l6.5,0c0.046,0.002 0.058,0.001 0.104,0.011c0.103,0.022 0.197,0.076 0.268,0.154c0.169,0.188 0.169,0.482 0,0.67c-0.035,0.038 -0.077,0.072 -0.122,0.098c-0.078,0.045 -0.161,0.062 -0.25,0.067l-6.5,0Z"></path> </g> </svg></div>
                <div class="plustext hiddenclass">Create List</div>
            </div>
        </div>    
    </div>