$(document).ready(function(){

       const mainEvent = new MainEvent(); // khoi tao 1 lan de goi lai class ma ko can document ready o jquery.js
  
      document = $(this);

        

    // LIST
        var global;
        var tasklist_body;
        var status_showtitle;

        // click list to show task by id_list
        $('body').on('click', '.ds2' , function()
        {  
            // highlight color
            $(this).addClass("list-highlight-color"); 
            $(this).siblings().removeClass("list-highlight-color");

            // id of class ds2
            var id_list = $(this).attr('id_list');
            //pass id to task   
            $(".tasklist-body").attr("id_list",id_list);
            $(".tasklist-body").children().eq(1).attr("id_list",id_list);
            $(".task-deleted").attr("id_list",id_list);         

            // on Uncompleted
            $.ajax({
                type: "post",
                url: "http://localhost/Hung-Tran-master/php/Process/showTask_Uncompleted.php",
                data: {"id_list": id_list}, 
                dataType: "html",   // datatype to receive
                success: function (response) 
                {        
                    $(".task-deleted").show();
                    $(".to-dos").show();            
                    $(".task-list").html(response);     // class receive the url              
                }
            });

            // on Completed
            $.ajax({
                type: "post",
                url: "http://localhost/Hung-Tran-master/php/Process/showTask_Completed.php",
                data: {"id_list": id_list}, 
                dataType: "html",   // datatype to receive
                success: function (response) 
                {
                    $(".task-deleted").show();
                    $(".to-dos").show();
                    $(".task-deleted").html(response);     // class receive the url           
                }
            });

            // show title to #title-text of middle
            var title_list = $(this).children().eq(0).children().eq(1).html();
            $("#title-text").html(title_list);

            // pass id of list to #add_Task
            $(".id_list").val(id_list);
        });

        // double click to show edit list layout by id_list
        $('body').on('dblclick' , '.ds2' , function (e) // bind to execute 2 or more event to a element
        {
            global = $(this).children().eq(0).children().eq(1);

            // show id and title of list
            var id_list = $(this).attr('id_list');            
            var title_list =  $(this).find(".danhsachtext").html();
            $("#edit-list").val(title_list);
            $(".id-list-none").val(id_list);

            // show edit layout
            $(".createlist-layout1").show();
            $(".layout-header-inputfake").show();
            $(".layout-member").show();
            $('#layout-header-optiontext2').css("color","#262626");
            $('#layout-header-optiontext2').css("border-bottom","1px solid #328ad6");                                            
       

        // layout->submit to save/cancel the edited list
            // Save button to edit list
            $('body').on('click' , '#btn-edit-list' , function ()
            {              
                // id_list and title_list
                var id_list = $(this).parent().parent().parent().parent().parent().children().eq(0).children().eq(1).children().eq(1).val();            
                var title_list = $(this).parent().parent().parent().parent().parent().children().eq(0).children().eq(1).children().eq(0).val();                       

                // update list
                $.ajax({
                    type: "POST",
                    url: "http://localhost/Hung-Tran-master/php/Process/update-List.php",
                    data: {"id_list":id_list , "title_list":title_list},
                    dataType: "html",
                    success: function (response) {
                        $(global).html(title_list);                                                                                               
                    }
                    
                });

                // close layout
                $(".createlist-layout1").hide();                
            });

            // Cancel button
            $('body').on('click' , '.BTF2' , function()
            {
                // close layout
                $(".createlist-layout1").hide();
            });
        });

        // click ".createlist" to show create list layout
        $('body').on('click' , '.createlist' , function ()
        {           
            $(".createlist-layout").show();
            $(".layout-header-inputfake").show();
            $(".layout-member").show();
            $('#layout-header-optiontext2').css("color","#262626");
            $('#layout-header-optiontext2').css("border-bottom","1px solid #328ad6");
        });                 
            // Save button to add new list
            $('body').on('click' , '#btn-add-list' , function (e)
            {                
                // input text 
                var title_list = $(this).parent().parent().parent().parent().parent().children().eq(0).children().eq(1).children().eq(0).val();                
                
                // insert new list
                if($("#add-list").val() !=0)
                {                                   
                    $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/insert-List.php",
                        data: {"title_list":title_list},
                        dataType: "html",
                        success: function (response) {
                            cln = $(".ds2:first").clone().appendTo(".ds");
                            cln.children().eq(0).children().eq(1).html(title_list); 
                            $("#add-list").val('');
                            var attr = cln.attr('id_list',response);    // last insert id
                        }
                    });
                    

                    // close layout
                    $(".createlist-layout").hide(); 
                } 
                
                // use Enter to insert
                // $("#formList").submit(function (e)
                // {
                //     e.preventDefault();
                //     var title_list = $(this).children().eq(0).children().eq(1).children().eq(0).val();
                //     console.log(title_list);
                //     var form = $(this);
                //     $.ajax({
                //         type: form.attr('method'),
                //         url: form.attr('action'),
                //         data: {"title_list":title_list},
                //         dataType: "html",
                //         success: function (response) {
                //             $(".left").html(response);
                //             $("#add-list").val('');
                //         }
                //     });
                // });
            });
                            
            // Cancel button
            $('body').on('click' , '.BTF2' , function()
            {
                // close layout
                $(".createlist-layout").hide();
            });

        // right click ".ds2" to show delete-layout list 
        $('body').on('contextmenu' , '.ds2' , function (e)
        {
            global = $(this);
            // show
            e.preventDefault(); 
            $(".left-contextmenu").toggle();            
            $(".left-contextmenu").css({left:e.pageX, top:e.pageY});
            
            // click ".LC8" to show delete-layout
            $("body").on('click' , '.LC8' , function ()
            { 
                $(".delete-layout").show();
                $(".left-contextmenu").hide();
            });

            // id and title of list
            var id_list = $(this).attr('id_list');
            var title_list =  $(this).find(".danhsachtext").html();

            // delete-layout: receive id & title
            $(".list-id").val(id_list);
            $(".delete-layout-content1-text11").html(title_list);

            // delete-layout(list)->"delete list" button
            $('body').on('click' , ".BD2" , function ()
            {                
                $.ajax({
                    type: "POST",
                    url: "http://localhost/Hung-Tran-master/php/Process/delete-List.php",
                    data: {"id_list":id_list},
                    dataType: "html",
                    success: function (response) {                
                        $(global).remove();
                        
                    }                                        
                });

                // close layout
                $(".delete-layout").hide();
            });            
        }); 
                
    // TASK and its parts
    
        // click task to ACTION its parts by id_task 

            // on Uncompleted
            $('body').on('click' , '.tasklist-text' , function () 
            {
                var local_215 = $(this).parent();
                tasklist_body = local_215;

                global_216_star = $(this).parent().children().eq(3).children().eq(0).children().eq(0);
                global_217_unstar = $(this).parent().children().eq(3).children().eq(1).children().eq(0);
                global_218 = $(this);
                onduedate = $(this).parent().children().eq(2).children().eq(0);                                
                overduedate = $(this).parent().children().eq(2).children().eq(1);

                // id of class tasklist-text
                var id_list = $(this).attr('id_list');
                var id_task = $(this).attr('id_task');               
                
                //pass id_task to form_duedate,form_reminder,form_subtask
                $("#form_duedate").attr("id_task",id_task);
                $("#form_reminder").attr("id_task",id_task);
                $("#form_subtask").attr("id_task",id_task);
                $("#form_comment").attr("id_task",id_task);
                $("#form_file").attr("id_task",id_task);
                
                // title

                    // show
                    $.ajax({
                        type: "post",
                        url: "http://localhost/Hung-Tran-master/php/Process/showTitle_Uncompleted.php",
                        data: {"id_task":id_task , "id_list":id_list},
                        dataType: "html", 
                        success: function (response) {
                            $("#detailtext").html(response);
                        }
                    });

                    // Mark as Completed
                    $('body').on('click' , '.task-check-title' , function()
                    {
                        var call = tasklist_body;
                        var completed = $(tasklist_body).appendTo(".task-deleted");
                        completed.children().eq(1).children().eq(0).addClass("line-through");
                        completed.children().eq(1).children().eq(1).children().eq(0).addClass("block");

                        // completed.

                        local = $(this);
                        local.addClass("none");
                        local_sibbling = $(this).parent().parent().children().eq(1).children().eq(0).addClass("block");
                        var a = local_215;

                        // attr of star-father
                        id_list = $(this).parent().parent().parent().attr("id_list");
                        id_task = $(this).parent().parent().parent().attr("id_task");
                        status = $(this).parent().parent().parent().attr("status");
                        
                        $.ajax({
                            type: "POST",
                            url: "http://localhost/Hung-Tran-master/php/Process/mark-as-Completed-Title.php",
                            data: {"id_task":id_task , "status":status,"id_list":id_list},
                            dataType: "html",
                            success: function (response) {                    
                                // nothing                  
                            }
                        }); 
                    });
                     
                    // Mark as Uncompleted
                    $('body').on('click' , '.task-checked1-title' , function()
                    {
                        var call = tasklist_body;
                        var Uncompleted = $(tasklist_body).appendTo(".task-list");
                        Uncompleted.children().eq(1).children().eq(0).removeClass("line-through");
                        Uncompleted.children().eq(1).children().eq(1).children().eq(0).removeClass("block");

                        local = $(this);
                        local.removeClass("block");
                        local_sibbling = $(this).parent().parent().children().eq(0).children().eq(0).removeClass("none");

                        // attr of star-father
                        id_list = $(this).parent().parent().parent().attr("id_list");
                        id_task = $(this).parent().parent().parent().attr("id_task");
                        unstatus = $(this).parent().parent().parent().attr("unstatus");

                        $.ajax({
                            type: "POST",
                            url: "http://localhost/Hung-Tran-master/php/Process/mark-as-Uncompleted-Title.php",
                            data: {"id_task":id_task , "unstatus":unstatus,"id_list":id_list},
                            dataType: "html",
                            success: function (response) {                    
                               // nothing             
                            }
                        });                        
                    }); 
                    
                    // Mark as Starred
                    $('body').on('click' , '.tasklist-staricon-title' , function()
                    {
                        // attr of status father
                        var id_list = $(this).parent().parent().children().eq(0).attr("id_list");
                        var id_task = $(this).parent().parent().children().eq(0).attr("id_task");
                        var star = $(this).parent().parent().children().eq(0).attr("star");

                        $(this).hide();
                        var this_sibbling = $(this).parent().parent().children().eq(2).children().eq(0).addClass("block");
                        
                        global_216_star.addClass("star-none");
                        global_217_unstar.addClass("block");

                        
                        $.ajax({
                            type: "POST",
                            url: "http://localhost/Hung-Tran-master/php/Process/mark-as-Starred-Task.php",
                            data: {"id_task":id_task , "status":status,"id_list":id_list, "star":star},
                            dataType: "dataType",
                            success: function (response) {                    
                                $(".task-list").html(response);             
                            }
                        });
                    });

                    // Mark as Unstarred
                    $('body').on('click' , '.tasklist-staricon-check-title' , function()
                    {
                        // attr of status father
                        var id_list = $(this).parent().parent().children().eq(0).attr("id_list");
                        var id_task = $(this).parent().parent().children().eq(0).attr("id_task");
                        var unstar = $(this).parent().parent().children().eq(0).attr("unstar");

                        $(this).removeClass("block");
                        var this_sibbling = $(this).parent().parent().children().eq(1).children().eq(0).show();
                         
                        global_216_star.removeClass("star-none");
                        global_217_unstar.removeClass("block");
                        
                        $.ajax({
                            type: "POST",
                            url: "http://localhost/Hung-Tran-master/php/Process/mark-as-Unstarred-Task.php",
                            data: {"id_task":id_task , "status":status,"id_list":id_list, "unstar":unstar},
                            dataType: "dataType",
                            success: function (response) {                    
                                $(".task-list").html(response);               
                            }
                        });
                    });

                    // Enter edit Task
                    $('body').on('submit' , '#edit_task' , function(e)
                    {
                        e.preventDefault();
                        
                        var title_task = $(this).children().eq(0).val();
                        var id_task = $(this).parent().attr("id_task");
                        
                        var form = $(this);
                        $.ajax({
                            type: form.attr("method"),
                            url: form.attr("action"),
                            data: {"id_task":id_task , "title_task":title_task},
                            dataType: "html",
                            success: function (response) {
                                form.children().eq(0).val(title_task);
                                $(global_218).html(title_task);
                            }
                        });
                    });
                    $('body').on('mouseleave' , '#edit_task' , function(e)
                    {
                        e.preventDefault();
                        
                        var title_task = $(this).children().eq(0).val();
                        var id_task = $(this).parent().attr("id_task");
                        
                        var form = $(this);
                        $.ajax({
                            type: form.attr("method"),
                            url: form.attr("action"),
                            data: {"id_task":id_task , "title_task":title_task},
                            dataType: "html",
                            success: function (response) {
                                form.children().eq(0).val(title_task);
                                $(global_218).html(title_task);
                            }
                        });
                    });

                // due date
                
                    //show
                    $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/show-duedate.php",
                        data: {"id_task":id_task},  //line 225
                        dataType: "html",
                        success: function (response) {
                            $(".op1").html(response);
                        }
                    });

                    //Enter to add duedate
                    $('body').on('submit' , '#form_duedate' , function(e)
                    {
                        var d = new Date();

                        var month = d.getMonth()+1;
                        var day = d.getDate();

                        var current_date = d.getFullYear() + '-' +
                            (month<10 ? '0' : '') + month + '-' +
                            (day<10 ? '0' : '') + day;

                            e.preventDefault();
                            
                            var id_task = $(this).attr("id_task");
                            var duedate = $(this).children().eq(0).children().eq(0).val();                           
                            var date = new Date(duedate);
                            var format_duedate = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
                            

                            form = $(this);
                        
                            $.ajax({
                                type: form.attr("method"),
                                url: form.attr("action"),
                                data: {"id_task":id_task, "duedate":duedate},
                                dataType: "html",
                                success: function (response) {                                   
                                    if(duedate >= current_date)
                                    {
                                        onduedate.html(format_duedate);
                                        overduedate.html('');
                                    }   
                                    else
                                    {
                                        overduedate.html(format_duedate);
                                        onduedate.html('');
                                    }
                                }
                            });
                    });
                    $('body').on('mouseleave' , '#form_duedate' , function(e)
                    {
                        var d = new Date();

                        var month = d.getMonth()+1;
                        var day = d.getDate();

                        var current_date = d.getFullYear() + '-' +
                            (month<10 ? '0' : '') + month + '-' +
                            (day<10 ? '0' : '') + day;

                            e.preventDefault();
                            
                            var id_task = $(this).attr("id_task");
                            var duedate = $(this).children().eq(0).children().eq(0).val();                           
                            var date = new Date(duedate);
                            var format_duedate = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
                            

                            form = $(this);
                        
                            $.ajax({
                                type: form.attr("method"),
                                url: form.attr("action"),
                                data: {"id_task":id_task, "duedate":duedate},
                                dataType: "html",
                                success: function (response) {                                   
                                    if(duedate >= current_date)
                                    {
                                        onduedate.html(format_duedate);
                                        overduedate.html('');
                                    }   
                                    else
                                    {
                                        overduedate.html(format_duedate);
                                        onduedate.html('');
                                    }
                                }
                            });
                    });

                // reminder

                    // show 
                    $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/show-reminder.php",
                        data: {"id_task":id_task},  //line 225
                        dataType: "html",
                        success: function (response) {
                            $(".op2").html(response);
                        }
                    });

                    // Enter to add reminder
                    $("body").on('submit' , "#form_reminder" , function(e)
                    {
                        e.preventDefault();

                        var id_task = $(this).attr("id_task");
                        var reminder = $(this).children().eq(0).children().eq(0).val();

                        var form = $(this);

                        $.ajax({
                            type: form.attr("method"),
                            url: form.attr("action"),
                            data: {"id_task":id_task, "reminder":reminder},
                            dataType: "html",
                            success: function (response) {
                                cln = $(".reminder1:first").clone().appendTo(".noti-hover");
                                cln.children().eq(1).children().eq(1).html(response);
                            }
                        });
                    });
                    $("body").on('mouseleave' , "#form_reminder" , function(e)
                    {
                        e.preventDefault();

                        var id_task = $(this).attr("id_task");
                        var reminder = $(this).children().eq(0).children().eq(0).val();

                        var form = $(this);

                        $.ajax({
                            type: form.attr("method"),
                            url: form.attr("action"),
                            data: {"id_task":id_task, "reminder":reminder},
                            dataType: "html",
                            success: function (response) {
                                cln = $(".reminder1:first").clone().appendTo(".noti-hover");
                                cln.children().eq(1).children().eq(1).html(response);
                            }
                        });
                    });

                // Subtask

                    // show
                    $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/show-subtask.php",
                        data: {"id_task":id_task},  // line 225
                        dataType: "html",
                        success: function (response) {
                            $(".plus-cln-father").html(response);
                        }
                    });
                
                // file 

                    // show 
                    $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/show-file.php",
                        data: {"id_task":id_task},
                        dataType: "html",
                        success: function (response) {
                            $(".file-list").html(response);
                        }
                    });
                
                // Comment

                    // show
                    $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/show-comment.php",
                        data: {"id_task":id_task},
                        dataType: "html",
                        success: function (response) {
                            $(".comment-father").html(response);
                        }
                    });                    
                
                //date create 

                    //show 
                    $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/show_createdate_Task.php",
                        data: {"id_task":id_task},
                        dataType: "html",
                        success: function (response) {
                            $(".datetime").html(response);
                        }
                    });
            });

            // on Completed
            $('body').on('click', '.task-deleted-text1' , function ()
            {
                var local = $(this).parent();
                tasklist_body = local;                

                global_327_star = $(this).parent().children().eq(3).children().eq(0).children().eq(0);
                global_328_unstar = $(this).parent().children().eq(3).children().eq(1).children().eq(0);
                global_350 = $(this).children().eq(0);
                onduedate = $(this).parent().children().eq(2).children().eq(0);
                overduedate = $(this).parent().children().eq(2).children().eq(1);
                
                // id of class task-deleted-text1
                var id_list = $(this).attr('id_list');
                var id_task = $(this).attr('id_task');
                
                //pass id_task to form_duedate,form_reminder,subtask
                $("#form_duedate").attr("id_task",id_task);
                $("#form_reminder").attr("id_task",id_task);
                $("#form_subtask").attr("id_task",id_task);
                $("#form_comment").attr("id_task",id_task);
                $("#form_file").attr("id_task",id_task);

                // title

                    // show
                    $.ajax({
                        type: "post",
                        url: "http://localhost/Hung-Tran-master/php/Process/showTitle_Completed.php",
                        data: {"id_task":id_task , "id_list":id_list},
                        dataType: "html", 
                        success: function (response) {
                            $("#detailtext").html(response);
                            $(".task-check-title").addClass("none");
                            $(".task-checked1-title").addClass("block");
                        }
                    });

                    // Mark as Completed
                    $('body').on('click' , '.task-check-title' , function()
                    {
                        var call = tasklist_body;
                        var completed = $(tasklist_body).appendTo(".task-deleted");
                        completed.children().eq(1).addClass("line-through");
                        completed.children().eq(1).children().eq(1).children().eq(0).removeClass("none");


                        local = $(this);
                        local.addClass("none");
                        local_sibbling = $(this).parent().parent().children().eq(1).children().eq(0).addClass("block");

                        // attr of star-father
                        id_list = $(this).parent().parent().parent().attr("id_list");
                        id_task = $(this).parent().parent().parent().attr("id_task");
                        status = $(this).parent().parent().parent().attr("status");
                        
                        $.ajax({
                            type: "POST",
                            url: "http://localhost/Hung-Tran-master/php/Process/mark-as-Completed-Title.php",
                            data: {"id_task":id_task , "status":status,"id_list":id_list},
                            dataType: "html",
                            success: function (response) {                    
                                                                
                            }
                        }); 
                    });

                    // Mark as Uncompleted
                    $('body').on('click' , '.task-checked1-title' , function()
                    {
                        var call = tasklist_body;
                        var Uncompleted = $(tasklist_body).appendTo(".task-list");
                        Uncompleted.children().eq(1).removeClass("line-through");
                        Uncompleted.children().eq(1).children().eq(1).children().eq(0).addClass("none");

                        local = $(this);
                        local.removeClass("block");
                        local_sibbling = $(this).parent().parent().children().eq(0).children().eq(0).removeClass("none");
                        
                        // attr of star-father
                        id_list = $(this).parent().parent().parent().attr("id_list");
                        id_task = $(this).parent().parent().parent().attr("id_task");
                        unstatus = $(this).parent().parent().parent().attr("unstatus");                        
                        
                        $.ajax({
                            type: "POST",
                            url: "http://localhost/Hung-Tran-master/php/Process/mark-as-Uncompleted-Title.php",
                            data: {"id_task":id_task , "unstatus":unstatus,"id_list":id_list},
                            dataType: "html",
                            success: function (response) {                    
                                        
                            }
                        });
                    }); 

                    // Mark as Starred
                    $('body').on('click' , '.tasklist-staricon-title' , function()
                    {
                        // attr of status father
                        var id_list = $(this).parent().parent().children().eq(0).attr("id_list");
                        var id_task = $(this).parent().parent().children().eq(0).attr("id_task");
                        var star = $(this).parent().parent().children().eq(0).attr("star");

                        $(this).hide();
                        var this_sibbling = $(this).parent().parent().children().eq(2).children().eq(0).addClass("block");
                        
                        global_327_star.addClass("star-none");
                        global_328_unstar.addClass("block");

                        
                        $.ajax({
                            type: "POST",
                            url: "http://localhost/Hung-Tran-master/php/Process/mark-as-Starred-Task.php",
                            data: {"id_task":id_task , "status":status,"id_list":id_list, "star":star},
                            dataType: "dataType",
                            success: function (response) {                    
                                $(".task-list").html(response);               
                            }
                        });
                    });

                    // Mark as Unstarred
                    $('body').on('click' , '.tasklist-staricon-check-title' , function()
                    {
                        // attr of status father
                        var id_list = $(this).parent().parent().children().eq(0).attr("id_list");
                        var id_task = $(this).parent().parent().children().eq(0).attr("id_task");
                        var unstar = $(this).parent().parent().children().eq(0).attr("unstar");

                        $(this).removeClass("block");
                        var this_sibbling = $(this).parent().parent().children().eq(1).children().eq(0).show();
                         
                        global_327_star.removeClass("star-none");
                        global_328_unstar.removeClass("block");
                        
                        $.ajax({
                            type: "POST",
                            url: "http://localhost/Hung-Tran-master/php/Process/mark-as-Unstarred-Task.php",
                            data: {"id_task":id_task , "status":status,"id_list":id_list, "unstar":unstar},
                            dataType: "dataType",
                            success: function (response) {                    
                                $(".task-list").html(response);               
                            }
                        });
                    });

                    // Enter edit Task
                    $('body').on('submit' , '#edit_task' , function(e)
                    {
                        e.preventDefault();
                        
                        var title_task = $(this).children().eq(0).val();
                        var id_task = $(this).parent().attr("id_task");
                        
                        var form = $(this);
                        $.ajax({
                            type: form.attr("method"),
                            url: form.attr("action"),
                            data: {"id_task":id_task , "title_task":title_task},
                            dataType: "html",
                            success: function (response) {
                                form.children().eq(0).val(title_task);
                                $(global_350).html(title_task);
                            }
                        });
                    });
                    $('body').on('mouseleave' , '#edit_task' , function(e)
                    {
                        e.preventDefault();
                        
                        var title_task = $(this).children().eq(0).val();
                        var id_task = $(this).parent().attr("id_task");
                        
                        var form = $(this);
                        $.ajax({
                            type: form.attr("method"),
                            url: form.attr("action"),
                            data: {"id_task":id_task , "title_task":title_task},
                            dataType: "html",
                            success: function (response) {
                                form.children().eq(0).val(title_task);
                                $(global_350).html(title_task);
                            }
                        });
                    });

                // due date

                    //show
                    $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/show-duedate.php",
                        data: {"id_task":id_task},
                        dataType: "html",
                        success: function (response) {
                            $(".op1").html(response);
                        }
                    });

                    //Enter to add duedate
                    $('body').on('submit' , '#form_duedate' , function(e)
                    {

                        var d = new Date();

                        var month = d.getMonth()+1;
                        var day = d.getDate();

                        var current_date = d.getFullYear() + '-' + (month<10 ? '0' : '') + month + '-' + (day<10 ? '0' : '') + day;

                            e.preventDefault();
                            
                            var id_task = $(this).attr("id_task");
                            var duedate = $(this).children().eq(0).children().eq(0).val();                            
                            var date = new Date(duedate);
                            var format_duedate = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
                            form = $(this);                            

                            $.ajax({
                                type: form.attr("method"),
                                url: form.attr("action"),
                                data: {"id_task":id_task, "duedate":duedate},
                                dataType: "html",
                                success: function (response) {
                                    if(duedate >= current_date)
                                    {
                                        onduedate.html(format_duedate);
                                        overduedate.html('');
                                    }   
                                    else
                                    {
                                        overduedate.html(format_duedate);
                                        onduedate.html('');
                                    }
                                }
                            });
                    }); 
                    $('body').on('mouseleave' , '#form_duedate' , function(e)
                    {

                        var d = new Date();

                        var month = d.getMonth()+1;
                        var day = d.getDate();

                        var current_date = d.getFullYear() + '-' + (month<10 ? '0' : '') + month + '-' + (day<10 ? '0' : '') + day;

                            e.preventDefault();
                            
                            var id_task = $(this).attr("id_task");
                            var duedate = $(this).children().eq(0).children().eq(0).val();                            
                            var date = new Date(duedate);
                            var format_duedate = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
                            form = $(this);                            

                            $.ajax({
                                type: form.attr("method"),
                                url: form.attr("action"),
                                data: {"id_task":id_task, "duedate":duedate},
                                dataType: "html",
                                success: function (response) {
                                    if(duedate >= current_date)
                                    {
                                        onduedate.html(format_duedate);
                                        overduedate.html('');
                                    }   
                                    else
                                    {
                                        overduedate.html(format_duedate);
                                        onduedate.html('');
                                    }
                                }
                            });
                    });
                    
                // reminder

                    // show 
                    $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/show-reminder.php",
                        data: {"id_task":id_task},  //line 224
                        dataType: "html",
                        success: function (response) {
                            $(".op2").html(response);
                        }
                    });

                    // add reminder
                    $("body").on('submit' , "#form_reminder" , function(e)
                    {
                        e.preventDefault();

                        var id_task = $(this).attr("id_task");
                        var reminder = $(this).children().eq(0).children().eq(0).val();

                        var form = $(this);

                        $.ajax({
                            type: form.attr("method"),
                            url: form.attr("action"),
                            data: {"id_task":id_task, "reminder":reminder},
                            dataType: "html",
                            success: function (response) {
                                cln = $(".reminder1:first").clone().appendTo(".noti-hover");
                                cln.children().eq(1).children().eq(1).html(response);
                            }
                        });
                    });
                    $("body").on('mouseleave' , "#form_reminder" , function(e)
                    {
                        e.preventDefault();

                        var id_task = $(this).attr("id_task");
                        var reminder = $(this).children().eq(0).children().eq(0).val();

                        var form = $(this);

                        $.ajax({
                            type: form.attr("method"),
                            url: form.attr("action"),
                            data: {"id_task":id_task, "reminder":reminder},
                            dataType: "html",
                            success: function (response) {
                                cln = $(".reminder1:first").clone().appendTo(".noti-hover");
                                cln.children().eq(1).children().eq(1).html(response);
                            }
                        });
                    });
                    
                // Subtask

                    // show
                    $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/show-subtask.php",
                        data: {"id_task":id_task},  // line 225
                        dataType: "html",
                        success: function (response) {
                            $(".plus-cln-father").html(response);
                        }
                    });

                // file 

                    // show 
                    $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/show-file.php",
                        data: {"id_task":id_task},
                        dataType: "html",
                        success: function (response) {
                            $(".file-list").html(response);
                        }
                    }); 

                // Comment

                    // show
                    $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/show-comment.php",
                        data: {"id_task":id_task},
                        dataType: "html",
                        success: function (response) {
                            $(".comment-father").html(response);
                        }
                    });

                //date create
                   //show 
                   $.ajax({
                    type: "POST",
                    url: "http://localhost/Hung-Tran-master/php/Process/show_createdate_Task.php",
                    data: {"id_task":id_task},
                    dataType: "html",
                    success: function (response) {
                        $(".datetime").html(response);
                    }
                });
            });

            //dbl click show right
            $('body').on('dblclick' , '.tasklist-text' , function()
            {
                $(".right").css("width","367px");
                $(".middle").css("margin-right","367px");
            });

            $('body').on('dblclick' , '.task-deleted-text1' , function()
            {
                $(".right").css("width","367px");
                $(".middle").css("margin-right","367px");
            });
        
        // ENTER to ADD TASK on id="form_Task"        
        $("#form_Task").submit(function (e)
        {
            e.preventDefault();            
            // to-do-add
            var title_task = $(this).children().eq(0).children().eq(1).children().eq(0).val();
            // to-do-add-none
            var id_list = $(this).children().eq(0).children().eq(2).children().eq(0).val();

            var form = $(this);
            if($.trim($("#input-add-task").val()) != '')
            {
                $.ajax({
                    type: form.attr('method'),
                    url: "http://localhost/Hung-Tran-master/php/Process/insert-Task.php",
                    data: {"title_task":title_task , "id_list":id_list},
                    dataType: "json",
                    success: function (response) {    
                        console.log(response);            
                        cln = $(".tasklist-body:first").clone().appendTo(".task-list");                    
                        cln.children().eq(1).html(title_task);            
                        $("#input-add-task").val('');
                        attr = cln.children().eq(1).attr("id_task",response);
                        attr_origin = cln.attr("id_task",response);                                                                     
                    }
                });
            }
           
        });

        //Mark as Completed
        $("body").on('click' , '.task-check' , function()
        {
            
            var local = $(this).parent().parent().parent();
                        
            // attr of tasklist-body
            id_list = $(this).parent().parent().parent().attr("id_list");
            id_task = $(this).parent().parent().parent().attr("id_task");
            status = $(this).parent().parent().parent().attr("status");
            condition = $(this).parent().parent().parent().attr("condition");
            
            $.ajax({
                type: "POST",
                url: "http://localhost/Hung-Tran-master/php/Process/mark-as-Completed-Task.php",
                data: {"id_task":id_task , "status":status,"id_list":id_list},
                dataType: "html",
                success: function (response) {                    
                    $(".task-deleted").html(response);
                    $(local).hide(); 

                    //show title
                    $.ajax({
                        type: "post",
                        url: "http://localhost/Hung-Tran-master/php/Process/showTitle_Completed.php",
                        data: {"id_task":id_task , "id_list":id_list},
                        dataType: "html", 
                        success: function (response) {
                            $("#detailtext").html(response);
                            $(".task-check-title").addClass("none");
                            $(".task-checked1-title").addClass("block");
                        }
                    });
                    
                    //show duedate
                    $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/show-duedate.php",
                        data: {"id_task":id_task},
                        dataType: "html",
                        success: function (response) {
                            $(".op1").html(response);
                        }
                    });

                    // show reminder
                    $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/show-reminder.php",
                        data: {"id_task":id_task},  //line 224
                        dataType: "html",
                        success: function (response) {
                            $(".op2").html(response);
                        }
                    });

                    // show subtask
                    $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/show-subtask.php",
                        data: {"id_task":id_task},  // line 225
                        dataType: "html",
                        success: function (response) {
                            $(".plus-cln-father").html(response);
                        }
                    });

                    // show file
                    $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/show-file.php",
                        data: {"id_task":id_task},
                        dataType: "html",
                        success: function (response) {
                            $(".file-list").html(response);
                        }
                    });

                    // show comment
                    $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/show-comment.php",
                        data: {"id_task":id_task},
                        dataType: "html",
                        success: function (response) {
                            $(".comment-father").html(response);
                        }
                    });

                       //show  date create
                       $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/show_createdate_Task.php",
                        data: {"id_task":id_task},
                        dataType: "html",
                        success: function (response) {
                            $(".datetime").html(response);
                        }
                    });
                }
            });            
        });

        //Mark as Uncompleted
        $("body").on('click' , '.task-checked1' , function()
        {
            global_739 =  $(this).parent().parent().parent();
            
            //attr of tasklist-body on Completed
            id_list = $(this).parent().parent().parent().attr("id_list");
            id_task = $(this).parent().parent().parent().attr("id_task");
            unstatus = $(this).parent().parent().parent().attr("unstatus");
            condition = $(this).parent().parent().parent().attr("condition");

            $.ajax({
                type: "POST",
                url: "http://localhost/Hung-Tran-master/php/Process/mark-as-Uncompleted-Task.php",
                data: {"id_task":id_task , "status":status,"id_list":id_list},
                dataType: "html",
                success: function (response) {
                    $(".task-list").html(response);
                    $(global_739).hide();
                    
                    // show title
                    $.ajax({
                        type: "post",
                        url: "http://localhost/Hung-Tran-master/php/Process/showTitle_Uncompleted.php",
                        data: {"id_task":id_task , "id_list":id_list},
                        dataType: "html", 
                        success: function (response) {
                            $("#detailtext").html(response);
                        }
                    });
                    
                     //show duedate
                     $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/show-duedate.php",
                        data: {"id_task":id_task},  //line 225
                        dataType: "html",
                        success: function (response) {
                            $(".op1").html(response);
                        }
                    });

                    // show reminder
                    $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/show-reminder.php",
                        data: {"id_task":id_task},  //line 225
                        dataType: "html",
                        success: function (response) {
                            $(".op2").html(response);
                        }
                    });
                    
                    // show subtask
                    $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/show-subtask.php",
                        data: {"id_task":id_task},  // line 225
                        dataType: "html",
                        success: function (response) {
                            $(".plus-cln-father").html(response);
                        }
                    });

                    // show file
                    $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/show-file.php",
                        data: {"id_task":id_task},
                        dataType: "html",
                        success: function (response) {
                            $(".file-list").html(response);
                        }
                    });

                     // show comment
                     $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/show-comment.php",
                        data: {"id_task":id_task},
                        dataType: "html",
                        success: function (response) {
                            $(".comment-father").html(response);
                        }
                    });
                    
                    //show  date create
                    $.ajax({
                    type: "POST",
                    url: "http://localhost/Hung-Tran-master/php/Process/show_createdate_Task.php",
                    data: {"id_task":id_task},
                    dataType: "html",
                    success: function (response) {
                        $(".datetime").html(response);
                    }
                });                   
                }
            });
        });

        //Mark as Starred
        $("body").on('click' , '.tasklist-staricon' , function()
        {
            // attr of tasklist-body
            id_list = $(this).parent().parent().parent().attr("id_list");
            id_task = $(this).parent().parent().parent().attr("id_task");
            // status = $(this).parent().parent().parent().attr("status");
            star = $(this).parent().parent().parent().attr("star");
            condition = $(this).parent().parent().parent().attr("condition");

            $(this).hide();
            this_sibblings = $(this).parent().parent().children().eq(1).children().eq(0);           
            $(this_sibblings).toggle(".block");            

            $.ajax({
                type: "POST",
                url: "http://localhost/Hung-Tran-master/php/Process/mark-as-Starred-Task.php",
                data: {"id_task":id_task , "status":status,"id_list":id_list, "star":star},
                dataType: "html",
                success: function (response) {    
                    if(condition == 0)
                    {
                        $.ajax({
                            type: "post",
                            url: "http://localhost/Hung-Tran-master/php/Process/showTitle_Uncompleted.php",
                            data: {"id_task":id_task , "id_list":id_list},
                            dataType: "html", 
                            success: function (response) {
                                $("#detailtext").html(response);
                            }
                        });
                    }
                    else
                    {
                        $.ajax({
                            type: "post",
                            url: "http://localhost/Hung-Tran-master/php/Process/showTitle_Completed.php",
                            data: {"id_task":id_task , "id_list":id_list},
                            dataType: "html", 
                            success: function (response) {
                                $("#detailtext").html(response);
                                $(".task-check-title").addClass("none");
                                $(".task-checked1-title").addClass("block");
                            }
                        });                       
                    }
                }
            });
        });

        //Mark as Unstarred
        $("body").on('click' , '.tasklist-staricon-check' , function()
        {
            global = $(this).parent().parent().parent();
            
            // attr of tasklist-body
            id_list = $(this).parent().parent().parent().attr("id_list");
            id_task = $(this).parent().parent().parent().attr("id_task");
            status = $(this).parent().parent().parent().attr("status");
            unstar = $(this).parent().parent().parent().attr("unstar");
            condition = $(this).parent().parent().parent().attr("condition");

            $(this).hide();
            this_sibblings = $(this).parent().parent().children().eq(0).children().eq(0);           
            $(this_sibblings).toggle(".star-none");

            $.ajax({
                type: "POST",
                url: "http://localhost/Hung-Tran-master/php/Process/mark-as-Unstarred-Task.php",
                data: {"id_task":id_task , "status":status,"id_list":id_list, "unstar":unstar},
                dataType: "html",
                success: function (response) {
                    if(condition == 0)
                    {
                        $.ajax({
                            type: "post",
                            url: "http://localhost/Hung-Tran-master/php/Process/showTitle_Uncompleted.php",
                            data: {"id_task":id_task , "id_list":id_list},
                            dataType: "html", 
                            success: function (response) {
                                $("#detailtext").html(response);
                            }
                        });
                    }
                    else
                    {
                        $.ajax({
                            type: "post",
                            url: "http://localhost/Hung-Tran-master/php/Process/showTitle_Completed.php",
                            data: {"id_task":id_task , "id_list":id_list},
                            dataType: "html", 
                            success: function (response) {
                                $("#detailtext").html(response);
                                $(".task-check-title").addClass("none");
                                $(".task-checked1-title").addClass("block");
                            }
                        });                       
                    }
                }
            });
        });

        //Delete Task
        $("body").on('contextmenu' ,'.tasklist-body', function(e){
                
                global = $(this);
                e.preventDefault();
                $(".tasklist-menu").toggle();
                $(".tasklist-menu").css({left:e.pageX, top:e.pageY});

                //id of task
                id_task = $(this).attr("id_task");
                var title_task = $(this).children().eq(1).html();

                // pass title_task to delete-layout1
                $(".delete-layout-content1-text11").html(title_task);

                // click ".TLmenu11" to show delete layout
                $("body").on('click', '.TLmenu11' , function()
                {
                    $(".delete-layout1").show(); // delete layout of task
                    $(".tasklist-menu").hide();
                });

                // click ".BD2" to delete task 
                $("body").on('click' , '.BD2' , function()
                {
                    $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/delete-Task.php",
                        data: {"id_task":id_task},
                        dataType: "html",
                        success: function (response) {
                            $(global).remove();                        
                        }
                    });

                    // close deletelayout1
                    $(".delete-layout1").hide();
                });
        });

    // SUBTASK

        // add subtask
        $("body").on('submit' , '#form_subtask' , function(e)
        {
            e.preventDefault();

            var title_subtask = $(this).children().eq(0).children().eq(1).children().eq(0).val();
            var id_task = $(this).attr("id_task");
            
            var form = $(this);

            if($.trim($("#themop3").val()) != '')
            {
                $.ajax({
                    type: form.attr("method"),
                    url: form.attr("action"),
                    data: {"id_task":id_task,"title_subtask":title_subtask},
                    dataType: "html",
                    success: function (response) {
                        cln = $(".plus-cln:first").clone().appendTo(".plus-cln-father");
                        cln.children().eq(1).children().eq(0).children().eq(0).val(title_subtask);
                        $("#themop3").val('');
                        attr_origin = cln.attr("id",response);
                    }
                });
            }
            
        });

        $("body").on('mouseleave' , '#form_subtask' , function(e)
        {
            e.preventDefault();
          
            var title_subtask = $(this).children().eq(0).children().eq(1).children().eq(0).val();
            var id_task = $(this).attr("id_task");
            
            var form = $(this);
                        
            if($.trim($("#themop3").val()) != '')
            {
                $.ajax({
                    type: form.attr("method"),
                    url: form.attr("action"),
                    data: {"id_task":id_task,"title_subtask":title_subtask},
                    dataType: "html",
                    success: function (response) {
                        cln = $(".plus-cln:first").clone().appendTo(".plus-cln-father");
                        cln.children().eq(1).children().eq(0).children().eq(0).val(title_subtask);
                        $("#themop3").val('');
                        attr_origin = cln.attr("id",response);
                    }
                });
            }     
        });

        // update 
        $('body').on('submit' , ".form_subtask_update" , function(e)
        {
            e.preventDefault();
            
            var id_subtask = $(this).parent().attr("id");
            var title_subtask = $(this).children().eq(0).children().eq(0).val();
            var input_subtask = $(this).children().eq(0).children().eq(0);
            var form = $(this);

            $.ajax({
                type: form.attr("method"),
                url: form.attr("action"),
                data: {"id_subtask":id_subtask,"title_subtask":title_subtask},
                dataType: "html",
                success: function (response) {
                    $(input_subtask).val(title_subtask);
                }
            });
        });
        $('body').on('mouseleave' , ".form_subtask_update" , function(e)
        {
            e.preventDefault();
            
            var id_subtask = $(this).parent().attr("id");
            var title_subtask = $(this).children().eq(0).children().eq(0).val();
            var input_subtask = $(this).children().eq(0).children().eq(0);
            var form = $(this);

            $.ajax({
                type: form.attr("method"),
                url: form.attr("action"),
                data: {"id_subtask":id_subtask,"title_subtask":title_subtask},
                dataType: "html",
                success: function (response) {
                    $(input_subtask).val(title_subtask);
                }
            });
        });

        // delete
        $('body').on('click' , '.plus-cln-remove' , function()
        {
            global_835 = $(this).parent();
            
            // show delete layout subtask
            $(".delete-layout2").show();

            id_subtask = $(this).parent().attr("id");
            
            //pass title_subtask to layout
            var title_subtask = $(this).parent().children().eq(1).children().eq(0).children().eq(0).val();            
            $(".delete-layout-content1-text11").html(title_subtask);

            // click ".BD2" to delete subtask
            $('body').on('click', '.BD2' , function()
            {                
                $.ajax({
                    type: "POST",
                    url: "http://localhost/Hung-Tran-master/php/Process/delete-subtask.php",
                    data: {"id_subtask":id_subtask},
                    dataType: "html",
                    success: function (response) {
                        global_835.remove();
                        $(".delete-layout2").hide();
                    }
                });
            });
          
        });

        // check
        $('body').on('click' , '.task-checkplus' , function()
        {
            var id_subtask = $(this).parent().parent().attr('id');
            var check = $(this).parent().parent().attr('check');
                        
            $(this).hide();
            $(this).siblings().addClass("block");
            title_subtask = $(this).parent().parent().children().eq(1).children().eq(0).children().eq(0);

            $.ajax({
                type: "POST",
                url: "http://localhost/Hung-Tran-master/php/Process/mark-as-Checked-subtask.php",
                data: {"id_subtask":id_subtask,"check":check},
                dataType: "html",
                success: function (response) {
                    $(title_subtask).addClass("line-through");
                }
            });
        });

        // uncheck
        $('body').on('click' , '.task-checkedplus1' , function()
        {
            var id_subtask = $(this).parent().parent().attr('id');
            var uncheck = $(this).parent().parent().attr('uncheck');

            $(this).removeClass("block");
            $(this).siblings().show();
            title_subtask = $(this).parent().parent().children().eq(1).children().eq(0).children().eq(0);
           
            $.ajax({
                type: "POST",
                url: "http://localhost/Hung-Tran-master/php/Process/mark-as-Unchecked-subtask.php",
                data: {"id_subtask":id_subtask,"uncheck":uncheck},
                dataType: "html",
                success: function (response) {
                    $(title_subtask).removeClass("line-through");
                }
            });
        });
    

    // File 

        // add file 
        $('body').on('submit' , '#form_file' , function(e)
        {
            e.preventDefault();
            
            var id_task = $(this).attr("id_task");
            var file = $(this).children().eq(0).children().eq(1).children().eq(0).val();
            file_format = file.replace("C:\\fakepath\\", "");
            
            $.ajax({
                type: "POST",
                url: "http://localhost/Hung-Tran-master/php/Process/insert-file.php",
                data: {"id_task":id_task,"file_format":file_format},
                dataType: "html",
                success: function (response) {
                    cln = $(".file-list-layout:first").clone().appendTo(".file-list");
                    cln.children().eq(0).children().eq(0).children().eq(0).attr("src", "../image/" +file_format);
                    cln.children().eq(0).children().eq(1).children().eq(0).attr("href","../image/"+ file_format);
                    cln.children().eq(0).children().eq(1).children().eq(0).children().eq(0).html(file_format);
                    cln.children().eq(0).children().eq(1).children().eq(1).children().eq(1).html(response);
                    cln.children().eq(0).attr("date_create",response);
                }
            });
        });

        // delete file
        $('body').on('click' , '.file-remove' , function()
        {
            parent = $(this).parent().parent().parent().parent();

            // show layout
            $(".delete-layout4").show();

            date_create = $(this).parent().parent().parent().attr("date_create");
            console.log("TCL: date_create", date_create)
            
            // pass title to delete layout 4
            var title_file = $(this).parent().parent().children().eq(0).children().eq(0).html();
            $(".delete-layout-content1-text11").html(title_file);

            $('body').on('click' , ".BD2" , function()
            {
                $.ajax({
                    type: "POST",
                    url: "http://localhost/Hung-Tran-master/php/Process/delete-file.php",
                    data: {"date_create":date_create},
                    dataType: "html",
                    success: function (response) {
                        $(".delete-layout4").hide();
                        parent.hide();                       
                    }
                });
            });
           
            
        });
        
    // COMMENT
        
        // add comment
        $('body').on('submit' , '#form_comment' , function(e)
        {
            e.preventDefault();
            
            var id_task = $(this).attr("id_task");
            title_comment = $(this).children().eq(0).children().eq(0).children().eq(0).children().eq(0).val();
            var form = $(this);

            if($.trim($("#them2").val()) != '')
            {
                $.ajax({
                    type: form.attr("method"),
                    url: form.attr("action"),
                    data: {"id_task":id_task,"title_comment":title_comment},
                    dataType: "html",
                    success: function (response) {
                        cln = $(".comment:first").clone().appendTo(".comment-father");
                        cln.children().eq(1).children().eq(1).html(title_comment);
                        cln.children().eq(1).children().eq(0).children().eq(0).html(response);
                        $("#them2").val('');
                        cln.attr("date_create",response);
                    }
                }); 
            }
                     
        })

        // delete 
        $('body').on('click' , '.comment-text-icon' , function()
        {
            global_973 = $(this).parent();
            // show delete layout comment
            $(".delete-layout3").show();

            id_comment = $(this).parent().attr("date_create");
            console.log("TCL: id_comment", id_comment)
            
            //pass title_comment to layout
            var title_comment = $(this).parent().children().eq(1).children().eq(1);
            $(".delete-layout-content1-text11").html(title_comment);

            $('body').on('click', '.BD2' , function()
            { 
                $.ajax({
                    type: "POST",
                    url: "http://localhost/Hung-Tran-master/php/Process/delete-comment.php",
                    data: {"id_comment":id_comment},
                    dataType: "html",
                    success: function (response) {
                        global_973.remove();
                        $(".delete-layout3").hide();
                    }
                });
            });
        });

    // Search 
    $('body').on('submit' , '#search' , function(e)
    {
        e.preventDefault();
        
        var search_input = $(this).children().children().eq(0).val();
        var form = $(this);

        $.ajax({
            type: form.attr('method'),
            url: form.attr('action'),
            data: {"search_input":search_input},
            dataType: "html",
            success: function (response) {
                $(".task-list").html(response);
                $(".task-deleted").hide();
                $(".to-dos").hide();
            }
        });
    });
});  
