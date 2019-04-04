$(function() {

$('#form_admin').css("margin-top", "30vh");

    // je déclare ma fonction au submit
    const formValid = document.getElementById('form_admin');
    formValid.addEventListener('submit', function(e) {
        e.preventDefault();
        $.post(
            "controllers/verif_admin.php", // Un script PHP que l'on va créer juste après
            {
                pseudo: $("#username").val(), // Nous récupérons la valeur de nos input que l'on fait passer à connexion.php
                password: $("#password").val()
            },
            function(data) {
                data = JSON.parse(data);
                if (data['code'] == 200) {
                    // Le membre est connecté. Ajoutons lui un message dans la page HTML.
                    console.log(data);
                    location = 'ajout_projet';
                } else {
                    // Le membre n'a pas été connecté. (data vaut ici "failed")
                    $("#resultat").html("<p>Erreur lors de la connexion...</p>");
                }
            },
            'text'
        );
    });
})