<?php

session_start();

$conn = mysqli_connect('localhost','root','','leave_form_registration');
$conn2 = mysqli_connect('localhost','root','','dayOff');
$conn3 = mysqli_connect('localhost','root','','typeOfLeave');

// $query = "SELECT * FROM leave_form_registration";

$query = "SELECT leave_form_registration.id, leave_form_registration.name, leave_form_registration.projectName , DATE_FORMAT(startDate,'%M %d,%Y')AS startDate, DATE_FORMAT(endDate,'%M %d,%Y') AS endDate ,dayOff.name as dayOff  ,typeOfLeave.name as typeOfLeave, leave_form_registration.reason, leave_form_registration.Created, leave_form_registration.Updated 
FROM leave_form_registration
INNER JOIN dayOff ON leave_form_registration.dayOff=dayOff.did
INNER JOIN typeOfLeave ON leave_form_registration.typeOfLeave=typeOfLeave.tid";


$result = mysqli_query($conn ,$query);

$users = mysqli_fetch_all($result,MYSQLI_ASSOC);

echo json_encode($users);

session_destroy();