<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $data = json_decode(file_get_contents('php://input'), true);
    
    $email = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $subject = strip_tags($data['subject'] ?? '');
    $message = strip_tags($data['message'] ?? '');

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid email address']);
        exit;
    }

    // Validate other fields
    if (empty($subject) || empty($message)) {
        http_response_code(400);
        echo json_encode(['error' => 'All fields are required']);
        exit;
    }

    // Email configuration
    $to = "whynotapp@icloud.com"; // Replace with your email
    $subject = "Nuovo messaggio da WhyNot: " . $subject;
    
    // Email headers
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: " . $email . "\r\n";
    
    // Email body
    $emailBody = "
    <html>
    <body>
        <h2>Nuovo messaggio dal form di contatto</h2>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Oggetto:</strong> {$subject}</p>
        <p><strong>Messaggio:</strong></p>
        <p>{$message}</p>
    </body>
    </html>
    ";

    // Send email
    $mailSent = mail($to, $subject, $emailBody, $headers);

    if ($mailSent) {
        http_response_code(200);
        echo json_encode(['message' => 'Email sent successfully']);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to send email']);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
?> 