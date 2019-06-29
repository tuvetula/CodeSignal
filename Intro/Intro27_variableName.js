function variableName(name) {
    var regex = /^[0-9]/;
    var regex1 = /[^A-Za-z0-9_]+/;
    
    //Verifie si le premier caractère est compris entre 0 et 9
    if (regex.test(name) == true){
        return false;
    }

    //Verifie si la chaine de caractère comprend un caractère qui n'est pas une lettre, un chiffre ou un underscore
    if (regex1.test(name) == true){
        return false;
    }else{
        return true;
    };
}
console.log(variableName("var__s-t_1_rt"));
