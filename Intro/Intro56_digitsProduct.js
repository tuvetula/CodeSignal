function digitsProduct(product) {



    function modulo(product, resultArray, compteur) {
        let possibility = [];
        let result = resultArray;
        let bigResult = [];
        let count = compteur;

        loop1: for (let i = 9; i > 1; i--) {
            console.log("Boucle i= " + i + " compteur= " + compteur);
            let intATester = product;
            console.log("intATester= "+intATester);

            if (intATester % i == 0) {
                result.push(i);
                intATester = intATester / i;
                console.log(intATester);
                

                if (intATester > 9) {
                    result.push(modulo(intATester, result, count + 1));
                    console.log("result= " + result); 
                    count = compteur;
                    continue;

                } else {
                    result.push(intATester);
                    bigResult.push(result.join(""));
                    result = [];
           
                }

            }
            console.log(bigResult);
        }

        return possibility;
    }
    //Product compris entre 0 et 9
    if (product > 0 && product < 10) {
        return product;
    }
    return modulo(product, [], 0);
    // let result = [1,2];
    // let resulArray = result;
    // console.log(resulArray);
}
console.log(digitsProduct(128));