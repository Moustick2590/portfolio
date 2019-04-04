<?php

/**
 * Fonction affichage d'un projet
 *
 */


    require '../models/bdd.php';
    $retour = $bdd->query('SELECT identifiant, mdp_util FROM utilisateur');
    $retour = $retour->fetch();
    
    
$errorMsg ="";
$pseudo = $_POST['pseudo'];
$pass = $_POST['password'];

/* PSEUDO */
if ((isset($_POST["pseudo"]) && ($pseudo == $retour["identifiant"])) && (isset($_POST["password"]) && ($pass == $retour["mdp_util"]))) {
    session_start();
    $_SESSION['pseudo'] = $pseudo;
    echo json_encode(['code'=>200, 'pseudo'=>$pseudo]);
} else {
    echo json_encode(['code'=>400, 'pseudo'=>$pseudo, 'pass'=> $pass, 'retour'=>$retour["mdp_util"]]); 
}


