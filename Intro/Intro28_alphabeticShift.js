function alphabeticShift(inputString) {
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    
    //Conversion chaine de caractères en tableau
    let tableauInputString = inputString.split("");
    
    //Boucle sur tableauInputString
    for (let i = 0 ; i < tableauInputString.length ; i++){
        console.log("boucle i= "+i);
        
        //Boucle sur tableau alphabet
        loop2:for (let j = 0 ; j < alphabet.length ; j++){
            console.log("boucle j="+j);
            
            //Condition si lettre similaire dans les 2 tableaux
            if (tableauInputString[i] == alphabet[j]){
                if (alphabet[j+1]== undefined){
                    alphabet[j+1]=alphabet[0];
                }
                tableauInputString[i]=alphabet[j+1];
                break loop2; 
            }
        }
    }
    //Conversion tableau en chaine de caractère
    inputString = tableauInputString.join("");
    
    return inputString;
}
console.log(alphabeticShift("aaaabbbccd"));