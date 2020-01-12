<?php 
    ob_start();
    session_start();
    $html =  $_SESSION['randomNumber']; // mã số đẫ dc gửi tới email ng dùng

    $code = $_POST['code'];
    
    $thongbao = true;

    if($code == $html)// nếu nhập đúng
    {
        header("location:../../html/resetPassword.php?confirmCode=".$thongbao);
    }
    else
    {
        header("location:../../html/verify-code.php?wrongCode=".$thongbao);
    }
    ob_end_flush();
?>