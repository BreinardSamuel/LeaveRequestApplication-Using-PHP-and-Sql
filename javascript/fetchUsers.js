//---------------------to disable the delete button intially when the page is loaded--------------------------------


$(window).on('load', function() {
  $("#button1").prop("disabled",true);
 });


//---------------------------------------------Data Table-----------------------------------------------------------


$(document).ready(function () {
 
    $.ajax({
        url: "http://localhost/leave_request_form/Html/fetchUsers.php",
        type: "GET",
        serverSide:true,
        processing:true,
        dataType: "json",
        success: function (fdata) {
            console.log(fdata);
            $("#tableone").dataTable({
              // searching:false,
              searchDelay:1000,

                data: fdata,
                columnDefs: [
                    {className :"dt-center","targets":0},
                    {className : "dt-center", "targets": 1},
                    {className : "dt-center", "targets": 2},
                    {className : "dt-center", "targets": 3},
                    {className : "dt-center", "targets": 4},
                    {className : "dt-center", "targets": 5},
                    {className : "dt-center", "targets": 6},
                    {className : "dt-center", "targets": 7}, 
                    {className : "dt-left", "targets": 8},
                    {className : "dt-center", "targets": 9}
                  ],
                columns: [
                    {   'data': null,
                        'render': function (data) {
                            return '<input type="checkbox" data-id='+ data['id'] +' class="select">'},
                            "sortable": false
                    },
                    { 'data': 'id',"sortable": false},
                    { 'data': 'name',"sortable": false },
                    { 'data': 'projectName',"sortable": false},
                    { 'data': 'startDate'},
                    { 'data': 'endDate'},
                    { 'data': 'dayOff',"sortable": false},
                    { 'data': 'typeOfLeave',"sortable": false},
                    { 'data': 'reason',"sortable": false},
                    {'data' : 'Created'},
                    {'data' : 'Updated' },
                    {   'data': null,
                    'render': function (data){
                        return '<button type="button" data-row='+ data['id'] +' name="edit" class="edit" style="padding: 5px; border-radius: 10px; color: #fff; background-color: #333; text-decoration: none;" >Edit</button>'},
                        "sortable": false
                }
                ]
            });
        }
    });
    

//---------------------------------------function for selectall checkbox-------------------------------------------


        $('#tableone').on('change', '.select', function () {
          if ($('.select:checked').length == $('.select').length) {
            $('#selectAll').prop('checked', true);
          } else {
            $('#selectAll').prop('checked', false);
          }

 
//---------------------for buttton to be enabled while selecting any one of the checkboxes--------------------------


          
          if ($('.select:checked').length >0) {
                if($("#button1").prop("disabled",false)){
                  $("#button1").click(function(){
                    // alert ("hello guys");
                  });
                }
          }else {
          $("#button1").prop("disabled",true);
          }
          
          getSelectedIds();
        });
  

//------------------------------------------ for selectall function-------------------------------------------------



        $("#selectAll").change(function () {
          if ($(this).prop('checked')) {

            $('.select').not(this).prop('checked', true);

           if($("#button1").prop("disabled",false)) {

            $("#button1").click(function(){
              // alert ("hello guys2");
            });

           }
          } 
           else {
            $("#button1").prop("disabled",true);
            $('.select').not(this).prop('checked', false);
          }
          getSelectedIds();
        });
        function getSelectedIds(){
          $("#selectedIds").html("");
          $(".select").each(function(){
              if($(this).prop("checked")){
                if($("#selectedIds").length > 0){
                  const rec = "<strong>"+$(this).attr('data-id')+"</strong>,";
                  $("#selectedIds").append(rec);
                }
              }
          });
        }
      });

