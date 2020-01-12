class MainEvent
  {
    constructor()
    { //khởi tạo ở trên và sẽ chạy hàm constructor 
      this.initEvent();// Và gọi tới hàm initEvent
    }
    
     xoa;
    initEvent(){
       
       const me = this;

      // gán sự kiện Click cho tasklist-body và gọi function toggleTask---chỉ click cho các ptu mẫu mà chưa trỏ tới cln khi thêm
      $(".tasklist-body").click(this.toggleTasklistBody);
      //Khi html mới load ra thì "on" sẽ làm nvu load lại sự kiện click mới có tác dụng--và trỏ đến lại cái function toggleTasklistbody
      $(document).on("click",".tasklist-body",this.toggleTasklistBody);


      // $(".ds2-hover").click(this.load_href);

      //EVENT NÚT LIST-TOGGLE
      $(".list-toggle").click(function()
      {
        $(".hiddenclass").toggle();
        $(".left").toggleClass("left-toggle");
        $(".middle").toggleClass("middle-toggle");
      });
     
      //EVENT CLICK USERNAME TRỎ RA USERNAME-HOVER VÀ CLICK OUTSIDE
      $(".username").click(this.toggleUsername);
      $(document).mouseup(function(e)
      {
        var usernameHover = $(".username-hover");
        if(!usernameHover.is(e.target) && usernameHover.has(e.target).length === 0)
        {
          usernameHover.fadeOut();
        }
      });

      //EVENT CLICK ACCOUNT SETTINGS TRỎ RA ACCOUNT
      $(".ul3").click(this.OpenAccount);

      //EVENT CHỌN TAB GENERAL VÀ ACCOUNT TRONG USERNAME-HOVER
      $(".account-left-ds1").click(this.AccountLeftds1);
      $(".account-left-ds2").click(this.AccountLeftds2);

      //EVENT CLICK CHO NÚT DONE TRONG USERNAME-HOVER
      $(".footer-button").click(this.doneBtn);

      //EVENT CLICK CHO ICON NOTI VÀ CLICK OUTSIDE
      $(".noti").click(this.notiIcon);
      $(document).mouseup(function(e)
      {
        var notiHover = $(".noti-hover");
        if(!notiHover.is(e.target) && notiHover.has(e.target).length === 0)
        {
          notiHover.fadeOut();
        }
      });

      //EVENT CLICK CHO ICON MESS VÀ CLICK OUTSIDE
      $(".mess").click(this.messIcon);
      $(document).mouseup(function(e)
      {
        var messHover = $(".mess-hover");
        if(!messHover.is(e.target) && messHover.has(e.target).length === 0)
        {
          messHover.fadeOut();
        }
      });

      //EVENT CLICK CHO ICON SORT
      $(".sort").click(this.sortIcon);
      $(document).mouseup(function(e)
      {
        var sortHover = $(".sort-hover");
        if(!sortHover.is(e.target) && sortHover.has(e.target).length === 0)
        {
          sortHover.fadeOut();
        }
      });

      //EVENT CLICK CHO ICON MORE
      $(".more").click(this.moreIcon);
      $(document).mouseup(function(e)
      {
        var moreHover = $(".more-hover");
        if(!moreHover.is(e.target) && moreHover.has(e.target).length === 0)
        {
          moreHover.fadeOut();
        }
      });

      //EVENT CLICK CHO COMPLETE TO-DOS
      $(".to-dos").click(this.todoIcon);
      // $(document).mouseup(function(e)
      // {
      //   var taskDeletedHover = $(".task-deleted-hover");
      //   if(!taskDeletedHover.is(e.target) && taskDeletedHover.has(e.target).length === 0)
      //   {
      //     taskDeletedHover.fadeOut();
      //   }
      // });

      //EVENT ẨN THANH RIGHT 
      $(".close-icon").click(this.closeIcon);

      //EVENT HIỆN THANH RIGHT
      // $(".tasklist-text").dblclick(this.showRight);

      //EVENT CONTEXT MENU CHO TASKLIST-BODY VÀ XÓA PHẦN TỬ THEO BIẾN TOÀN CỤC me.xoa
      // $(document).on("contextmenu",".tasklist-body",function(e){
      //   me.xoa = $(this);
      //   $(".tasklist-menu").toggle();
      //   e.preventDefault();
      //   $(".tasklist-menu").css({left:e.pageX, top:e.pageY});
      //   $(".BD2").click(function(){
      //     $(me.xoa).remove();
      //     $(".delete-layout").hide();
      //   });
      // });
      $(document).mouseup(function(e)
      {
        var tasklistMenu = $(".tasklist-menu");
        if(!tasklistMenu.is(e.target) && tasklistMenu.has(e.target).length === 0)
        {
          tasklistMenu.fadeOut();
        }
      });

      //EVENT CONTEXT MENU CHO TASK-DELETED
      $(".task-deleted-hover").contextmenu(this.rightclickTaskDeleted);
      $(document).mouseup(function(e)
      {
        var taskDeletedHoverContextMenu = $(".task-deleted-hover-contextmenu");
        if(!taskDeletedHoverContextMenu.is(e.target) && taskDeletedHoverContextMenu.has(e.target).length === 0)
        {
          taskDeletedHoverContextMenu.fadeOut();
        }
      });

      //EVENT CONTEXT MENU CHO DS1-EMAIL
      $(".ds1").contextmenu(this.rightclickDs1);
      $(document).mouseup(function(e)
      {
        var leftcontextmenuInbox = $(".left-contextmenu-inbox");
        if(!leftcontextmenuInbox.is(e.target) && leftcontextmenuInbox.has(e.target).length === 0)
        {
          leftcontextmenuInbox.fadeOut();
        }
      });

      //EVENT CONTEXT MENU CHO DS-234567 VÀ XÓA PHẦN TỬ THEO BIẾN TOÀN CỤC me.xoa
      // $(document).on("contextmenu",".ds2",function(e){
      //   //gán biến toàn cục vào con trỏ this tới danhsach
      //   me.xoa = $(this);
      //   $(".left-contextmenu").toggle();
      //   e.preventDefault();
      //   $(".left-contextmenu").css({left:e.pageX, top:e.pageY});
      //   //gọi tới nút BD2 trong delete-layout để xóa  Ở BÊN AJAX
        
      // });
      $(document).mouseup(function(e)
      {
        var leftcontextmenuDS = $(".left-contextmenu");
        if(!leftcontextmenuDS.is(e.target) && leftcontextmenuDS.has(e.target).length === 0)
        {
          leftcontextmenuDS.fadeOut();
        }
      });

      //EVENT CHO CHỮ LIST MEMBER TRONG CREATE LIST
      $('#layout-header-optiontext2').click(this.listMember);

      //EVENT CHO CHỮ LIST OPTION TRONG CREATE LIST
      $(".layout-header-optiontext2").click(this.listOption);

      //EVENT PHẦN DELETED-LAYOUT CỦA CONTEXT MENU Ở GIỮA
      // $(".TLmenu11").click(this.DeleteTodo);
      $(".BD1").click(this.btnCancelDeleteLayout);
      // $(".BD2").click(this.btnDeleteTodoDeleteLayout);

      // EVENT PHẦN DELETED-LAYOUT CỦA CONTEXT MENU Ở TRÁI
      $(".LC8").click(this.DeleteList);
      
      //EVENT CHO SUBTASK
        //THÊM
        // $(document).on("keypress",".op3",function(e){
        //   var keycode = (e.keyCode ? e.keyCode : e.which);
        //   if(keycode == '13' && $("#themop3").val() !=0)
        //   {
        //     var content1 = $("#themop3").val();
        //     var clnSubtask = $(".plus-cln:first").clone().appendTo(".plus-cln-father");
        //     clnSubtask.children()[1].innerHTML = content1;
        //     $("#themop3").val('');
        //   }
        // });

        // XÓA 
        // $(document).on("click",".plus-cln-remove",function()
        // {
        //   me.xoa = $(this).parent();
        //   var id_subtask = $(this).parent().children().eq(1).children().eq(0).children().eq(1).val(); // eq(1) = second element of the chilren
        //   console.log(id_subtask);
        //   $("#subtask_id").val(id_subtask);
        //   $(".delete-layout2").show();
        //   $(".BD2").click(function()
        //   {
        //     $(me.xoa).remove();
        //     $(".delete-layout2").hide();
        //   });
        //   // $('#idtask').val(id_subtask);
        // });  

        // // ĐỔI CSS
        // $(document).on("click",".task-checkplus",function(event){
        //   event.stopPropagation();
        //   $(this).hide();
        //   $(this).siblings().show();
        //   me.xoa = $(this).parent().parent().find(".plus-cln-text");
        //   me.xoa.addClass("plus-cln-css");
        // });
        // $(document).on("click",".task-checkedplus1",function(event){
        //   event.stopPropagation();
        //   $(this).hide();
        //   $(this).siblings().show();
        //   me.xoa = $(this).parent().parent().find(".plus-cln-text");
        //   me.xoa.removeClass("plus-cln-css");
        // });

      //EVENT CHO COMMENT
        //THÊM
        // $(".comment-add").keypress(this.commentAdd);

        // XÓA
        // $(document).on("click",".comment-text-icon",function(){
        //   me.xoa = $(this).parent();
        //   var id_comment = $(this).parent().children().eq(1).children().eq(2).val();
        //   console.log(id_comment);
        //   $("#id_comment").val(id_comment);
        //   $(".delete-layout3").show();
        //   $(".BD2").click(function(){
        //     $(me.xoa).remove();
        //     $(".delete-layout3").hide();
        //   });
        // });  

      //EVENT CHO TASKLIST BODY
        //THÊM
        // $(".addtask").keypress(this.addtaskAdd);   

        //CHUYỂN XUỐNG DƯỚI
        // $(document).on("click",".task-check",function(event){
        //   me.xoa = $(this).parent().parent();
        //   event.stopPropagation();// ngăn sự kiện ko lan tỏa lên phần tử mẹ
        //   $(this).hide();
        //   $(this).siblings().show();
        //   $(me.xoa).appendTo(".task-deleted-hover");
        //   $(me.xoa).removeClass("tasklist-hidden");
        //   $(me.xoa).removeClass("tasklist-body");
        //   $(me.xoa).addClass("tasklist-body22");
        // });

        //CHUYỂN LÊN TRÊN
        // $(document).on("click",".task-checked1",function(event){
        //   me.xoa = $(this).parent().parent();
        //   event.stopPropagation();// ngăn sự kiện ko lan tỏa lên phần tử mẹ
        //   $(this).hide();
        //   $(this).siblings().show();
        //   $(me.xoa).appendTo(".tasklist-all");
        //   $("tasklist-all:nth-of-type(2)").append($(me.xoa));
        //   $(me.xoa).removeClass("tasklist-hidden");
        //   $(me.xoa).addClass("tasklist-body222");
        //   $(me.xoa).removeClass("tasklist-body22");
        //   $(me.xoa).addClass("tasklist-body");
        // });

        //ĐỔ DỮ LIỆU TỪ LEFT SANG MIDDLE TOP
        $(document).on("click",".ds2A",function(){
          var contentLeft = $(this).children()[1];
          $(contentLeft).html();
          $("#title-text").html($(contentLeft).html());
        });

        //ĐỔ DỮ LIỆU TỪ MIDDLE SANG RIGHT TOP
        $(document).on("click",".tasklist-body",function(){
          var contentMiddle = $(this).children()[1];
          $(contentMiddle).html();
          $("#detailtext").html($(contentMiddle).html());
        });
      
        // $(document).on("click",".tasklist-staricon",function(e){          
        //   e.stopPropagation();
        //   $(this).hide();
        //   $(this).siblings().show();          
           
        //   $(".tasklist-all").append($(this).parent());  
        // });
        // $(document).on("click",".tasklist-staricon-check",function(e){
        //   e.stopPropagation();
        //   $(this).hide();
        //   $(this).siblings().show();
        // });

        
      //EVENT XÓA Ở TASKLIST-DELETE CHƯA LÀM DC
    }

    //FUNCTION ĐỔI MÀU CHO TASKLIST-BODY
    toggleTasklistBody()
    { 
      // $(this).addClass("tasklist-hidden");//để chỉ click vào 1 lần
      // $(this).siblings().removeClass("tasklist-hidden");// this là trỏ đến đúng vị trí mình click, sibbling sẽ trả về toàn bộ ptu khác và xóa class cho sibbling
    }

    //FUNCTION CLICK USERNAME TRỎ RA USERNAME-HOVER
    toggleUsername()
    {
      $(".username-hover").toggle();
    }

    //FUNCTION CLICK ACCOUNT SETTINGS TRỎ RA ACCOUNT
    OpenAccount(){
      $(".account").show();
    }

    //FUNCTION CHỌN TAB GENERAL VÀ ACCOUNT TRONG USERNAME-HOVER
    AccountLeftds1()
    {
        $(".account-right2").show();
        $(".account-right").hide();
    }
    AccountLeftds2()
    {
        $(".account-right").show();
        $(".account-right2").hide();
    }

    //FUNCTION CLICK CHO NÚT DONE TRONG USERNAME-HOVER
    doneBtn()
    {
        $(".account").hide();
    }

    //FUNCTION CLICK CHO ICON NOTI VÀ CLICK OUTSIDE
    notiIcon()
    {
        $(".noti-hover").toggle();
    }

    //FUNCTION CLICK CHO ICON MESS VÀ CLICK OUTSIDE
    messIcon()
    {
        $(".mess-hover").toggle();
    }

    //FUNCTION CLICK CHO ICON SORT
    sortIcon()
    {
      $(".sort-hover").toggle();
    }

    //FUNCTION CLICK CHO ICON MORE
    moreIcon()
    {
      $(".more-hover").toggle();
    }

    //FUNCTION CLICK CHO COMPLETE TO-DOS
    // todoIcon()
    // {
    //   $(".task-deleted-hover").toggle();
    // }

    //FUNCTION ẨN THANH RIGHT
    closeIcon()
    {
      $(".right").css("width","0px");
      $(".middle").css("margin-right","0px");
    }

    //FUNCTION HIỆN THANH RIGHT
    showRight()
    {
      $(".right").css("width","367px");
      $(".middle").css("margin-right","367px");
    }

    //FUNCTION CONTEXT MENU CHO TASKLIST-BODY
    // rightclickTasklistBody(e)
    // {
    //   me.xoa = $(this);
    //   $(".tasklist-menu").toggle();
    //   e.preventDefault();
    //   $(".tasklist-menu").css({left:e.pageX, top:e.pageY});
    // }

    //FUCNTION CONTEXT MENU CHO TASK-DELETED
    rightclickTaskDeleted(e)
    {
      $(".task-deleted-hover-contextmenu").toggle();
      e.preventDefault();
      $(".task-deleted-hover-contextmenu").css({left:e.pageX, top:e.pageY});
    }

    //FUNCTION CONTEXT MENU CHO DS1-EMAIL
    rightclickDs1(e)
    {
      $(".left-contextmenu-inbox").toggle();
      e.preventDefault();
      $(".left-contextmenu-inbox").css({left:e.pageX, top:e.pageY});
    }

    // FUNCTION CONTEXT MENU CHO DS-234567
    // rightclickDs234567(e)
    // {
    //   me.xoa = $(this);
    //   $(".left-contextmenu").show();
    //   e.preventDefault();
    //   $(".left-contextmenu").css({left:e.pageX, top:e.pageY});
    // }

    //FUNCTION CHO CHỮ LIST MEMBER TRONG CREATE LIST
    listMember()
    {
      $('#layout-header-optiontext2').css("color","#328ad6");
      $('#layout-header-optiontext2').css("border-bottom","1px solid #328ad6");
      $(".layout-header-inputfake").show();
      $(".layout-member").show();
      $(".layout-tabOption").hide();
      $(".layout-header-optiontext2").css("color","#737272");
      $(".layout-header-optiontext2").css("border-bottom","1px solid #e0e0df");

    }

    //FUNCTION CHO CHỮ LIST OPTION TRONG CREATE LIST
    listOption()
    {
      $('#layout-header-optiontext2').css("color","#737272");
      $('#layout-header-optiontext2').css("border-bottom","1px solid #e0e0df");
      $(".layout-header-inputfake").hide();
      $(".layout-member").hide();
      $(".layout-tabOption").show();
      $(".layout-header-optiontext2").css("color","#328ad6");
      $(".layout-header-optiontext2").css("border-bottom","1px solid #328ad6");
    }

    //FUNCTION PHẦN DELETED-LAYOUT CỦA CONTEXT MENU Ở GIỮA VÀ TRÁI
    // DeleteTodo()
    // {
    //   $(".delete-layout1").show();
    //   $(".tasklist-menu").hide();
    // }

    btnCancelDeleteLayout()
    {
      $(".delete-layout1").hide(); // cancel of task 
      $(".delete-layout").hide(); // cancel of list
      $(".delete-layout2").hide();  //cancel of subtask
      $(".delete-layout3").hide(); // cancel of comment
      $(".delete-layout4").hide();  // cancel of file
    }

    // btnDeleteTodoDeleteLayout()
    // {$(".delete-layout").hide();
    //   $(".delete-layout").hide();
    //   $(me.xoa).remove();
    // }

    //FUNCTION PHẦN DELETED-LAYOUT CỦA CONTEXT MENU Ở GIỮA
    DeleteList()
    {
      $(".delete-layout").show();
      $(".left-contextmenu").hide();
    }

    //FUNCTION THÊM CHO SUBTASK
    // subtaskAdd(e)
    // {
    //   var keycode = (e.keyCode ? e.keyCode : e.which);
    //   if(keycode == '13')
    //   {
    //     var content1 = $("#themop3").val();
    //     var clnSubtask = $(".plus-cln:first").clone().appendTo(".plus-cln-father");
    //     clnSubtask.children()[1].innerHTML = content1;
    //     $("#themop3").val('');
    //   }
    // }

    //FUNCTION THÊM CHO COMMENT
    // commentAdd(e)
    // {
    //   var keycode = (e.keyCode ? e.keyCode : e.which);
    //   if(keycode == '13' && $("#them2").val() !=0)
    //   {
    //     var content2 = $("#them2").val();
    //     var clnComment = $(".comment:first").clone().appendTo(".comment-father");
    //     clnComment.children()[1].innerHTML = content2;
    //     $("#them2").val('');
    //   }
    // }

    //FUNCTION THÊM CHO TASKLIST BODY
    // addtaskAdd(e)
    // {
    //   var keycode = (e.keyCode ? e.keyCode : e.which);
    //   if(keycode == '13' &&  $("#them").val() !=0)
    //   {
    //     var content3 = $("#them").val();
    //     var clnTask = $(".tasklist-body:first").clone().appendTo(".tasklist-all");
    //     $(".tasklist-all").append(clnTask);
    //     clnTask.children()[1].innerHTML = content3;
    //     $(".tasklist-body:nth-of-type(2)").before(clnTask);
    //     $("#them").val('');
    //   }
    // }
  }
  