<?
$raiting = htmlspecialchars($_POST['raiting']);
$phone = htmlspecialchars($_POST['phone']);
$reviews = htmlspecialchars($_POST['reviews']);
$wishes = htmlspecialchars($_POST['wishes']);
$reviewsBad = htmlspecialchars($_POST['reviewsBad']);
$json = array();
if (
    $raiting != "" &&
    $phone != "" &&
    $reviews != "" &&
    $wishes != ""
) {
    $mailTo = 'info@scenapro.ru';
    $subject = 'Заявка с сайта (новые проекты)';
    $message = '
                <html>
                    <head>
                        <title>' . $subject . '</title>
                    </head>
                    <body>
                    <p>Наименование: Заявка с сайта (новые проекты)</p>
                        <p>Телефон: ' . $phone . '</p>
                        <p>Рейтинг: ' . $raiting . '</p>
                        <p>Пожелания: ' . $wishes . '</p>
                    </body>
                </html>';
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: Отправитель <from@example.com>\r\n";

    if (mail($mailTo, $subject, $message, $headers)) {
        echo json_encode(1);
    } else {
        echo json_encode(1);
    }
} else {
    echo json_encode($raiting . "Nen");
}
