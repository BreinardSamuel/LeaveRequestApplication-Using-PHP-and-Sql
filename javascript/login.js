
$("document").ready(function () {

    // --------------------initial popup hide--------------

    $("#popupContainer").css("display", "none");
    $("#popupContainerTwo").css("display", "none");


    //--------------------------------------function for show password---------------------------------------------



    $('#showPassword').on('click', function () {
        var passInput = $("#Password");
        if (passInput.attr('type') === 'password') {
            passInput.attr('type', 'text');
        } else {
            passInput.attr('type', 'password');
        }

    });


    //-----------------------------------------function for login button---------------------------------------------



    $("#login").click(function () {

        $.ajax({
            url: "login.php",
            type: "POST",
            data: $("#loginForm").serialize(),
            success: function (a) {
                if (a == "Login successful") {
                    // alert(a);
                    $("#popupContainerTwo").fadeIn(500).css('display', "block");
                    $("#okTwo").click(function () {

                        $("#popupContainerTwo").fadeOut(600);
                        window.location.href = "http://localhost/leave_request_form/Html/home.html";

                    });

                }
                else {
                    $("#popupContainer").fadeIn(500).css('display', "block");
                    $("#ok").click(function () {
                        $("#popupContainer").fadeOut(600);
                    })
                    // alert(a);
                    $('#loginForm')[0].reset();
                }
            }
        });
    });
});


