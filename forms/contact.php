<?php

$receiving_email_address = 'info@luminahealth.com';

if (file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php')) {
  include($php_email_form);
} else {
  die('Unable to load the PHP Email Form Library!');
}

$contact = new PHP_Email_Form;
$contact->ajax = true;

$contact->to = $receiving_email_address;
$contact->from_name = trim($_POST['name']);
$contact->from_email = trim($_POST['email']);
$contact->subject = 'New Contact Message - Lumina Health Care';

$contact->add_message(trim($_POST['name']), 'Name');
$contact->add_message(trim($_POST['email']), 'Email');
$contact->add_message(trim($_POST['phone']), 'Phone');
$contact->add_message(trim($_POST['subject']), 'Subject');
$contact->add_message(trim($_POST['message']), 'Message', 10);

echo $contact->send();

?>

