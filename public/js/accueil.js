$(function() {


    // -------------------------------------------------------------------création de la map pour localisation domicile-------------------------------------------------------
    var iconAC = L.icon({
        iconUrl: 'public/img/icon_marker.png',
        iconSize:     [55, 95], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    var map = L.map('map').setView([47.2459485, 6.0106907], 7);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([47.2459485, 6.0106907], {icon: iconAC}).addTo(map)
        


    // -------------------------------------------------------------------création de la requête ajax pour le controle contact-------------------------------------------------------

    $("#contact").submit(function(event) {
        var nom = $("#nom").val();
        var sujet = $("#sujet").val();
        var email = $("#email").val();
        var message = $("#message").val();
        
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
        return false;
    });
})