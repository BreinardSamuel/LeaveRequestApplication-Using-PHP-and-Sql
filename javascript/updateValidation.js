//!-----------------------------------Function for key up inside inputfield(Name)----------------------------------


function lettersonly(input) {
    var regex = /[^a-z\s]/gi;
    input.value = input.value.replace(regex, "");
 };


//  -----------------------------------getting all required values for validation---------------------------


 
 var userName = document.getElementById("userName");
 var projectName = document.getElementById("projectName");
 var startDate = document.getElementById("startDate");
 var endDate = document.getElementById("endDate");
 var radioButtons = document.getElementById("radioButtons");
 var buttonSubmit = document.getElementById("buttonSubmit");
 var am = document.getElementsByClassName("am");
 var pm = document.getElementsByClassName("pm");
 var allDay = document.getElementsByClassName("allDay");
 var typeOfLeave = document.getElementById("typeOfLeave");
 var reason = document.getElementById("reason");
 
 
 var nameError = document.getElementById("nameError");
 var projectNameError = document.getElementById("projectNameError");
 var startDateError = document.getElementById("startDateError");
 var endDateError = document.getElementById("endDateError");
 var radioButtonsError = document.getElementById("radioButtonsError");
 var typeOfLeaveError = document.getElementById("typeOfLeaveError");
 var reasonError = document.getElementById("reasonError");
 
 
 
 // -----------------------------------------validation for userName------------------------------------------

 // v_userName = validation for username
 
//  buttonSubmit.addEventListener("click",v_userName);
//  function v_userName(event){
//     event.preventDefault();
//     if(userName.value.trim()===""){
//  nameError.innerHTML="Enter your name here";
//  return true;
//     }else{
//         nameError.innerHTML="";
//     }
//  };

//  ----------------------------listener for username ---------------------------------

 
userName.addEventListener('focus',function(){
    userName.addEventListener('keyup',function(){
        if (userName.value.length < 1||userName.value.trim()===""){
            nameError.innerHTML="Enter your name here";
        }else{
            nameError.innerHTML="";
        }
    })
    if (userName.value.length < 1 || userName.value.trim()===""){
        nameError.innerHTML="Enter your name here";
    }else{
        nameError.innerHTML="";
    }
});
 //-----------------------------------------validation for projectName-------------------------------------------
   
 // v_projectname = validation
 
 
//  buttonSubmit.addEventListener("click",v_projectName);
//     function v_projectName(event){
//         event.preventDefault();
//         if(projectName.value.trim()===""){
//  projectNameError.innerHTML="Enter your Project Name";
//  return true;
//         }else{
//  projectNameError.innerHTML="";
//         }
//     }; 

    // ---------------------------------listener for projectname ----------------------------------------

    projectName.addEventListener('focus',function(){
        projectName.addEventListener('keyup',function(){
            if (projectName.value.length < 1||projectName.value.trim()===""){
                projectNameError.innerHTML="Enter your project name here";
            }else{
                projectNameError.innerHTML="";
            }
        })
        if (projectName.value.length < 1 || projectName.value.trim()===""){
            projectNameError.innerHTML="Enter your project name here";
        }else{
            projectNameError.innerHTML="";
        }
    });

 
    // ----------------------------------------validation for startDate-----------------------------------------
    
    
    // v = stands for validation function
 
//     buttonSubmit.addEventListener("click",v_startDate);
//     function v_startDate(event){
//         event.preventDefault();
//         if(startDate.value===""){
//  startDateError.innerHTML="Enter a valid Start Date";
//  return true;
//         }else{
//             startDateError.innerHTML="";
//             }
 
//     };

    // -------------------------------------listener for start date------------------------------------

    startDate.addEventListener('focus',function(){
        startDate.addEventListener('keyup',function(){
            if (startDate.value.length < 1){
                startDateError.innerHTML="Enter a valid Start Date";
            }else{
                startDateError.innerHTML="";
            }
        })
        if (startDate.value.length > 0){
            startDateError.innerHTML="";
        }else{
            startDateError.innerHTML="Enter a valid Start Date";
        }
    });
 
 
    // ------------------------------------------validation for end date-----------------------------------------


    // v- validation function
 
 
//  buttonSubmit.addEventListener("click",v_endDate);
//  function v_endDate(event){
//     event.preventDefault();
//     if(endDate.value===""){
//         endDateError.innerHTML="Enter a Valid End Date";
//         return true;
//     }else{
//         endDateError.innerHTML="";
//     }
 
//  };
 
//  -------------------------------------listener for end date------------------------------------


endDate.addEventListener('focus',function(){
    endDate.addEventListener('keyup',function(){
        if (endDate.value.length < 1){
            endDateError.innerHTML="Enter a Valid End Date";
        }else{
            endDateError.innerHTML="";
        }
    })
    if (endDate.value.length > 0){
        endDateError.innerHTML="";
    }else{
        endDateError.innerHTML="Enter a Valid End Date";
    }
});
 
 //-------------------------------------------validation for radio buttons----------------------------------------


 // v- validation function
 
 
//  buttonSubmit.addEventListener("click",v_radioButtons);
//  function v_radioButtons(event){
//  event.preventDefault();
//  if(am.checked==true || pm.checked==true || allDay.checked==true){
//  radioButtonsError.innerHTML="";
//  return true;
//  }else{
//     radioButtonsError.innerHTML="This should not be blank";
//  }
//  };
 
 
//------------------------------------------------------------------------------------------------------------------


 // validation for type of typeOfLeave
 // v- function for validation
 
//  buttonSubmit.addEventListener("click",v_typeOfLeave);
//  function v_typeOfLeave(event){
//  event.preventDefault();
//  if (typeOfLeave.value==="" || typeOfLeave.value===null){
//  typeOfLeaveError.innerHTML="Fill this field";
//  return true;
//  }else{
//     typeOfLeaveError.innerHTML="";
//  }
//  };
 
 // validation for reason
 // v- function for validation
 

//------------------------------------------validation for reason------------------------------------------------

 
//  buttonSubmit.addEventListener("click",v_reason);
//  function v_reason(event){
//  event.preventDefault();
//  if(reason.value.trim()===""){
//  reasonError.innerHTML="Enter a valid reason";
//  return true;
//  }else{
//     reasonError.innerHTML="";
//  }
//  };

//  -----------------------------------------listener for reason --------------------------------------------



reason.addEventListener('focus',function(){
    reason.addEventListener('keyup',function(){
        if (reason.value.length < 1||reason.value.trim()===""){
            reasonError.innerHTML="Enter a valid reason";
        }else{
            reasonError.innerHTML="";
        }
    })
    if (reason.value.length < 1 || reason.value.trim()===""){
        reasonError.innerHTML="Enter a valid reason";
    }else{
        reasonError.innerHTML="";
    }
});




    // ------------------------------------------minimum date for start date---------------------------------------
  
  
    function dateChange() {

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        var currentDate = yyyy + '-' + mm + '-' + dd;
        document.getElementById("startDate").setAttribute("min", currentDate);
    
    };
    
    // ----------------------------------------------EndDate -----------------------------------------------------
    
    
    
    function forEndDate(){
          
        var startDate = document.getElementById("startDate").value;
        document.getElementById("endDate").setAttribute("min",startDate);
    
    };
    
    
    //------------------------------- for character remaining counter---------------------------------------
    
    
    
    var textArea = document.getElementById("reason");
    var maxCharacters = 100;
    textArea.addEventListener('input', () => {
        var remainingCharacters = (maxCharacters - textArea.value.length) + "/100 Characters remaining";
        document.getElementById("remainingCharacters").innerHTML = remainingCharacters
    }); 
