<?php

$conn = mysqli_connect('localhost','root','','leave_form_registration');

$password = $_POST['password'];
$passwordMd5 = md5($password);
$userName = $_POST['userName'];
$query = "SELECT * FROM leave_form_users WHERE name ='$userName'AND password = '$passwordMd5'";
$result = mysqli_query($conn,$query);
$count = mysqli_num_rows($result);


if($count>0){

        echo 'Login successful';

}
else{
    echo 'Login unsuccessful';
};