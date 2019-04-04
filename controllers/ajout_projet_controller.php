<?php
/**
 * Fonction affichage page d'ajout de projets
 *
 */
require '../models/bdd.php';
$errorMsg = '';
$validextensions = array("jpeg", "jpg", "png");

if (($_POST['nom'] && $_POST['contributeurs'] && $_POST['techno'] && $_POST['lien'] && $_POST['description'] && $_FILES['img_desktop']['name']) != '') {
    $nom = $_POST['nom'];
    $contrib = $_POST['contributeurs'];
    $techno = $_POST['techno'];
    $lien = $_POST['lien'];
    $description = $_POST['description'];
    if (($_FILES['img_tablette']['name'] && $_FILES['img_mobile']['name']) != '') {
        echo 'tu pues';
    } elseif (($_FILES['img_tablette']['name'] != '') && ($_FILES['img_mobile']['name'] == '')) {
        echo 'tablette';
    } elseif ($_FILES['img_mobile']['name'] != '') {
        echo 'mobile';
    } else {
        $img = $_FILES['img_desktop']['name'];
        $tmp = $_FILES['img_desktop']['tmp_name'];
        // $serveur = 'https://aurelienc.codeur.online';
        // $target = $serveur.'/portfolio/public/img/'.$img;
        $target = '/var/www/html/portfolio/public/img/'.$img;
        // get uploaded file's extension
        $ext = strtolower(pathinfo($img, PATHINFO_EXTENSION));
        if (in_array(
            $ext,
            $validextensions
        )
        ) { 
            if ($_FILES['img_desktop']['size'] < 1000000) {
                move_uploaded_file(
                    $tmp,
                    $target
                );
                $insert = $bdd->prepare("INSERT INTO projets (nom,description,contributeurs,technologies,lien,img_desktop) VALUES (\"$nom\",\"$description\",\"$contrib\",\"$techno\",\"$lien\",\"$img\")");
                $insert->execute();
                echo 'projet envoyé';
            } else {
                echo 'fichier tros gros';
            }
        } else {
            echo 'format invalide';
        }
        
    }
} else {
    $errorMsg = 'il faut remplir tous les champs texte et img_desktop';
    echo $errorMsg;
}


