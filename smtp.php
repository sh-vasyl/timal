<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    // Сюда принимай данные формы
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $instagram = $_POST["instagram"];
    $country = $_POST["country"];
    $city = $_POST["city"];
		$categories = implode(", ", $_POST['category']);


    $mail->isSMTP();
    $mail->SMTPAuth   = true;
    //Тут данные авторизации
		$mail->Username   = 'up.vasyl@gmail.com';
    $mail->Password   = 'exomsygfkygiywvg';

    $mail->SMTPDebug  = 1;
    $mail->SMTPAuth   = TRUE;
    $mail->SMTPSecure = "tls";
    $mail->Port       = 587;
    $mail->Host       = "smtp.gmail.com";


    //Тут данные куда отправить
    $mail->setFrom('up.vasyl@gmail.com', 'Site');
    $mail->addAddress('up.vasyl@gmail.com'); // Куда отправить

  	//Сюда то что отправишь
		$mail->CharSet = 'UTF-8';
		$mail->Encoding = 'base64';
    $mail->isHTML(true);

    $mail->Subject = "Timal";
    $mail->Body    = "<b>Ім'я:</b> $name <br><b>Телефон:</b> $phone <br><b>Інстаграм:</b> $instagram <br><b>Країна:</b> $country <br><b>Місто:</b> $city<br><b>Категорії:</b> $categories";

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}