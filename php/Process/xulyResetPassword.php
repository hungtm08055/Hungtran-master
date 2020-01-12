<?php 
    include "connect.php";

    $email = $_POST['email'];
    $password = $_POST['new_password'];
    $md5 = md5($password); // mã hóa mật khẩu
    $repass = $_POST['re-password'];
    $thongbao = true;

    $check_email = $db->prepare("SELECT * FROM user WHERE username = :email"); // khởi tạo prepare từ biến $db trong connect.php -> chọn trường username trong database
    $check_email->execute(array(':email'=>$email)); // thực thi và lấy dữ liệu theo kiểu mảng 


    if($check_email->rowCount() > 0 )
    {
        if($password != $repass)
        {
            header("location:../../html/resetPassword.php?inexactitude=".$thongbao);
        }
        else
        {
            $update = $db->prepare("UPDATE user SET password = ? WHERE username = ?");
            $update->bindParam('1',$md5);
            $update->bindParam('2',$email);
            $update->execute();
            
            if($update->rowCount() > 0)
            {
                header("location:../../html/login.php?updateSucces=".$thongbao);
            }
        }
    }
    else
    {
        header("location:../../html/resetPassword.php?invalidEmail=".$thongbao);
    }
?>