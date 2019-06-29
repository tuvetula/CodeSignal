function commonCharacterCount(s1, s2) {
    let result = 0;
    if (s1.length <= s2.length) {
        for (let i = 0; i < s1.length; i++) {
            console.log()
            console.log("Boucle " + i + " lettre s1= " + s1.substring(i, i + 1));
            loop2: for (let j = 0; j < s2.length; j++) {
                if (s1.substring(i, i + 1) == s2.substring(j, j + 1)) {
                    result += 1;
                    s2 = s2.replace(s2.substring(j, j + 1), "");
                    console.log("j=" + j + ", pour s2 il reste: " + s2);
                    break loop2;
                } else {
                    console.log(s1.substring(i, i + 1) + " est different de " + s2.substring(j, j + 1));
                }
            }
        }
    } else if (s2.length < s1.length) {
        for (let i = 0; i < s2.length; i++) {
            console.log();
            console.log("Boucle " + i + " lettre s2= " + s2.substring(i, i + 1));
            loop4: for (let j = 0; j < s1.length; j++) {
                if (s2.substring(i, i + 1) == s1.substring(j, j + 1)) {
                    result += 1;
                    s1 = s1.replace(s1.substring(j, j + 1), "");
                    console.log("j=" + j + ", pour s1 il reste: " + s1);
                    break loop4;
                }else{
                    console.log(s2.substring(i, i + 1) + " est different de " + s1.substring(j, j + 1));   
                }
            }
        }
    }
    console.log();
    return result
}
console.log("le resultat attendu est: "+commonCharacterCount("adabcag", "adcaza"));