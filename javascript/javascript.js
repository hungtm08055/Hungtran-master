// Biến cục bộ để xoá
// var xoacmt; 

// document.addEventListener('DOMContentLoaded', function() {
// vòng for cho các event
  
//   var clickFather = document.getElementsByClassName("clickfather");
//     for(var i =0; i<clickFather.length;i++)
//     {
//       clickFather[i].addEventListener("click",function(){
//         for(var i =0;i<clickFather.length;i++)
//         {
//          clickFather[i].classList.remove("a");
//         }
//           this.classList.add("a");
//       });
//     }
// event cho icon thông báo 
//       var noti = document.getElementsByClassName("noti")[0].addEventListener("click",function(event){
//         var notiHover =  document.getElementsByClassName("noti-hover")[0].classList.toggle("hidden");
//         event.stopPropagation();
//         });
//         var notiHover = document.getElementsByClassName("noti-hover")[0];
//         window.addEventListener("click",function(event){
//           if(event.target != notiHover)
//           {
//             document.getElementsByClassName("noti-hover")[0].classList.add("hidden");
//           }
//         });
// evetn cho icon tin nhắn 
//       var mess = document.getElementsByClassName("mess")[0].addEventListener("click",function(event){
//         var messHover =  document.getElementsByClassName("mess-hover")[0].classList.toggle("hidden");
//         event.stopPropagation();
//         });
//         var messHover = document.getElementsByClassName("mess-hover")[0];
//         window.addEventListener("click",function(event){
//           if(event.target != messHover)
//           {
//             document.getElementsByClassName("mess-hover")[0].classList.add("hidden");
//           }
//         });
// event cho icon completed to-dos
//       var todos = document.getElementsByClassName("to-dos")[0].addEventListener("click" , function(){
//         var taskDeletehover = document.getElementsByClassName("task-deleted-hover")[0];
//         if(taskDeletehover.style.display == 'block')
//         {
//           taskDeletehover.style.display = 'none';
//         }
//         else
//         {
//           taskDeletehover.style.display = 'block';
//         }
//       });
// event cho icon more
//       var more = document.getElementsByClassName("more")[0].addEventListener("click",function(event){
//         var moreHover =  document.getElementsByClassName("more-hover")[0].classList.toggle("hidden");
//         event.stopPropagation();
//         });
//         var moreHover =  document.getElementsByClassName("more-hover")[0];
//         window.addEventListener("click",function(event){
//           if(event.target != moreHover)
//           {
//             document.getElementsByClassName("more-hover")[0].classList.add("hidden");
//           }
//         });
// event cho icon sort
//       var sort = document.getElementsByClassName("sort")[0].addEventListener("click",function(event){
//         var sortHover =  document.getElementsByClassName("sort-hover")[0].classList.toggle("hidden");
//         event.stopPropagation();
//         });
//         var sortHover =  document.getElementsByClassName("sort-hover")[0];
//         window.addEventListener("click",function(event){
//           if(event.target != sortHover)
//           {
//             document.getElementsByClassName("sort-hover")[0].classList.add("hidden");
//           }
//         });
// event cho nút list toggle
//       var listToggle = document.getElementsByClassName("list-toggle")[0].addEventListener("click" , function(){
//         var left = document.getElementsByClassName("left")[0];
//         var middle = document.getElementsByClassName("middle")[0];
//         var hiddenclass1 = document.getElementsByClassName("hiddenclass");
//           for (var i = 0 ; i < hiddenclass1.length ; i++)
//           {

