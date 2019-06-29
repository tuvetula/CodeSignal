function addBorder(picture) {
    let nbCaracteres = picture[0].length;
    
    //Dessin de la ligne d'etoile en début et fin de tableau
    let ligneEtoile="";
    for (let i = 0 ; i<nbCaracteres+2;i++){
        ligneEtoile+="*";
    }

    //Définition du nombre d'etoile à placer avant et apres les lignes de caractères de picture
    let ligneEtoileEncadrementCote="";
    for (let i =0 ; i<(ligneEtoile.length-nbCaracteres)/2 ; i++){
        ligneEtoileEncadrementCote+="*";
    }
    
    //Dessin du tableau final
    let finalArray=[];
    finalArray.push(ligneEtoile);
    for (let i =0 ; i<picture.length ; i++){
        finalArray.push(ligneEtoileEncadrementCote+picture[i]+ligneEtoileEncadrementCote);
    }
    finalArray.push(ligneEtoile);

return finalArray;
}
console.log(addBorder(["abc","ded"]))