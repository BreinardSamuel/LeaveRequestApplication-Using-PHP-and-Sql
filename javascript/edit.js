$(document).ready(function () {

    // -------------------------------------edit button in data table---------------------------------------------------


    $(document).on('click', '.edit', function () {

        var rowinfo = new Array();
        $('#selectedRow').html("");

        rowinfo.push($(this).attr('data-row'));

        $('#selectedRow').append(rowinfo);

        console.log(rowinfo);
        $.ajax({
            url: "http://localhost/leave_request_form/Html/edit.php",
            type: "POST",
            data: { rowinfo: rowinfo },
            // dataType: 'json',
            success: function (edit) {
                //    var parsed = JSON.parse(edit);
                // var editable = edit;
                console.log(edit);
                 window.location.href='http://localhost/leave_request_form/Html/update.html';
                 localStorage.setItem('data',edit);
}
        })
    });

    // function editClick(id){
    //     $.ajax({
    //         url: "http://localhost/leave_request_form/Html/edit.php",
    //         type: "post",
    //         data: { "id":id },
    //         success: function(res){
    //             let k=JSON.parse(res);
    //              console.log(k['data'][0]);
    //              localStorage.setItem('data',JSON.stringify(k));
    //              window.location.href='http://localhost/leave_request_form/Html/update.html';
    //         }
    //     });
    //     }
});