//             ;
//             if(hiddenclass1[i].style.display  == 'none')
//             {
//               hiddenclass1[i].style.display = 'block';
//               left.style.width = '280px';
//               middle.style.marginLeft ='280px';
//             }
//             else
//             {
//               hiddenclass1[i].style.display = 'none';
//               left.style.width = '42px';
//               middle.style.marginLeft = '42px';
//             }
//           }
//       });
// event cho div username trỏ ra username-hover
//     var username = document.getElementsByClassName("username")[0].addEventListener("click",function(event){
//       var usernameHover =  document.getElementsByClassName("username-hover")[0].classList.toggle("hidden");
//       event.stopPropagation();
//       });
//       var usernameHover =  document.getElementsByClassName("username-hover")[0];
//       window.addEventListener("click",function(event){
//         if(event.target != usernameHover)
//         {
//           document.getElementsByClassName("username-hover")[0].classList.add("hidden");
//         }
//       });
// event trỏ tới account
//       var ul3 = document.getElementsByClassName("ul3")[0].addEventListener("click", function(){
//         var account = document.getElementsByClassName("account")[0];
//         if(account.style.display == 'block')
//         {
//           account.style.display = 'none';
//         }
//         else
//         {
//           account.style.display = 'block';
//         }
//       });
// event cho account phần general
//       var accountLeftds1 = document.getElementsByClassName("account-left-ds1")[0].addEventListener("click" , function(){
//         var accountRight2 = document.getElementsByClassName("account-right2")[0];
//         if(accountRight2.style.display == 'block')
//         {
//           accountRight2.style.display = 'none';
//         }
//         else
//         {
//           accountRight2.style.display = 'block';
//         }
//       });
// event cho account phần account
//       var accountLeftds2 = document.getElementsByClassName("account-left-ds2")[0].addEventListener("click" , function(){
//         var accountRight = document.getElementsByClassName("account-right")[0];
//         if(accountRight.style.display == 'block')
//         {
//           accountRight.style.display = 'none';
//         }
//         else
//         {
//           accountRight.style.display = 'block';
//         }
//       });
// event cho nút done trong account 
//       var accountFooter = document.getElementsByClassName("account-footer")[0].addEventListener("click" , function(){
//         var account = document.getElementsByClassName("account")[0];
//         if(account.style.display == 'block')
//         {
//           account.style.display = 'none';
//         }
//         else
//         {
//           account.style.display = 'none';
//         }
//       });
// ẩn thanh right
//       var closeIcon = document.getElementsByClassName("close-icon")[0].addEventListener("click" , function(){
//         var right = document.getElementsByClassName("right")[0];
//         var middle = document.getElementsByClassName("middle")[0];
//         if(right.style.display == 'none')
//         {
//           right.style.display = 'block';
//           middle.style.marginRight = '367px';
//         }
//         else
//         {
//           right.style.display = 'none';
//           middle.style.marginRight = '0px';
//         }
//       });
// hiện thanh right
//       var tasklistBody = document.getElementsByClassName("tasklist-all")[0].addEventListener("dblclick" , function(){
//         var right = document.getElementsByClassName("right")[0];
//         var middle = document.getElementsByClassName("middle")[0];
//         if(right.style.display == 'block')
//         {
//           right.style.display = 'none';
//           middle.style.marginRight = '367px';
//         }
//         else
//         {
//           right.style.display = 'block';
//           middle.style.marginRight = '367px';
//         }
//       });
// context menu cho tasklist-body
    //   var tasklistAll = document.getElementsByClassName("tasklist-all")[0].addEventListener("contextmenu",function(event){
    //     var tasklistMenu = document.getElementsByClassName("tasklist-menu")[0].classList.toggle("hidden");
    //     event.stopPropagation();
    //     event.preventDefault();
    //     var xPosition = event.clientX;
    //     var yPosition = event.clientY;
    //     document.getElementsByClassName("tasklist-menu")[0].style.left = xPosition+"px";
    //     document.getElementsByClassName("tasklist-menu")[0].style.top = yPosition+"px";
    //   });
