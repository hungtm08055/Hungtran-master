<?php
    session_start();
    error_reporting(0);
    
    $status = $_GET['loginSuccess'];
    if($status == true)
    {
        echo '<script language = "javascript">';
        echo 'alert("Đăng ký thành công !")';
        echo '</script>'; 
    }
    $status = $_GET['incorrectIDPASS'];
    if($status == true)
    {
        echo '<script language = "javascript">';
        echo 'alert("Sai thông tin tài khoản hoặc mật khẩu. Vui lòng thử lại!!!")';
        echo '</script>'; 
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
    <link rel="stylesheet" type="text/css" href="../css/stylelogin.css">
    <script src="../javascript/jquery-3.4.1.min.js"></script>
    <script src="../javascript/jquerylogin.js"></script>
</head>
<body>
    <div class="header">
        <div class="header-text">
          This site uses cookies for analytics, personalized content and ads. By continuing to browse this site, you agree to this use.
          <a class="header-link" href="http://wunderlist.com/privacy-policy">
            Learn more
          </a>
        </div>
    </div>
    <div class="logo">
    </div>
    <div class="login-form">
        <form class="loginTab signin" action="../php/Process/xulyPHPMailer.php" method="POST">
            <div class="header-form">Account recovery</div>
            <input type="hidden" name="_csrf" value="jjcswO4z-vQzRoeyr77_cuhRzjdOymfFPX9M"> <!--chưa hiểu-->
            <div class="loginTab-input-address">
                <div class="loginTab-input-icon">
                    <svg width="21px" height="18px" viewBox="0 0 21 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g transform="translate(-248.000000, -339.000000)" stroke-linecap="round" stroke="#2B88D9" stroke-linejoin="round">
                                <g transform="translate(231.000000, 238.000000)">
                                    <g transform="translate(0.000000, 20.000000)">
                                        <g transform="translate(0.000000, 20.000000)">
                                            <g transform="translate(0.000000, 60.000000)">
                                                <path d="M37,4.46153846 C37,3.10153846 35.8663333,2 34.4666667,2 L20.5333333,2 C19.1336667,2 18,3.10153846 18,4.46153846 L18,15.5384615 C18,16.8984615 19.1336667,18 20.5333333,18 L34.4666667,18 C35.8663333,18 37,16.8984615 37,15.5384615 L37,4.46153846 L37,4.46153846 Z M20.5333333,4.46153846 L27.5,11.2307692 L34.4666667,4.46153846"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                <div class="loginTab-input-fieldInput">
                    <input type="email" name="email" value="" required="" autofocus="" pattern="^[^\s@＠=]+[@|＠][^\.\s@＠]+(\.[^\.\s@＠]+)+$" placeholder="Enter a valid Email">
                </div>
             
            </div>
            <div class="body-form-text">We will send a verification code to your Email's address</div>
            <div class="button-login">
                <input type="submit"  value="Get a verification code" name="forgetPass">
            </div>
        </form>
        <div class="social-link">
            <div class="social-link-face-google">
                <a class="button big" href="https://a.wunderlist.com/api/v1/oauth/facebook?web=www">
                    <span class="social-link-face-google-icon">
                        <svg viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <path d="M2.25,0 C1.0125,0 0,1.0125 0,2.25 L0,15.75 C0,16.9875 1.0125,18 2.25,18 L9,18 L9,10.125 L6.75,10.125 L6.75,7.875 L9,7.875 L9,6.75 C9,5.85 9.3375,4.95 10.0125,4.3875 C10.575,3.7125 11.475,3.375 12.375,3.375 L14.625,3.375 L14.625,5.625 L12.375,5.625 C12.0375,5.625 11.8125,5.7375 11.5875,5.9625 C11.3625,6.1875 11.25,6.4125 11.25,6.75 L11.25,7.875 L14.2875,7.875 L14.2875,10.125 L11.25,10.125 L11.25,18 L15.75,18 C16.9875,18 18,16.9875 18,15.75 L18,2.25 C18,1.0125 16.9875,0 15.75,0 L2.25,0 L2.25,0 Z" fill="#FFFFFF"></path>
                            </g>
                        </svg>
                    </span>
                        Facebook
                </a>
            </div>
            <div class="social-link-face-google">
                <a class="button-google" href="https://a.wunderlist.com/api/v1/oauth/google?web=www">
                    <span class="social-link-face-google-icon">
                        <svg viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <g fill-rule="evenodd" fill="#FFFFFF" clip-rule="evenodd">
                                <path d="M8.4825,4.24575 C8.13825,4.34475 7.86375,4.638375 7.71075,5.072625 C7.5555,5.51475 7.54425,5.974875 7.680375,6.501375 C7.92225,7.437375 8.577,8.116875 9.23625,8.116875 C9.322875,8.116875 9.4095,8.1045 9.491625,8.080875 C10.211625,7.875 10.663875,6.753375 10.364625,5.68125 C10.047375,4.545 9.5355,4.20975 8.737875,4.20975 C8.652375,4.208625 8.56575,4.221 8.4825,4.24575 L8.4825,4.24575 Z"></path>
                                <path d="M9.01125,10.8585 C8.427375,10.902375 7.889625,11.125125 7.49925,11.485125 C7.113375,11.84175 6.9165,12.288375 6.944625,12.744 C7.002,13.6935 8.0055,14.250375 9.22275,14.160375 C10.420875,14.0715 11.219625,13.370625 11.161125,12.42 C11.106,11.5245 10.34325,10.850625 9.216,10.850625 C9.1485,10.85175 9.079875,10.854 9.01125,10.8585 L9.01125,10.8585 Z"></path>
                                <path d="M15.75,0 L2.25,0 C1.006875,0 0,1.006875 0,2.25 L0,15.75 C0,16.993125 1.006875,18 2.25,18 L15.75,18 C16.993125,18 18,16.993125 18,15.75 L18,2.25 C18,1.006875 16.993125,0 15.75,0 L15.75,0 Z M12.373875,3.4335 C12.373875,3.781125 11.76075,3.8475 11.34225,3.906 C11.201625,3.92625 10.915875,3.956625 10.836,3.99825 C11.608875,4.417875 11.73375,5.07825 11.73375,6.062625 C11.73375,7.183125 11.302875,7.774875 10.846125,8.19225 C10.56375,8.449875 10.341,8.6535 10.341,8.9235 C10.341,9.189 10.647,9.462375 11.00025,9.777375 C11.58075,10.296 12.373875,11.005875 12.373875,12.198375 C12.373875,13.4325 11.851875,14.315625 10.825875,14.823 C10.033875,15.2145 9.181125,15.25725 8.850375,15.25725 C8.7885,15.25725 8.751375,15.256125 8.744625,15.256125 C8.744625,15.256125 8.722125,15.25725 8.6805,15.25725 C8.1675,15.25725 5.603625,15.136875 5.603625,12.760875 C5.603625,10.425375 8.393625,10.243125 9.24975,10.243125 L9.27225,10.243125 C8.778375,9.572625 8.88075,8.895375 8.88075,8.895375 C8.838,8.8965 8.773875,8.899875 8.69625,8.899875 C8.373375,8.899875 7.7535,8.847 7.219125,8.497125 C6.566625,8.069625 6.235875,7.340625 6.235875,6.3315 C6.235875,3.483 9.291375,3.367125 9.32175,3.367125 L12.373875,3.367125 L12.373875,3.4335 L12.373875,3.4335 Z"></path>
                            </g>
                        </svg>
                    </span>
                            Google
                </a>
            </div>
            <div class="social-link-microsoft">
                <a class ="button-microsoft" href="">
                    <span class="social-link-face-google-icon">
                        <svg viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <g stroke="none" stroke-width="1" fill="#ffffff" fill-rule="evenodd">
                                <path d="M8.54124434,8.54124434 L0,8.54124434 L0,0 L8.54124434,0 L8.54124434,8.54124434 L8.54124434,8.54124434 Z" fill="#F1511B"></path>
                                <path d="M17.9717986,8.54124434 L9.43065611,8.54124434 L9.43065611,0 L17.9717986,0 L17.9717986,8.54124434 L17.9717986,8.54124434 Z" fill="#80CC28"></path>
                                <path d="M8.54104072,17.9751584 L0,17.9751584 L0,9.43391403 L8.54104072,9.43391403 L8.54104072,17.9751584 L8.54104072,17.9751584 Z" fill="#00ADEF"></path>
                                <path d="M17.9717986,17.9751584 L9.43065611,17.9751584 L9.43065611,9.43391403 L17.9717986,9.43391403 L17.9717986,17.9751584 L17.9717986,17.9751584 Z" fill="#FBBC09"></path>
                            </g>
                        </svg>
                    </span>
                </a>
            </div>
    </div>
    </div>
    
</body>
</html>
<!-- từ form login trỏ tới trang xulylogin.php để xử lý đăng nhập -> sign out ở class ul11 để trỏ tới logout.php -->