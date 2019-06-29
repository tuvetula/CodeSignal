function reverseInParentheses(inputString) {
    loop1:for (let value = 0; value < inputString.length; value++) {
        
        //Identifie les parentheses ouvrantes et fermantes
        let tableauIndexParenthèseOuvrante = [];
        let tableauIndexParenthèseFermante = [];
        for (let i = 0; i < inputString.length; i++) {
            if (inputString[i] == "(") {
                tableauIndexParenthèseOuvrante.push(i);
            }
            if (inputString[i] == ")") {
                tableauIndexParenthèseFermante.push(i);
            }
        }


        //Identifier parenthese par parenthese to reverse dans un tableau
        let idParenthese = [];
        for (let i = 0; i < tableauIndexParenthèseFermante.length; i++) {

            for (let j = 0; j < tableauIndexParenthèseOuvrante.length; j++) {
                if (tableauIndexParenthèseFermante[i] < tableauIndexParenthèseOuvrante[j]) {
                    idParenthese.push(tableauIndexParenthèseOuvrante[j - 1]);
                    tableauIndexParenthèseOuvrante.splice(j - 1, 1);
                    idParenthese.push(tableauIndexParenthèseFermante[i]);
                    break;

                } else if (tableauIndexParenthèseOuvrante.indexOf(tableauIndexParenthèseOuvrante[j]) == tableauIndexParenthèseOuvrante.length - 1) {
                    idParenthese.push(tableauIndexParenthèseOuvrante[j]);
                    idParenthese.push(tableauIndexParenthèseFermante[i]);
                    tableauIndexParenthèseOuvrante.pop();
                }
            }
        }
        //Si il reste des parenthèses dans inputString
        if (idParenthese.length > 0) {
            console.log(idParenthese);

            //Extrait le mot à inverser de la chaine de caractère inputString
            let reverseString = "";
            stringToReverse = inputString.substring(idParenthese[0], idParenthese[1] + 1);
            console.log("stringtoreverse= " + stringToReverse);


            //Supprime parenthese du mot à inverser et inverse le mot
            let reverseStringSansParentheses = "";
            for (let i = 0; i < stringToReverse.length; i++) {
                if (stringToReverse[i] != "(" && stringToReverse[i] != ")") {
                    reverseStringSansParentheses = stringToReverse[i] + reverseStringSansParentheses;
                }
            }
            console.log("reverseStringSansParentheses= " + reverseStringSansParentheses);


            //insert le mot inversé dans inputString
            inputString = inputString.replace(stringToReverse, reverseStringSansParentheses);
            console.log("newInputString= " + inputString);

        }else{
            break loop1;
        }
        value--;   
    }
    return inputString;
}
console.log(reverseInParentheses("(((((((a)))))))"));