//       var tasklistMenu = document.getElementsByClassName("tasklist-menu")[0];
//       window.addEventListener("click",function(event){
//         if(event.target != tasklistMenu)
//         {
//           document.getElementsByClassName("tasklist-menu")[0].classList.add("hidden");
//         }
//       });
// contextmenu cho task-deleted
//       var taskDeletehover = document.getElementsByClassName("task-deleted-hover")[0].addEventListener("contextmenu", function(event){
//         var taskdeletedhoverContextmenu = document.getElementsByClassName("task-deleted-hover-contextmenu")[0].classList.toggle("hidden");
//         event.stopPropagation();
//         event.preventDefault();
//         var xPosition = event.clientX;
//         var yPosition = event.clientY;
//         document.getElementsByClassName("task-deleted-hover-contextmenu")[0].style.left = xPosition+"px";
//         document.getElementsByClassName("task-deleted-hover-contextmenu")[0].style.top = yPosition+"px";
//       });
//       var taskdeletedhoverContextmenu = document.getElementsByClassName("task-deleted-hover-contextmenu")[0];
//       window.addEventListener("click",function(event){
//         if(event.target != taskdeletedhoverContextmenu)
//         {
//           document.getElementsByClassName("task-deleted-hover-contextmenu")[0].classList.add("hidden");
//         }
//       });
// click cho createlist
//       var createList = document.getElementsByClassName("createlist")[0].addEventListener("click" , function(){
//         var createlistLayout = document.getElementsByClassName("createlist-layout")[0];
//         if(createlistLayout.style.display == 'block')
//         {
//           createlistLayout.style.display = 'none';
//         }
//         else
//         {
//           createlistLayout.style.display = 'block';
//         }
//       });
// click cho cancel trong createlist
//       var buttonCancel = document.getElementsByClassName("BTF1")[0].addEventListener("click" , function(){
//         var createlistLayout = document.getElementsByClassName("createlist-layout")[0];
//         if(createlistLayout.style.display == 'block')
//         {
//           createlistLayout.style.display = 'none';
//         }
//         else
//         {
//           createlistLayout.style.display = 'block';
//         }
//       });
// click cho save trong createlist
//       var buttonSave = document.getElementsByClassName("BTF2")[0].addEventListener("click" , function(){
//         var createlistLayout = document.getElementsByClassName("createlist-layout")[0];
//         if(createlistLayout.style.display == 'block')
//         {
//           createlistLayout.style.display = 'none';
//         }
//         else
//         {
//           createlistLayout.style.display = 'block';
//         }
//       });
// click đổi màu và chuyển tab cho list member trong crealist layout
//       var listMember = document.getElementById("layout-header-optiontext2").addEventListener("click" , function(){
//         var inputFake = document.getElementsByClassName("layout-header-inputfake")[0];
//         var layoutMember = document.getElementsByClassName("layout-member")[0];
//         var tabOption = document.getElementsByClassName("layout-tabOption")[0];
//         var listOption = document.getElementsByClassName("layout-header-optiontext2")[0];
//         if(document.getElementById("layout-header-optiontext2").style.color == '#328ad6'
//         && document.getElementById("layout-header-optiontext2").style.borderBottom == '1px solid #328ad6'
//         && inputFake.style.display == 'block'
//         && layoutMember.style.display == 'block')
//         {
//           document.getElementById("layout-header-optiontext2").style.color = '#737272';
//             document.getElementById("layout-header-optiontext2").style.borderBottom = '1px solid #e0e0df';
//           inputFake.style.display = 'none';
//           layoutMember.style.display ='none';
//         }
//         else
//         {
//           document.getElementById("layout-header-optiontext2").style.color = '#328ad6';
//           document.getElementById("layout-header-optiontext2").style.borderBottom = '1px solid #328ad6';
//           inputFake.style.display = 'block';
//           layoutMember.style.display ='block';
//           tabOption.style.display = 'none';
//           listOption.style.color = '#737272';
//           document.getElementsByClassName("layout-header-optiontext2")[0].style.borderBottom = '1px solid #e0e0df';
//         }
//       });
// click đổi màu và chuyển tab cho list option trong crealist layout
//       var listOption = document.getElementsByClassName("layout-header-optiontext2")[0].addEventListener("click" , function(){
//         var tabOption = document.getElementsByClassName("layout-tabOption")[0];
//         var inputFake = document.getElementsByClassName("layout-header-inputfake")[0];
//         var layoutMember = document.getElementsByClassName("layout-member")[0];
//         var listMember = document.getElementById("layout-header-optiontext2");
//         if(tabOption.style.display == 'block' 
//         && document.getElementsByClassName("layout-header-optiontext2")[0].style.color == '#328ad6'
//         && document.getElementsByClassName("layout-header-optiontext2")[0].style.borderBottom == ' 1px solid #328ad6')
//         {
//           tabOption.style.display = 'none';
//           document.getElementsByClassName("layout-header-optiontext2")[0].style.color = '#737272';
//           document.getElementsByClassName("layout-header-optiontext2")[0].style.borderBottom = ' 1px solid #e0e0df';
//         }
//         else
//         {
//           tabOption.style.display = 'block';
//           document.getElementsByClassName("layout-header-optiontext2")[0].style.color = '#328ad6';
//           document.getElementsByClassName("layout-header-optiontext2")[0].style.borderBottom = '1px solid #328ad6';
//           inputFake.style.display = 'none';
//           layoutMember.style.display ='none';
//           listMember.style.color = '#737272';
//           document.getElementById("layout-header-optiontext2").style.borderBottom = '1px solid #e0e0df';
//         }
//       });
// event cho phần delete-layout của contextmenu ở giữa va ben trai
//       var tlMenu11 = document.getElementsByClassName("TLmenu11")[0].addEventListener("click",function(){
//         var deleteLayout = document.getElementsByClassName("delete-layout")[0];
//         var tasklistMenu = document.getElementsByClassName("tasklist-menu")[0];
//         if(deleteLayout.style.display == 'block'
//         && tasklistMenu.style.display =='none')
//         {
//           deleteLayout.style.display ='none';
//           tasklistMenu.style.display ='block';
//         }
//         else
//         {
//           deleteLayout.style.display ='block';
//           tasklistMenu.style.display = 'none';

