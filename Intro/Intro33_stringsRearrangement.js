function stringsRearrangement(inputArray) {
    function compare2Strings(string, string2) {
        let sumLettreDiffrente = 0;
        for (let i = 0; i < string.length; i++) {
            if (string[i] != string2[i]) {
                sumLettreDiffrente += 1;
            }
        }
        if (sumLettreDiffrente == 0) {
            return "equal";
        } else if (sumLettreDiffrente < 2) {
            return true;
        } else {
            return false;
        }
    }

    let tableauInputString = [];
    let tableauAtester = [];
    let tableauTemporaire = [];

    //Boucle valeur par valeur inputArray
    loop1: for (let i = 0; i < inputArray.length; i++) {
        console.log("BOUCLE I= " + i);
        tableauInputString = inputArray.slice(0);       //copie inputArray dans tableauInputString
        tableauAtester = [];
        console.log("tableauInputString= " + tableauInputString);

        //Boucle cherche valeur compatible
        loop3: for (let j = 0; j < tableauInputString.length; j++) {
            console.log("BOUCLE J= " + j);
            tableauTemporaire = [];
            tableauTemporaire.push(tableauInputString[i]);

            //Test si compatible, et mets les valeurs ok dans tableauTemporaire
            if (compare2Strings(tableauTemporaire[tableauTemporaire.length - 1], tableauInputString[j]) == true) {
                tableauTemporaire.push(tableauInputString[j]);

                for (let k = 0; k < tableauInputString.length; k++) {
                    if (k != i && k != j) {
                        tableauTemporaire.push(tableauInputString[k]);
                    }
                }
                tableauAtester.push(tableauTemporaire);
                console.log("tableauTemporaire= " + tableauTemporaire);
                console.log("tableauInputString= " + tableauInputString);
            }
        }
        console.log("tableauATester= ");
        console.log(tableauAtester);

        if (triTableauAtester(tableauAtester, 0) == true) {
            return true;
        } else {
            continue loop1;
        }
    }
    return false;
}
console.log(stringsRearrangement(["abc", "xbc", "xxc", "xbc", "aby", "ayy", "aby", "azc"]));





function triTableauAtester(arrayToTest, compteur) {
    console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDebut FonctioNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN");
    
    function compare2StringsFunction(string, string2) {
        let sumLettreDiffrente = 0;
        for (let i = 0; i < string.length; i++) {
            if (string[i] != string2[i]) {
                sumLettreDiffrente += 1;
            }
        }
        console.log(sumLettreDiffrente);
        if (sumLettreDiffrente == 0) {
            return "equal";
        } else if (sumLettreDiffrente < 2) {
            return true;
        } else {
            return false;
        }
    }

    let compteurFunction = compteur;
    let recordValue = 0;
    loop1: for (let i = 0; i < arrayToTest.length; i++) {
        compteurFunction = 0;
        let tableauTemporaire = []
        console.log("LOOP1 BOUCLE i = " + i);
        if (typeof arrayToTest[0] == "object") {
            let arrayToTestInTheFunction = arrayToTest[i];
            console.log("arrayToTestInTheFunction=" + arrayToTestInTheFunction);

            loop2: for (let j = compteur; j < arrayToTestInTheFunction.length; j++) {
                console.log("LOOP 2 BOUCLE j = " + j);
                loop3: for (let k = j + 1; k < arrayToTestInTheFunction.length; k++) {
                    let tableauTresTemporaire = []
                    console.log("LOOP 3 BOUCLE k = " + k);

                    if (compare2StringsFunction(arrayToTestInTheFunction[j], arrayToTestInTheFunction[k]) == true) {
                        if (j + 1 == k && k == arrayToTestInTheFunction.length - 1) {
                            return true;

                        } else if (j + 1 == k) {
                            compteurFunction += 1;
                            continue loop2;

                        } else {
                            tableauTresTemporaire = arrayToTestInTheFunction.slice(0);
                            console.log("Permutation")
                            recordValue = tableauTresTemporaire[j + 1];
                            tableauTresTemporaire[j + 1] = tableauTresTemporaire[k];
                            tableauTresTemporaire[k] = recordValue;
                            console.log(tableauTresTemporaire);

                            tableauTemporaire.push(tableauTresTemporaire);
                            console.log("tableauTemporaire=");
                            console.log(tableauTemporaire);
                        }
                    }
                }
                if (triTableauAtester(tableauTemporaire, compteurFunction) == true) {
                    return true;
                }
                continue loop1;
            }
        } else {
            loop5: for (let l = compteur; l < arrayToTestInTheFunction.length; l++) {

                loop6: for (m = l + 1; m < arrayToTestInTheFunction.length; m++) {

                    if (compare2StringsFunction(arrayToTestInTheFunction[l], arrayToTestInTheFunction[m]) == true) {

                        if (l + 1 == m && m == arrayToTestInTheFunction.length - 1) {
                            return true;

                        } else if (l + 1 == m) {
                            compteurFunction += 1;

                        } else {
                            recordValue = arrayToTestInTheFunction[l + 1];
                            arrayToTestInTheFunction[l + 1] = arrayToTestInTheFunction[m];
                            arrayToTestInTheFunction[m] = recordValue;
                            tableauTemporaire.push(arrayToTestInTheFunction);
                            console.log("tableauTemporaire=");
                            console.log(tableauTemporaire);
                            compteurFunction += 1;
                            loop7: for (let p = 0; p < tableauTemporaire.length - 1; p++) {
                                if (compare2StringsFunction(tableauTemporaire[p], tableauTemporaire[p + 1]) == false) {
                                    triTableauAtester(tableauTemporaire, compteurFunction);
                                } else {
                                    continue loop7;
                                }
                            }
                            return true;
                        }
                    }
                }
                return false;
            }
        }
    }
}