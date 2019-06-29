function avoidObstacles(inputArray) {
    //Tri le tableau par ordre crissant
    inputArray = inputArray.sort(function (a, b) {
        return a - b;
    });

    //Insere le 0 en debut de tableau si besoin
    if (inputArray[0] != 0) {
        inputArray.unshift(0);
    }
    console.log(inputArray);

    //Test sur inputArray[0]
    for (let i = 0; i < 1; i++) {
        
        //Compteur de saut
        loop2: for (let j = 1; j < inputArray[inputArray.length - 1] + 2; j++) {
            console.log("boucle j = "+j);
            
            //Test sur toutes les valeurs du tableau
            loop3: for (let k = 1; k < inputArray[inputArray.length - 1] + 2; k++) {
                console.log("boucle k = "+k);
                if (inputArray[k] % j == 0) {
                    continue loop2;
                }else if (k>inputArray.length){
                    return j;
                }else if (inputArray.length<3){
                    return j;
                }else if (j == inputArray[inputArray.length - 1]) {
                    return j + 1;
                }
            }
        }
    }
}
console.log(avoidObstacles([1]));