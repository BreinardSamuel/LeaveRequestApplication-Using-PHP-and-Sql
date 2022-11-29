
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





