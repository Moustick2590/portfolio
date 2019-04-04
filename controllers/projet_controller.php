<?php

/**
 * Fonction affichage d'un projet
 *
 */

function getProjet($uri1) {
    include 'models/bdd.php';
    include 'models/twig.php';
    $retour_projet = $bdd->query('SELECT nom, img_desktop, img_tablette, img_mobile, description, contributeurs, technologies, lien FROM projets WHERE nom="'.$uri1.'"');
    $retour_data = $bdd->query('SELECT nom FROM projets');
    echo $twig->render(
        "projet.html.twig",
        [
        "projet" => $retour_projet,
        "data" => $retour_data,
        'sub_path' => $sub_path
        ]
    );
}