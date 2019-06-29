function minesweeper(matrix) {
    let compteur = 0;
    let tableau = [];
    let finalArray=[];
    
    //Parcours du nombre de lignes
    for (let i = 0; i < matrix.length; i++) {
        console.log("BOUCLE I= "+i);
        tableau=[];
        
        //Parcours de chaque valeur d'une ligne
        for (let j = 0; j < matrix[i].length; j++) {
            console.log();
            console.log("BOUCLE J= "+j)
            compteur=0;
            console.log("compteur="+compteur);
            
            //Verif case autour Ligne
            for (let m = i-1 ; m<=i+1 ; m++){    
                console.log("boucle m= "+m);
                
                //Verif case autour Colonne
                loop4:for (let n = j-1 ; n<=j+1 ; n++){
                    console.log("boucle n= "+n);
                    if (m==i && n==j){
                        continue loop4;
                    }
                    if (matrix[m]==undefined){
                        continue loop4;
                    }
                    if (matrix[i][n]==undefined){
                        continue loop4;
                    }
                    if (matrix[m][n]==true){
                        compteur+=1
                        console.log("ajout compteur= 1")
                    }
                    console.log("m= "+m+" n= "+n+" value= "+matrix[m][n]);
                }   
            }
            tableau.push(compteur);
        }
        finalArray.push(tableau.slice());
    }
return finalArray;
}
console.log(minesweeper([[true,false,false,true], 
    [false,false,true,false], 
    [true,true,false,true]]));
