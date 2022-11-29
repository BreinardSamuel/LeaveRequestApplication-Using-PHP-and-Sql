<?php
$conn = mysqli_connect('localhost','root','','leave_form_registration');

$rowinfo = $_REQUEST['rowinfo'];

if(isset($rowinfo)){

    $seperated = implode(",",$rowinfo);

    $query = "SELECT * FROM leave_form_registration WHERE id = '$seperated'";

    $result = mysqli_query($conn , $query);
    
    $users = mysqli_fetch_all($result,MYSQLI_ASSOC);

    echo json_encode($users);
    
}
else{
    echo("error in edit");
}
?>