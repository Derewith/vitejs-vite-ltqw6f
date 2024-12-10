<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get and validate email
    $data = json_decode(file_get_contents('php://input'), true);
    $email = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['error' => 'Indirizzo email non valido']);
        exit;
    }

    // File to store subscribers
    $subscribersFile = 'subscribers.txt';
    
    // Check if email already exists
    if (file_exists($subscribersFile)) {
        $subscribers = file($subscribersFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        if (in_array($email, $subscribers)) {
            http_response_code(400);
            echo json_encode(['error' => 'Email già registrata alla newsletter']);
            exit;
        }
    }

    // Add timestamp to the subscription
    $timestamp = date('Y-m-d H:i:s');
    $subscriberData = $timestamp . " - " . $email . "\n";

    // Store the email
    if (file_put_contents($subscribersFile, $subscriberData, FILE_APPEND | LOCK_EX) === false) {
        http_response_code(500);
        echo json_encode(['error' => 'Errore durante la registrazione']);
        exit;
    }

    // Send confirmation email to subscriber
    $to = $email;
    $subject = "Benvenuto alla Newsletter di WhyNot!";
    
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: WhyNot <noreply@whynotapp.it>\r\n";
    
    $message = "
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='utf-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Benvenuto alla Newsletter di WhyNot</title>
    </head>
    <body style='margin: 0; padding: 0; background-color: #e95f3b; font-family: Arial, sans-serif;'>
        <table width='100%' cellpadding='0' cellspacing='0' style='padding: 40px 20px;'>
            <tr>
                <td align='center'>
                    <table style='background-color: #ffffff; max-width: 600px; width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);'>
                        <tr>
                            <td style='padding: 40px;'>
                                <img src='https://whynotapp.it/public/logo.png' alt='WhyNot Logo' style='display: block; margin: 0 auto 30px auto; width: 150px; height: auto;'>
                                
                                <h2 style='color: #e95f3b; margin-top: 0; text-align: center; font-size: 24px;'>
                                    Grazie per esserti iscritto!
                                </h2>
                                
                                <p style='color: #444; line-height: 1.6;'>Ciao,</p>
                                
                                <p style='color: #444; line-height: 1.6;'>
                                    Grazie per esserti iscritto alla newsletter di WhyNot. Riceverai aggiornamenti su:
                                </p>
                                
                                <ul style='color: #555; padding-left: 20px;'>
                                    <li style='margin-bottom: 10px;'>Novità e funzionalità dell'app</li>
                                    <li style='margin-bottom: 10px;'>Consigli per la sostenibilità</li>
                                    <li style='margin-bottom: 10px;'>Aggiornamenti sul nostro impatto ambientale</li>
                                </ul>
                                
                                <p style='color: #666; font-size: 13px; font-style: italic;'>
                                    Se non hai richiesto questa iscrizione, puoi ignorare questa email.
                                </p>
                                
                                <div style='margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666; text-align: center;'>
                                    <p style='margin: 0;'>
                                        WhyNot Italia S.r.l<br>
                                        Via dei Pupi, 1 - 30172
                                    </p>
                                </div>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>
    ";

    // Send email
    $mailSent = mail($to, $subject, $message, $headers);

    // Send notification to admin
    $adminEmail = "whynotapp@icloud.com";
    $adminSubject = "Nuova iscrizione alla Newsletter";
    $adminMessage = "
    <html>
    <body>
        <h2>Nuovo iscritto alla newsletter</h2>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Data:</strong> {$timestamp}</p>
    </body>
    </html>
    ";
    
    mail($adminEmail, $adminSubject, $adminMessage, $headers);

    if ($mailSent) {
        http_response_code(200);
        echo json_encode(['message' => 'Iscrizione completata con successo']);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Errore durante l\'invio dell\'email di conferma']);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Metodo non consentito']);
}
?> 