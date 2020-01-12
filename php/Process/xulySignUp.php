<?php
    include "connect.php";

    $email = $_POST['email'];
    $password = $_POST['password'];
    $repass = $_POST['re-password'];
    $md5 = md5($password); // mã hóa mật khẩu
    $thongbao = true;

    $check_email = $db->prepare("SELECT * FROM user WHERE username =? "); // khởi tạo prepare từ biến $db trong connect.php -> chọn trường username trong database
    $check_email->execute(array($email)); // thực thi và lấy dữ liệu theo kiểu mảng 

    if($check_email->rowCount() > 0 ) // trả về số lượng bản ghi bị tác động bởi truy vấn
    {
        header("location:../../html/sign-up.php?exist=".$thongbao);
    }
    else
    {
        if($password != $repass)
        {
            header("location:../../html/sign-up.php?inexactitude=".$thongbao);
        }
        else
        {
            $insert = $db->prepare("INSERT INTO user(username,password) values (?,?)");
            $insert->bindParam('1',$email); // Gán các biến (lúc này chưa mang giá trị) vào các placeholder theo thứ tự tương ứng
            $insert->bindParam('2',$md5);
            $insert->execute();
            
            if($insert->rowCount() > 0) // trả về số lượng row bị tác động sau khi thực hiện các thao tác DELETE, INSERT và UPDATE.
            {
                header("location:../../html/login.php?loginSuccess=".$thongbao);// redirect voi tham so
            }
            
        }
    }





    // ob_start(); 
    // include "../Class/ClassAccount.php";
    // session_start();

    // $listAccount = $_SESSION['account']; 

    // $e = $_POST["email"];
    // $p = $_POST["password"];
    // $repass = $_POST["re-password"];
    // $thongbao = true;

    // $dem = false;
    // for($i = 0; $i < count($list) ; $i++)
    // {
    //     if ($e == $list[$i]->getname())
    //     {
    //         $dem = true;
    //     }
    // }
    // //điều kiện đăng ký
    // if($dem == true)
    // {
    //         header("location:../../html/sign-up.php?exist=".$thongbao);
    // }
    // else
    // {
    //     if($p != $repass)
    //     {
    //         header("location:../../html/sign-up.php?inexactitude=".$thongbao);
    //     }
    //     else
    //     {   
    //         for ($i=0; $i < count($listAccount) ; $i++) { 
    //             $userId = $listAccount[$i]->getId();
    //         }
    //         $userId++;
    //         $listAccount[] = new account($userId,$e,$p);
    //         $_SESSION['account'] = $listAccount;
    //         $_SESSION['userId'] = $userId;
    //         header("location:../../html/login.php?loginSuccess=".$thongbao);// redirect voi tham so
    //     }
    // }
    // ob_end_flush();
?>
