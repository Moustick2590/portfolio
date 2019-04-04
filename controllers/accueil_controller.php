<?php  




/**
 * Fonction affichage page d'accueil
 *
 */



function getAccueil($sub_path = 'portfolio') {
    include 'models/bdd.php';
    include 'models/twig.php';
    $retour_projets = $bdd->query("SELECT id, nom, img_desktop, contributeurs, description FROM projets");
    $retour_data = $bdd->query('SELECT nom FROM projets');
    echo $twig->render(
        "accueil.html.twig",  
        [
        "data" => $retour_data,
        "projets" => $retour_projets,
        'sub_path' => $sub_path
        ]
    );
}




?>
