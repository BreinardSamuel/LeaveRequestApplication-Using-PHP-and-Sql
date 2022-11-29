<?php 

include 'db_connections.php';

if(isset($_POST['submit'])){

    $obj = new function_process();
    $obj -> process();

}

if(isset($_POST['login'])){

    $obj = new function_login();
    $obj -> fetchusers();

}

if(isset($_POST['edit'])){

    $obj = new function_edit();
    $obj -> edit();

}

if(isset($_POST['delete'])){

    $obj = new function_delete();
    $obj -> delete();

}

if(isset($_POST['update'])){

    $obj = new function_update();
    $obj -> update();

}


class function_process extends process{

    private $name = $_POST['name'];
    private $projectName = $_POST['projectName'];
    private $startDate = $_POST['startDate'];
    private $endDate = $_POST['endDate'];
    private $dayOff = $_POST['dayOff'];
    private $typeOfLeave = $_POST['typeOfLeave'];
    private $reason = $_POST['reason'];

    public function process(){

        $process = new process();
        $process -> db_connect();

        $name = $this -> name();
        $projectName = $this -> projectName();
        $startDate = $this -> startDate();
        $endDate = $this -> endDate();
        $dayOff = $this -> dayOff();
        $typeOfLeave = $this -> typeOfLeave();
        $reason = $this -> reason();

        $query = "INSERT INTO leave_form_registration(name,projectName,startDate,endDate,dayOff,typeOfLeave,reason) VALUES ('$name','$projectName','$startDate','$endDate','$dayOff','$typeOfLeave','$reason')";

        $q = new process();
        $result = ($q -> connect_query($query));

        if($result){

            echo 'user details added to database';

        }else{
            echo 'error !!! ';

        };
    }
}

class function_fetchusers extends fetchusers{

    public function fetchusers(){

        $fetch = new fetchusers();
        $fetch -> db_connect();

        $query = "SELECT leave_form_registration.id, leave_form_registration.name, leave_form_registration.projectName , DATE_FORMAT(startDate,'%M %d,%Y')AS startDate, DATE_FORMAT(endDate,'%M %d,%Y') AS endDate ,dayOff.name as dayOff  ,typeOfLeave.name as typeOfLeave, leave_form_registration.reason, leave_form_registration.Created, leave_form_registration.Updated 
        FROM leave_form_registration
        INNER JOIN dayOff ON leave_form_registration.dayOff=dayOff.did
        INNER JOIN typeOfLeave ON leave_form_registration.typeOfLeave=typeOfLeave.tid";

        $f = new fetchusers();

        $result = $f -> connect_query($query);

        $users = mysqli_fetch_all($result,MYSQLI_ASSOC);

        echo json_encode($users);

    }
}

class function_login extends login{

    private $userName = $_POST['userName'];

    private function password(){
        $password = $_POST['password'];
        return $passwordMd5 = md5($password);
    }

    public function login(){

        $passwordMd5 = $this -> passwordMd5;
        $userName = $this -> userName;

        $log = new login();
        $log -> db_connect();

        $query = "SELECT * FROM leave_form_users WHERE name ='$userName'AND password = '$passwordMd5'";


        $l = new login();

        $count = mysqli_num_rows($l -> connect_query($query));

        if($count > 0){

            echo 'Login successful';

        }
        else{

            echo 'Login unsuccessful';

        }
    } 
}


class function_edit extends edit{

    private $rowinfo = $_REQUEST['rowinfo'];

    public function edit(){

        $rowinfo = $this -> rowinfo;

        $conn = new edit();
        $conn -> dbconnect();

        $this -> rowinfo();

        if(isset($rowinfo)){
            
            $seperated = implode(",",$rowinfo);

            $query = "SELECT * FROM leave_form_registration WHERE id = '$seperated'";

            $q = new edit();
            $q -> connect_query($query);

            $users = mysqli_fetch_all($result,MYSQLI_ASSOC);

             echo json_encode($users);
        }
        else{
            echo("error in edit");
        }
    }
}

class function_delete extends delete{

    private $deleteIds = $_REQUEST['deleteids']

    public function delete(){

        $del = new delete();
        $del -> dbconnect();

        $deleteIds = $this -> deleteids;

        if(isset($deleteIds)){

            $seperated = implode(",",$deleteIds);
        
        $query = "DELETE FROM leave_form_registration WHERE id in ($seperated)";
    
        $q = new delete();
        $result = ($q -> connect_query($query));
        
            if(!$result){
                echo "Query error";
                die();
            }
        
        echo "done";
        
        }else{
            
            echo ("Something went wrong");
            die();
        
        }
    }
}

class function_update extends update{

    private $id = $_POST['id'];
    private $userName = $_POST['userName'];
    private $projectName = $_POST['projectName'];
    private $startDate = $_POST['startDate'];
    private $endDate = $_POST['endDate'];
    private $dayOff = $_POST['dayOff'];
    private $typeOfLeave = $_POST['typeOfLeave'];
    private $reason = $_POST['reason'];

    public function update(){

        $conn = new update();
        $conn -> dbconnect();

        $id = $this -> id;
        $userName = $this -> userName;
        $projectName = $this -> projectName;
        $startDate = $this -> startDate;
        $endDate = $this -> endDate;
        $dayOff = $this -> dayOff;
        $typeOfLeave = $this -> typeOfLeave;
        $reason = $this -> reason;

        $query ="UPDATE  leave_form_registration SET name='$userName',projectName='$projectName',startDate='$startDate',endDate='$endDate',dayOff='$dayOff',typeOfLeave='$typeOfLeave',reason='$reason'  WHERE id='$id'";


        $q = new update();
        $result = ($q -> connect_query($query));

        if(!$result){
            echo "failed";
        }else{
            echo "updated";
        }
    }
}
?>