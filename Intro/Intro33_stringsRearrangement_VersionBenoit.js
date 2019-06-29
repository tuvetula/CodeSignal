function stringsRearrangement(inputArray) {
    
    var bruteForce = function (depth, inputArray) {

        //swap
        var swap = function (i, j) {
            tmp = inputArray[i];
            inputArray[i] = inputArray[j];
            inputArray[j] = tmp;
        };

        //depth==0 ; 
        if (depth === inputArray.length) {
            
            //Parcours de inputArray valeur par valeur
            for (var i = 0; i < inputArray.length - 1; i++) {
                
                //Déclaration nombre de caractères différent entre 2 string
                var differences = 0;
                
                //Boucle comparative avec boucle i
                for (var j = 0; j < inputArray[i].length; j++) {
                    if (inputArray[i][j] !== inputArray[i + 1][j]) {
                        differences++;
                    }
                }

                //Si différence different de 1 alors return false
                if (differences !== 1) {
                    return false;
                }
            }
            return true;
        }
        
        for (var i = depth; i < inputArray.length; i++) {
            swap(depth, i);
            if (bruteForce(depth + 1, inputArray)) {
                return true;
            }
            swap(depth, i);
        }
        return false;
    
    };
    return bruteForce(0, inputArray);
}
console.log(stringsRearrangement(["abc", "xbc", "xxc", "xbc", "aby", "ayy", "aby", "azc"]));
