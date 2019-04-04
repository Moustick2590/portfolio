$(function() {
    // -------------------------------------------------------------------création de la map pour localisation domicile-------------------------------------------------------

    var map = L.map('map').setView([47.2459485, 6.0106907], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([47.2459485, 6.0106907]).addTo(map)
        .bindPopup('Ma localisation')
        .openPopup();




    // -------------------------------------------------------------------création de la requête ajax pour le controle contact-------------------------------------------------------

    $("#contact").submit(function(event) {
        console.log('passe');
        var nom = $("#nom").val();
        var sujet = $("#sujet").val();
        var email = $("#email").val();
        var message = $("#message").val();
        var dataString = nom + sujet + email + message;
        var msg_all = "Merci de remplir tous les champs";
        var msg_alert = "Merci de remplir ce champs";

        if (dataString == "") {
            $("#msg_all").html(msg_all);
        } else if (nom == "") {
            $("#msg_nom").html(msg_alert);
        } else if (sujet == "") {
            $("#msg_sujet").html(msg_alert);
        } else if (email == "") {
            $("#msg_email").html(msg_alert);
        } else if (message == "") {
            $("#msg_message").html(msg_alert);
        } else {
            $.ajax({
                type: "POST",
                url: 'controllers/traitement_mail.php',
                data: {
                    nom: nom,
                    sujet: sujet,
                    email: email,
                    message: message
                },
                success: function(response) {

                    $("#msg_all").html(response);
                },
                error: function() {

                    $("#msg_all").html("<p>Erreur d'appel, le formulaire ne peut pas fonctionner</p>");
                }
            });
        }

        return false;
    });
})