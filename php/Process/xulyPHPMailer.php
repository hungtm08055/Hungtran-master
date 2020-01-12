<?php
    ob_start();
    // include "../PHPMailer-master/src/Exception.php";
    // include "../PHPMailer-master/src/OAuth.php";
    // include "../PHPMailer-master/src/PHPMailer.php";
    // include "../PHPMailer-master/src/POP3.php";
    // include "../PHPMailer-master/src/SMTP.php";
    
    include "../PHPMail/src/Exception.php";
    include "../PHPMail/src/OAuth.php";
    include "../PHPMail/src/PHPMailer.php";
    include "../PHPMail/src/POP3.php";
    include "../PHPMail/src/SMTP.php";
    include "connect.php";
    
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    session_start();

    $username = $_POST['email'];
    $html = rand(100000,999999); // hàm rand để gửi 1 dãy số trong 6 chữ số

    $mail = new PHPMailer(true);                              // Khai báo đối tượng mail
    try 
    {
        //Server settings
        $mail->SMTPDebug = 2;                                 // Khai báo để biết chi tiết lỗi ntn, nhập số 0 thì sẽ ko xuất hiện lỗi
        $mail->isSMTP();                                      // smtp là server chuyên dùng để gửi gmail
        $mail->Host = 'smtp.gmail.com';                       // truy xuất tới host của gmail
        $mail->SMTPAuth = true;                               // kích hoạt xác thực SMTP 
        $mail->Username = "tranmanhhung102@gmail.com";        // Gmail mà mình làm host để gửi
        $mail->Password = "chung2409";                        // Mật khẩu của Gmail 
        $mail->SMTPSecure = 'ssl';                            // Kích hoạt mã hóa TLS để bảo mật thông tin truyền(ssl tương tự nhưng ko update nên ít dùng, dc thay thế bởi TLS)
        $mail->Port = 465;                                    // Gmail PORT 587 tương ứng với Host : smtp.gmail.com
    
        //Recipients
        $mail->CharSet = 'UTF-8';
        $mail->setFrom('tranmanhhung102@gmail.com', 'Hùng Trần'); // khi khách hàng nhận mail sẽ biết mail gửi từ đâu
        $mail->addAddress($username, 'Guest');     // Địa chỉ mail khách hàng
        $mail->addReplyTo('tranmanhhung102@gmail.com', 'Infomation'); // khi khách hàng thay đổi sẽ gửi lại về gmail cho mình
        
    
        //Content
        $mail->isHTML(true);                                  // đặt format cho email dưới dạng HTML
        $mail->Subject = 'Xác nhận thay đổi mật khẩu';
        $mail->Body = $html."<br>"."<br>"."Mời bạn xác nhận dãy số vừa nhận được để có thể thay đổi mật khẩu theo đường link"."<br>";
        $_SESSION['randomNumber'] = $html;
    
        $mail->send();
        $thongbao = true;
        header("location:../../html/verify-code.php?confirmEmail=".$thongbao);
        
    } 
    catch (Exception $e)
    {
            echo 'Tin nhắn gửi thất bại ! ', $mail->ErrorInfo;
    }
    ob_end_flush();
//     include "../libphp-phpmailer/class.phpmailer.php";
//     include "../libphp-phpmailer/class.smtp.php";
// $mail = new PHPMailer;
// $mail->setFrom('tranmanhhung@gmail.com');
// $mail->addAddress('tranmanhhung102@gmail.com');
// $mail->Subject = 'Message sent by PHPMailer';
// $mail->Body = 'Hello! use PHPMailer to send email using PHP';
// $mail->IsSMTP();
// $mail->SMTPSecure = 'tls';
// $mail->Host = 'smtp.gmail.com';
// $mail->SMTPAuth = true;
// $mail->Port = 587;

// //Set your existing gmail address as user name
// $mail->Username = 'tranmanhhung102@gmail.com';

// //Set the password of your gmail address here
// $mail->Password = 'chung2409';
// if(!$mail->send()) {
//   echo 'Email is not sent.';
//   echo 'Email error: ' . $mail->ErrorInfo;
// } else {
//   echo 'Email has been sent.';
// }
?>