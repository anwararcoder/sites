<?php
// Enhanced PHP Contact Form Handler
header('Content-Type: text/plain; charset=utf-8');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    die('Invalid request method');
}

// Rate limiting (simple session-based)
session_start();
$current_time = time();
$rate_limit_window = 60; // 1 minute
$max_attempts = 3;

if (!isset($_SESSION['form_attempts'])) {
    $_SESSION['form_attempts'] = [];
}

// Clean old attempts
$_SESSION['form_attempts'] = array_filter(
    $_SESSION['form_attempts'],
    function($timestamp) use ($current_time, $rate_limit_window) {
        return ($current_time - $timestamp) < $rate_limit_window;
    }
);

// Check rate limit
if (count($_SESSION['form_attempts']) >= $max_attempts) {
    http_response_code(429);
    die('Too many requests. Please wait a minute before trying again.');
}

// Sanitize and validate inputs
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    return $data;
}

function validate_input($name, $email, $message) {
    $errors = [];
    
    if (empty($name) || strlen($name) < 2) {
        $errors[] = 'Name must be at least 2 characters long';
    }
    
    if (empty($email)) {
        $errors[] = 'Email is required';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Enter a valid email address!';
    }
    
    if (empty($message) || strlen($message) < 10) {
        $errors[] = 'Message must be at least 10 characters long';
    }
    
    // Check for spam patterns
    if (preg_match('/<a\s+href/i', $message) || preg_match('/\[url=/i', $message)) {
        $errors[] = 'Message contains suspicious content';
    }
    
    return $errors;
}

// Get and sanitize POST data
$name = isset($_POST['name']) ? sanitize_input($_POST['name']) : '';
$email = isset($_POST['email']) ? sanitize_input($_POST['email']) : '';
$practice = isset($_POST['practice']) ? sanitize_input($_POST['practice']) : 'Not specified';
$subj = isset($_POST['subj']) ? sanitize_input($_POST['subj']) : 'No subject';
$message = isset($_POST['message']) ? sanitize_input($_POST['message']) : '';

// Validate inputs
$validation_errors = validate_input($name, $email, $message);

if (!empty($validation_errors)) {
    http_response_code(400);
    echo implode(' ', $validation_errors);
    exit;
}

// --- EMAIL CONFIGURATION ---
$receiver = "arcoder14@gmail.com"; // Change This Mail
$subject = "Contact Form: " . $subj . " (from " . $name . ")";

// Create email body with better formatting
$email_body = "New contact form submission\n";
$email_body .= str_repeat("=", 50) . "\n\n";
$email_body .= "Name: $name\n";
$email_body .= "Email: $email\n";
$email_body .= "Practice: $practice\n";
$email_body .= "Subject: $subj\n";
$email_body .= "\nMessage:\n" . str_repeat("-", 50) . "\n";
$email_body .= "$message\n";
$email_body .= str_repeat("-", 50) . "\n\n";
$email_body .= "Sent: " . date('Y-m-d H:i:s') . "\n";
$email_body .= "IP Address: " . $_SERVER['REMOTE_ADDR'] . "\n";

// --- FIX: HEADERS ---
// Use a sender address that matches your server's domain to prevent blocking
// If running on localhost, this will simply use "noreply@localhost"
$server_domain = $_SERVER['SERVER_NAME'];
$sender_email = "noreply@" . $server_domain;

$headers = [
    'From: Contact Form <' . $sender_email . '>',
    'Reply-To: ' . $email,  // This allows you to hit "Reply" and email the user back
    'X-Mailer: PHP/' . phpversion(),
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8'
];

// Attempt to send email
if (mail($receiver, $subject, $email_body, implode("\r\n", $headers))) {
    // Add to rate limit tracking
    $_SESSION['form_attempts'][] = $current_time;
    
    // Optional: Log successful submission
    // error_log("Contact form submitted successfully from: $email");
    
    echo "Your message has been sent successfully! We'll get back to you soon.";
} else {
    http_response_code(500);
    
    // Log the error for debugging
    error_log("Contact form error: Failed to send email via mail(). Check SMTP settings.");
    
    echo "Sorry, failed to send your message! Please try again later or contact us directly.";
}
?>