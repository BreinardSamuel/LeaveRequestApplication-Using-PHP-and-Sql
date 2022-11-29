document.getElementById("buttonSubmit").addEventListener("click",postajax);

function postajax(event){

    event.preventDefault();

    var userName = document.getElementById("userName").value;
    var projectName = document.getElementById("projectName").value;
    var startDate = document.getElementById("startDate").value;
    var endDate = document.getElementById("endDate").value;
    var typeOfLeave = document.getElementById("typeOfLeave").value;
    var reason = document.getElementById("reason").value;



//--------------------------------condition for ajax call to take place------------------------------------------



    if(userName.length>1 && projectName.length>1 && startDate < endDate && typeOfLeave.length>=1 && reason.length>1){
        
        var xhr = new XMLHttpRequest();
        var datas = new FormData(document.getElementById("formData"));

        xhr.open('POST','process.php',true);

        xhr.onload = function(){
            if(this.status==200){
                console.log(this.responseText);
            }
        }
        xhr.send(datas);
    }
   
};