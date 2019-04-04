<?php 
session_start();

require_once 'models/bdd.php';
require_once 'models/twig.php';

$uri = $_SERVER['REQUEST_URI'];
$uriExplode = explode("/", $uri);

$http = 'http://'.$_SERVER['HTTP_HOST'];



//Si c'est sur le serveur de online, ou autre serveur avec le prorjet présent dans portfolio
if(empty($_SERVER['SPECIAL_VARIABLE'])){
    $sub_path = $http.'/portfolio';
    $uri1 = $uriExplode[2];
} else { // si c'est local à l'ordinaterur avec l'alias aur-portfolio
    $sub_path = $http;
    $uri1 = $uriExplode[1];

}

$verifUri1 = $bdd->query('SELECT nom FROM projets WHERE nom="'.$uri1.'"');
$verifUri1 = $verifUri1->fetch();

if ($verifUri1 != false) {
    include_once 'controllers/projet_controller.php';
    getProjet($uri1);
} else {
    switch($uri1) {
    
    case 'accueil':
        include_once 'controllers/accueil_controller.php';
        getAccueil($sub_path);
        break;
    
    case 'verif_admin':
        echo $twig->render(
            "verif_admin.html.twig"
        );
        break;
    
    case 'ajout_projet':
        if ($_SESSION["pseudo"] != null) {
            echo $twig->render(
                "ajout_projet.html.twig"
            );
            break;
        } else {
            header('Location: accueil');
            break;
        }
        
    case 'mentions_legales':
        echo $twig->render(
            "metions_legales.html.twig"
        );
        break;

    default :
        header('Location: accueil');
        break;
    }
}


?>