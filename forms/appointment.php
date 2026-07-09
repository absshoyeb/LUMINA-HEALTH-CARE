<?php
$receiving_email_address = 'info@luminahealth.com';

if (file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php')) {
  include($php_email_form);
} else {
  die('Unable to load the "PHP Email Form" Library!');
}

$contact = new PHP_Email_Form;
$contact->ajax = true;

$contact->to = $receiving_email_address;
$contact->from_name = $_POST['name'];
$contact->from_email = $_POST['email'];
$contact->subject = 'New Appointment Request - Lumina Health Care';

$contact->add_message($_POST['name'], 'Patient Name');
$contact->add_message($_POST['email'], 'Email Address');
$contact->add_message($_POST['phone'], 'Phone Number');
$contact->add_message($_POST['date'], 'Appointment Date');
$contact->add_message($_POST['department'], 'Department');
$contact->add_message($_POST['doctor'], 'Doctor');
$contact->add_message($_POST['message'], 'Health Concern');

echo $contact->send();
?>

