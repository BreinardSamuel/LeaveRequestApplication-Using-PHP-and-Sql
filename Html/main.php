<?php
$conn = mysqli_connect("localhost","root","","leave_form_registration");

$deleteIds = $_REQUEST['deleteids'];

if(isset($deleteIds)){

    $seperated = implode(",",$deleteIds);

$query = "DELETE FROM leave_form_registration WHERE id in ($seperated)";

$result = mysqli_query($conn,$query);

    if(!$result){
        echo "Query error";
        die();
    }

echo "done";

}else{
    
    echo ("Something went wrong");
    die();

}

?>
