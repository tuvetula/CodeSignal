function boxBlur(image) {

    //Définition nombre de chiffres par ligne
    let nbParLigne = 0;
    for (let i = 0; i < image[0].length; i++) {
        nbParLigne += 1;
    }

    //Création tableau finalArray
    let finalArray=[];
    
    //BALAYAGE DE IMAGE
    //Nombre de tableau sur la hauteur (sur la hauteur)(decalage a faire vers le bas)
    for (let i = 0; i <= image.length - 3; i++) {
        let tableau = [];
        console.log(i);
        
        //Nombre de valeur sur un tableau (sur la longueur)(decalage a faire vers la droite)
        for (let j = 0; j <= nbParLigne - 3; j++) {
            let somme = 0;
            console.log("boucle j = " + j);

            //Nombre de lignes par tableau (lignes à compter)(decalage vers le bas *3 chaque fois)
            for (let k = i; k < i + 3; k++) {
                console.log("boucle k = " + k);

                //Nombre de colonnes par tableau(colonnes à compter)(Ajoute à somme chaque valeur balayée)
                for (let l = j; l < j + 3; l++) {
                    console.log("boucle l = " + l);
                    somme += image[k][l];
                }
                //Addition des valeurs dans un tableau 3*3
                if (k + 1 == i + 3) {
                    tableau.push(Math.floor((somme / 9)));   
                    console.log(tableau); 
                }
            }   
        }
        //dispatch
        finalArray.push(tableau.slice());
    }
    return finalArray;
}


console.log(boxBlur([[7, 4, 0, 1, 10],
[5, 6, 2, 2, 5],
[6, 10, 7, 8, 7],
[1, 4, 2, 0, 2]]));