//         }
//       });
//       var BD1 = document.getElementsByClassName("BD1")[0].addEventListener("click",function(){
//         var deleteLayout = document.getElementsByClassName("delete-layout")[0];
//         if(deleteLayout.style.display == 'block')
//         {
//           deleteLayout.style.display = 'none';
//         }
//         else
//         {
//           deleteLayout.style.display = 'block';
//         }
//       }); 
//       var BD2 = document.getElementsByClassName("BD2")[0].addEventListener("click",function(){ 
//         document.getElementsByClassName("delete-layout")[0].style.display = 'none';
//           xoacmt.remove();
//       });
//       var lc8 = document.getElementsByClassName("LC8")[0].addEventListener("click",function(){
//         var deleteLayout = document.getElementsByClassName("delete-layout")[0];
//         var leftContextmenu = document.getElementsByClassName("left-contextmenu")[0];
//         if(deleteLayout.style.display == 'block'
//         && leftContextmenu.style.display =='none')
//         {
//           deleteLayout.style.display ='none';
//           leftContextmenu.style.display ='block';
//         }
//         else
//         {
//           deleteLayout.style.display ='block';
//           leftContextmenu.style.display = 'none';

//         }
//       });
// chuột phải cho danh sách ds left
//       var ds = document.getElementsByClassName("ds")[0].addEventListener("contextmenu",function(event){
//         var leftContextmenu =  document.getElementsByClassName("left-contextmenu")[0].classList.toggle("hidden");
//         event.stopPropagation();
//         event.preventDefault();
//         var xPosition = event.clientX;
//         var yPosition = event.clientY;
//         document.getElementsByClassName("left-contextmenu")[0].style.left = xPosition+"px";
//         document.getElementsByClassName("left-contextmenu")[0].style.top = yPosition+"px";
//         });
//         var leftContextmenu =  document.getElementsByClassName("left-contextmenu")[0];
//         window.addEventListener("click",function(event){
//           if(event.target != leftContextmenu)
//           {
//             document.getElementsByClassName("left-contextmenu")[0].classList.add("hidden");
//           }
//         });
// chuột phải cho danh sách inbox
//       var ds1 = document.getElementsByClassName("ds1")[0].addEventListener("contextmenu",function(event){
//         var leftInbox =  document.getElementsByClassName("left-contextmenu-inbox")[0].classList.toggle("hidden");
//         event.stopPropagation();
//         event.preventDefault();
//         var xPosition = event.clientX;
//         var yPosition = event.clientY;
//         document.getElementsByClassName("left-contextmenu-inbox")[0].style.left = xPosition+"px";
//         document.getElementsByClassName("left-contextmenu-inbox")[0].style.top = yPosition+"px";
//         });
//         var leftInbox =  document.getElementsByClassName("left-contextmenu-inbox")[0];
//         window.addEventListener("click",function(event){
//           if(event.target != leftInbox)
//           {
//             document.getElementsByClassName("left-contextmenu-inbox")[0].classList.add("hidden");
//           }
//         });
// đổ dữ liệu từ ds bên left sang middle
//       var danhsach = document.getElementsByClassName("danhsach");
//       for( var i = 0; i< danhsach.length;i++)
//       {
//         danhsach[i].addEventListener("click", function(){
//           var a = this.children[1].innerHTML;
//           var danhsachText = document.getElementsByClassName("danhsachtext").innerHTML;
//           document.getElementById("title-text").innerHTML = a;
//         });
//       }
// đổ dữ liệu từ middle sang right
//        var tasklistBody = document.getElementsByClassName("tasklist-body");
//        for( var i = 0; i< tasklistBody.length;i++)
//        {
//          tasklistBody[i].addEventListener("click", function(){
//            var b = this.children[1].innerHTML;
//            var tasklistbodyText = document.getElementsByClassName("tasklist-text").innerHTML;
//            document.getElementById("detailtext").innerHTML = b;
//          });
//        }
// đổi màu khi ấn vào tasklist-body
//         var tasklistBody = document.getElementsByClassName("tasklist-body");
//         for(var i=0; i<tasklistBody.length ; i++)
//         {
//           tasklistBody[i].addEventListener("click",function(){
//             for(var i=0; i<tasklistBody.length ; i++)
//             {
//               tasklistBody[i].classList.remove("tasklist-hidden");// tasklist-hidden : color: .....
//             }   
//               this.classList.add("tasklist-hidden");
//           });
//         }
// THÊM và Xoá 1 PHẦN TỬ TỪ INPUT to-do-add
//       var todoAdd = document.getElementsByClassName("addtask")[0].addEventListener("keypress" , function(){
//         var them = document.getElementById("them").value;
//         var tasklistBody = document.getElementsByClassName("tasklist-body")[0];
//         var x = event.keyCode;
//         if( x == '13' && them !=0)
//         {  
//           var them = document.getElementById("them").value;
//           event.preventDefault;
//           addelement();
//           function addelement()
//           {
//             //thêm 1 ptu mới
//             var them = document.getElementById("them").value;
//             var cln = tasklistBody.cloneNode(true);
//             cln.children[1].innerHTML = them;
//             var tasklistAll = document.getElementsByClassName("tasklist-all")[0].appendChild(cln);
//             var tasklistAll1 = document.getElementsByClassName("tasklist-all")[0];
//             tasklistAll1.insertBefore(cln, tasklistAll1.firstChild);
//             document.getElementById("them").value = '';
//             cln.addEventListener("click",function(){
              
