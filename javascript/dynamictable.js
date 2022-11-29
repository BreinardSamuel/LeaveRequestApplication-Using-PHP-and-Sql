function proceed() {
    var userName = document.getElementById("userName");
    var projectName = document.getElementById("projectName");
    var startDate = document.getElementById("startDate");
    var endDate = document.getElementById("endDate");
    var typeOfLeave = document.getElementById("typeOfLeave");
    var reason = document.getElementById("reason");
        

    if (userName.value.length > 0 && projectName.value.length > 0 && startDate.value.length > 0 && endDate.value.length > 0 && reason.value.length > 0) {


        var date1 = startDate.value;
        var date2 = endDate.value;
    
     if(date1<date2){
         
         var table = document.getElementById("table");
         var row = table.insertRow(1);
 
         var cell1 = row.insertCell(0);
         cell1.innerHTML = userName.value;
 
         var cell2 = row.insertCell(1);
         cell2.innerHTML = projectName.value;
 
         var cell3 = row.insertCell(2);
         cell3.innerHTML = startDate.value;
 
         var cell4 = row.insertCell(3);
         cell4.innerHTML = endDate.value;
 
         var cell5 = row.insertCell(4);

         if(typeOfLeave.value=='P'){
            cell5.innerHTML = "Personal Leave";
         }
         else if(typeOfLeave.value=='C'){
            cell5.innerHTML = "Comp Off"; 
         }else {
            cell5.innerHTML = "Floating Leave"; 
         }

        //  cell5.innerHTML = typeOfLeave.value;
 
         var cell6 = row.insertCell(5);
         cell6.innerHTML = reason.value;

         $('#table').css('display','block')
         
                 $("#popupContainer").fadeIn(500).css('display', "block");
                 $("#ok").click(function () {
                     $("#popupContainer").fadeOut(600);
         
                 
                 document.getElementById("formData").reset();
                 });
     }
        // alert("Successfully submitted !!!");

    }
};

// $(document).ready(function(){

//     $("#popupContainer").css("display","none");


//     var userName =$('#userName').val();
//     var projectName =$('#projectName').val();
//     var startDate =$('#startDate').val();
//     var endDate =$('#endDate').val();
//     var typeOfLeave =$('#typeOfLeave').val();
//     var reason =$('#reason').val();
//     var userName =$('#userName').val();

//     if (userName.length > 1 && projectName.length > 1 && startDate.length > 1 && endDate.length > 1 && typeOfLeave.length > 1 && reason.length > 1) {

//         $("#popupContainer").fadeIn(500).css('display',"block");
//         $("#ok").click(function() {
//             $("#popupContainer").fadeOut(600);
//         })
        
//     }


// });
