<?php

$conn = mysqli_connect('localhost','root','','leave_form_registration');

$name = $_POST['name'];
$projectName = $_POST['projectName'];
$startDate = $_POST['startDate'];
$endDate = $_POST['endDate'];
$dayOff = $_POST['radioButton'];
$typeOfLeave =$_POST['typeOfLeave'];
$reason = $_POST['reason'];


echo 'your name is'.$_POST['name'];
echo 'your project name is'.$_POST['projectName'];
echo 'your starting date of leave is'.$startDate;
echo 'your ending date of leave is'.$endDate;
echo 'your day off is '.$_POST['radioButton'];
echo 'your type of leave is'.$_POST['typeOfLeave'];
echo 'your reason is '.$_POST['reason'];

$query = "INSERT INTO leave_form_registration(name,projectName,startDate,endDate,dayOff,typeOfLeave,reason) VALUES ('$name','$projectName','$startDate','$endDate','$dayOff','$typeOfLeave','$reason')";

if(mysqli_query($conn,$query)){
    echo 'user details added to database';
}else{
    echo 'error :'.mysqli_error($conn);
};

?>