//               var tasklistBody = document.getElementsByClassName("tasklist-body");
//                 for(var i=0; i<tasklistBody.length ; i++)
//                 {
//                     for(var i=0; i<tasklistBody.length ; i++)
//                     {
//                       tasklistBody[i].classList.remove("tasklist-hidden");
//                     }   
//                       this.classList.add("tasklist-hidden");
//                 }
//             });
//             xoá bằng contextmenu
//             cln.addEventListener("contextmenu",function(){
//                xoacmt = this;
//             });
//             // xoá xong chuyển xuống tab dưới
//             cln.childNodes[1].children[0].addEventListener("click",function(){
//               var xoa = this.parentElement.parentElement;
//               var tasklistDeleted = document.getElementsByClassName("task-deleted-hover")[0].appendChild(xoa);
//               cln.style.textDecoration = 'line-through';
//               cln.childNodes[1].children[0].style.display = 'none';
//               cln.childNodes[1].children[1].style.display = 'block'; 
//             });
//             //thêm lại vào tab trên            
//             cln.childNodes[1].children[1].addEventListener("click",function(){
//               var themlai = this.parentElement.parentElement;
//               var tasklistAll = document.getElementsByClassName("tasklist-all")[0].appendChild(themlai);
//               var tasklistAll1 = document.getElementsByClassName("tasklist-all")[0];
//               tasklistAll1.insertBefore(cln, tasklistAll1.firstChild);
//               cln.style.textDecoration = 'none';
//               cln.childNodes[1].children[0].style.display = 'block';
//               cln.childNodes[1].children[1].style.display = 'none';
//             });
            
