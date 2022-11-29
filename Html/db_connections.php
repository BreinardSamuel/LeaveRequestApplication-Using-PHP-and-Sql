<?php 

class process{

    private $connect;
    private $host = 'localhost';
    private $username = 'root';
    private $password = '';
    private $db_name ='leave_form_registration';

    function _construct(){

        $this -> dbconnect();

    }

    protected function dbconnect(){

        $this-> connect = mysqli_connect($this -> host, $this -> username , $this -> password , $this -> db_name);

    }

    protected function connect_query($query){

        return mysqli_query($this -> connect, $query);

    }
}


class fetchUsers {

    private $connect1;
    private $host1 ='localhost';
    private $username1 = 'root';
    private $password1 = '';
    private $db_name1 = 'leave_form_registration';

    private $connect2;
    private $host2 = 'localhost';
    private $username2 = 'root';
    private $password2 = '';
    private $db_name2 = 'dayOff';

    private $connect3;
    private $host3 ='localhost';
    private $username3 = 'root';
    private $password3= '';
    private $db_name3 ='typeOfLeave';

    function _construct(){

        $this -> dbconnect();

    }

    protected function dbconnect(){

        $this -> connect1 = mysqli_connect($this -> host1 , $this -> username1 , $this -> password1 , $this -> db_name1);

        $this -> connect2 = mysqli_connect($this -> host2 , $this -> username2 , $this -> password2 , $this -> db_name2);

        $this -> connect3 = mysqli_connect($this -> host3 , $this -> username3 , $this -> password3 , $this -> db_name3);

    }

    protected function connect_query($query){

        return mysqli_query($this -> connect ,$query);
    }
}


class login{

    private $connect;
    private $host = 'localhost';
    private $username = 'root';
    private $password = '';
    private $db_name ='leave_form_registration';

    function _construct(){

        $this -> dbconnect();

    }

    protected function dbconnect(){

        $this -> connect = mysqli_connect($this -> host , $this -> username , $this -> password , $this ->db_name);

    }

    protected function connect_query($query){

        return mysqli_query($this -> connect, $query);
        
    }
}


class edit {

    private $connect;
    private $host ='localhost';
    private $username = 'root';
    private $password = '';
    private $db_name = 'leave_form_registration';

    function _construct(){

    
        $this -> dbconnect();

    }

    protected function dbconnect(){

        $this -> connect = mysqli_connect($this -> host , $this -> username , $this -> password , $this -> db_name);

    }

    protected function connect_query($query){

        return mysqli_query($this -> connect, $query);

    }
}


class delete {

    private $connect;
    private $host = 'localhost';
    private $username = 'root';
    private $password ='';
    private $db_name ='leave_form_registration';

    function _construct(){

        $this -> dbconnect();

    }

    protected function dbconnect(){

        $this -> connect = mysqli_connect($this -> host ,$this -> username , $this -> password ,$this -> db_name);

    }

    protected function connect_query($query){

        return mysqli_query($this -> connect ,$query);

    }
}


class update {

    private $connect;
    private $host ='localhost';
    private $username = 'root';
    private $password = '';
    private $db_name ='leave_form_registration';

    function _construct(){

        $this -> dbconnect();

    }
    protected function dbconnect(){

        $this -> connect = mysqli_connect($this -> host , $this -> username , $this -> password , $this -> db_name);

    }

    protected function connect_query($query){

        return mysqli_query($this -> connect , $query);

    }
}

?>