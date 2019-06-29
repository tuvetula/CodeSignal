function lineEncoding(s) {
    let lastLetter = s[0];
    let compteur = 0;
    let finalString = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] != lastLetter) {
            (compteur == 1) ? finalString = finalString + lastLetter : finalString = finalString + compteur + lastLetter;
            lastLetter = s[i];
            compteur = 1;
            if (i == s.length - 1) {
                finalString = finalString + lastLetter;
            }
        } else {
            compteur++;
            if (i == s.length - 1) {
                finalString = finalString + compteur + lastLetter;
            }
        }
    }
    return finalString;
}
console.log(lineEncoding("aacdbbbaa"));
    //expected output: 2a3bc
