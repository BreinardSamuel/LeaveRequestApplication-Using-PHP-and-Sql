

// ---------------------------------to hide popup containers intially--------------------------------------------



$(document).ready(function(){
    $("#popupContainer").css("display","none");
    $("#popupContainerTwo").css("display","none");

 

//------------------------------ function for delete button-------------------------------------------------



 $("#button1").click(function(){
    

    var iddata = new Array();

    $(".select").each(function(){
        if($(this).prop("checked")){
            iddata.push($(this).attr('data-id'));
        }
    });
        console.log(iddata);
     $.ajax({
        url:"http://localhost/leave_request_form/Html/main.php",
        type:"POST",
        data:{deleteids : iddata},
        success:function(a){
            
         
//------------------------------------- for "deletion success" popup------------------------------------------------


               // if(a=="done"){
            //     window.location.href="http://localhost/leave_request_form/Html/home.html";
                if(a=="done"){
                    $("#popupContainerTwo").fadeIn(500).css('display',"block");
                    $("#okTwo").click(function() {
                        $("#popupContainerTwo").fadeOut(600);
                        window.location.href="http://localhost/leave_request_form/Html/home.html";
                    });
                }
            // }

//---------------------------------------for "Nothing to delete" popup----------------------------------------------


            if(a=="Something went wrong"){
                $("#popupContainer").fadeIn(500).css('display',"block");

            }
            $("#ok").click(function() {
                $("#popupContainer").fadeOut(600);
            })
           
        }
     });
 });
});



