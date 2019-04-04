$(document).ready(function(e) {
    $("#form_add_projet").on('submit', (function(e) {
        e.preventDefault();
        $.ajax({
            url: "controllers/ajout_projet_controller.php",
            type: "POST",
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            beforeSend: function() {
                $("#preview").fadeOut();
                $("#err").fadeOut();
            },
            success: function(data) {
                if (data == 'invalid') {
                    // invalid file format.
                    $("#err").html("Invalid File !").fadeIn();
                } else {
                    // view uploaded file.
                    $("#preview_desktop").html(data).fadeIn();
                    // $("#form")[0].reset();
                    console.log(data);
                }
            },
            error: function(e) {
                $("#err").html(e).fadeIn();
            }
        });
    }));
});
// $.ajax({
//     url: "ajax_php_file.php", // Url to which the request is send
//     type: "POST",             // Type of request to be send, called as method
//     data: new FormData(this), // Data sent to server, a set of key/value pairs (i.e. form fields and values)
//     contentType: false,       // The content type used when sending data to the server.
//     cache: false,             // To unable request pages to be cached
//     processData:false,        // To send DOMDocument or non processed data file it is set to false
//     success: function(data)   // A function to be called if request succeeds
//     {
//     $('#loading').hide();
//     $("#message").html(data);
//     }
//     });