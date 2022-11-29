
$(document).ready(function () {

    var get = localStorage.getItem("data");
    console.log(get);

    if (get != undefined) {
        var parsedGet = JSON.parse(localStorage.getItem('data'));

        console.log(parsedGet[0].id);


        $("#userName").val(parsedGet[0].name);
        $("#projectName").val(parsedGet[0].projectName);
        $("#startDate").val(parsedGet[0].startDate);
        $("#endDate").val(parsedGet[0].endDate);



        if (parsedGet[0].dayOff == 'A') {
            $("#am").prop("checked", true);
        } else if (parsedGet[0].dayOff == 'P') {
            $("#pm").prop("checked", true);
        } else if (parsedGet[0].dayOff == 'D') {
            $("#allDay").prop("checked", true);
        }

        $("#typeOfLeave").val(parsedGet[0].typeOfLeave);
        $("#reason").val(parsedGet[0].reason);

        // localStorage.removeItem("data");

    };

    $('#buttonSubmit').click(function () {

        var userName = $('#userName').val();
        var projectName = $('#projectName').val();
        var startDate = $('#startDate').val();
        var endDate = $('#endDate').val();
        var meridian = $('.meridian').val();
        var typeOfLeave = $('#typeOfLeave').val();
        var reason = $('#reason').val();

        if (userName.length > 1 && projectName.length > 1 && startDate.length > 1 && endDate.length > 1 && typeOfLeave.length > 0 && reason.length > 1) {

            var id = parsedGet[0].id;
            var userName = $('#userName').val();
            var projectName = $('#projectName').val();
            var startDate = $('#startDate').val();
            var endDate = $('#endDate').val();
            var meridian = $('.meridian:checked').val();
            var typeOfLeave = $('#typeOfLeave').val();
            var reason = $('#reason').val();

            console.log(meridian);


            $.ajax({
                url: "update.php",
                type: "POST",

                data: {
                    "id": id,
                    "userName": userName,
                    "projectName": projectName,
                    "startDate": startDate,
                    "endDate": endDate,
                    "dayOff": meridian,
                    "typeOfLeave": typeOfLeave,
                    "reason": reason
                },
                success: function (response) {
                    console.log(response);
                    if (response === "updated") {
                        // alert ('hiii');
                        // $('#buttonSubmit').click(function () {
                            $('#popupContainer').fadeIn(500).css('display', 'block');
                            $('#ok').click(function () {
                                $('#popupContainer').fadeOut(600);
                                window.location.href = "http://localhost/leave_request_form/Html/home.html";
                            })
                        // });
                    }
                }
                // success: function (response) {
                //     console.log(response);
                // if (res === "failed") {
                //     alert("updation failed !!!!");
                // }
                // else {
                //     alert("updation successful !!!")

                //     console.log(response);
                //     // window.location.href = "table.html";
                //     let k = JSON.parse(response);
                //     console.log(k['data']);
                //     table = $('#tableone').dataTable({
                //         "destroy": true,
                //         "processing": true,
                //         "order": [[1, "asc"]],
                //         "data": k['data'],
                //         columns: [
                //             {
                //                 'data': null,
                //                 'render': function (data) {
                //                     return '<input type="checkbox" data-id=' + data['id'] + ' class="select">'
                //                 },
                //             },
                //             { 'data': 'id' },
                //             { 'data': 'name' },
                //             { 'data': 'projectName' },
                //             { 'data': 'startDate' },
                //             { 'data': 'endDate' },
                //             { 'data': 'dayOff' },
                //             { 'data': 'typeOfLeave' },
                //             { 'data': 'reason' },
                //             {
                //                 'data': null,
                //                 'render': function (data) {
                //                     return '<button type="button" data-row=' + data['id'] + ' class="edit" style="padding: 5px; border-radius: 10px; color: #fff; background-color: #333; text-decoration: none;" >Edit</button>'
                //                 },
                //             }
                //         ],
                //     });
                // }

                // }
            });
        }
    });

});

