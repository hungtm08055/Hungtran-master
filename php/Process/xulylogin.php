<?php
    include "connect.php";
    session_start();

    if(isset($_POST['login']))
    {
        //lấy dữ liệu từ input 
        $id = $_POST['id'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $md5 = md5($password);                                                          // mã hóa mật khẩu
        
        //làm sạch thông tin, xóa bỏ các tag html, ký tự đặc biệt
		//mà người dùng cố tình thêm vào để tấn công theo phương thức sql injection
        $email = strip_tags($email);
		$email = addslashes($email);
		$password = strip_tags($password);
        $password = addslashes($password);
        
        $query = $db->prepare("SELECT * FROM user WHERE username=? AND password=? ");   // truy vấn field trong csdl
        $query->execute(array($email,$md5));                                            // thực thi
        $data = $query->fetch(PDO::FETCH_ASSOC);                                        // truyền toàn bộ dữ liệu trong bảng ra

        if($query->rowCount() > 0)                                                      // trả về số lượng row bị tác động sau khi thực hiên các thao tác thêm sửa xóa...
        {
            $_SESSION['user'] = $email;
            $_SESSION['user_id'] = $data['id'];
            $data['id'] = $user_id;                                         // lấy trường ID trong bảng
            header("location:../../html/hienthi.php");
        }
        else
        {
            $thongbao = true;
            header("location:../../html/login.php?incorrectIDPASS=".$thongbao);
        }
    }




    // ob_start(); 
    // include "../Class/ClassAccount.php";
    // session_start();

    // $listAccount = $_SESSION['account'];
    // // print_r($_SESSION['account']);

    // $e = $_POST["email"];
    // $p = $_POST["password"];
    // $thongbao = true;
    
    // $dem = false;
    // for($i = 0; $i < count($listAccount) ; $i++)
    // {
    //     if ($e == $listAccount[$i]->getname() && $p == $listAccount[$i]->getpass())
    //     {
    //         $dem = true;
    //         $userId = $listAccount[$i]->getId();
    //     }
    // }
    // if($dem  == true)
    // {
    //     $_SESSION['user'] = $e;
    //     $_SESSION['userId'] = $userId;
    //     header("location:../../html/hienthi.php");
    // }
    // else
    // {
    //     header("location:../../html/login.php?incorrectIDPASS=".$thongbao);
    // }

    // ob_end_flush();// giải phóng và sẽ gửi đến browser kết quả 1 lần nữa
?>