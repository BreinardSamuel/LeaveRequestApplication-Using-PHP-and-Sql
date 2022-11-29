<?php

    $conn=mysqli_connect('localhost','root','','leave_form_registration');


    $id=$_POST["id"];
    $userName = $_POST["userName"];
    $projectName = $_POST["projectName"];
    $startDate = $_POST["startDate"];
    $endDate = $_POST["endDate"];
    $dayOff = $_POST["dayOff"];
    $typeOfLeave = $_POST["typeOfLeave"];
    $reason = $_POST["reason"];


//-------------------------echo----------------------

// if(isset($dayOff)){
// echo 'hiiiii';
// }




    $query ="UPDATE  leave_form_registration SET name='$userName',projectName='$projectName',startDate='$startDate',endDate='$endDate',dayOff='$dayOff',typeOfLeave='$typeOfLeave',reason='$reason'  WHERE id='$id'";


$result=mysqli_query($conn,$query);

if(!$result){
    echo "failed";
}else{
    echo "updated";
}


?>