//           }
//         }
//       });
// Thêm và xóa 1 phần tử cho input : comment 
//       var commentAdd = document.getElementsByClassName("comment-add")[0].addEventListener("keypress", function(){
//         var them2 = document.getElementById("them2");
//         var comment = document.getElementsByClassName("comment")[0];
//         var x = event.keyCode;
//         if( x == '13')
//         {
//           var them2 = document.getElementById("them2").value;
//           event.preventDefault;
//           addelement2();
//           function addelement2()
//           {
//             // thêm 1 ptu mới
//             var them2 = document.getElementById("them2").value;
//             var cln2 = comment.cloneNode(true);
//             cln2.children[1].innerHTML = them2;
//             var bodyList = document.getElementsByClassName("bodylist")[0].appendChild(cln2);
//             var bodyList1 = document.getElementsByClassName("bodylist")[0];
//             bodyList1.insertBefore(cln2, bodyList1.lastChild);
//             document.getElementById("them2").value = '';
//             //xóa ptu 
//             cln2.children[2].addEventListener("click",function(){
//               var deleteLayout = document.getElementsByClassName("delete-layout")[0];
//               if(deleteLayout.style.display == 'block')
//               {
//                 deleteLayout.style.display ='none';
//               }
//               else
//               {
//                 deleteLayout.style.display ='block';
//               }
//               xoacmt = this.parentElement;
//             });
//           }
//         }
//       });
// Thêm và xóa 1 phần tử add Subtask
//       var op3 = document.getElementsByClassName("op3")[0].addEventListener("keypress",function(){
//         var themop3 = document.getElementById("themop3");
//         var plusCln = document.getElementsByClassName("plus-cln")[0];
//         var x = event.keyCode;
//         if( x == '13')
//         {
//           var themop3 = document.getElementById("themop3").value;
//           event.preventDefault;
//           addelement3();
//           function addelement3(){
//             // Thêm 1 ptu 
//             var themop3 = document.getElementById("themop3").value;
//             var cln3 = plusCln.cloneNode(true);
//             cln3.children[1].innerHTML = themop3;
//             var plusFather = document.getElementsByClassName("plus-cln-father")[0].appendChild(cln3);
//             var plusFater1 = document.getElementsByClassName("plus-cln-father")[0];
//             plusFater1.insertBefore(cln3, plusFater1.lastChild);
//             document.getElementById("themop3").value = '';
//             // xóa 1 ptu
//             cln3.children[2].addEventListener("click",function(){
//               var deleteLayout = document.getElementsByClassName("delete-layout")[0];
//               if(deleteLayout.style.display == 'block')
//               {
//                 deleteLayout.style.display ='none';
//               }
//               else
//               {
//                 deleteLayout.style.display ='block';
//               }
//               xoacmt = this.parentElement;
//             });
            
//             // đổi hiệu ứng
//             cln3.childNodes[1].children[0].addEventListener("click",function(){
//               cln3.style.textDecoration = 'line-through';
//               cln3.childNodes[1].children[0].style.display ='none';              
//               cln3.childNodes[1].children[1].style.display = 'block';
//             });
//           }
//         }
//       });
// Thêm và xoá 1 phần tử list bên trái
//         var listSavebtn = document.getElementsByClassName("BTF2")[0];
//         var themList = document.getElementById("themList");
//         var ds2 = document.getElementsByClassName("ds2")[0];
//         //thêm 1 ptu
//         if(listSavebtn.addEventListener("click",function(){
//           var themList = document.getElementById("themList").value;
//           cln4 = ds2.cloneNode(true);
//           cln4.children[1].innerHTML = themList;
//           var ds = document.getElementsByClassName("ds")[0].appendChild(cln4);
//           document.getElementById("themList").value ='';
//           //Xoa cln4
//           cln4.addEventListener("contextmenu",function(){
//             xoacmt = this;
//           });
//         }));     
// });
