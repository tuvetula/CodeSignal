function longestWord(text) {
    regExp1 = /[A-Za-z]/
    let SumLettersBiggerWords = 0;
    let compteur = 0;
    let BiggestWord = "";
    for (let i = 0; i < text.length; i++) {
        if (text[i] == regExp1.exec(text[i])) {
            compteur++;
            if (i == text.length - 1) {
                if (compteur > SumLettersBiggerWords) {
                    SumLettersBiggerWords = compteur;
                    BiggestWord = text.substr(i + 1 - compteur, compteur);
                }
            }
        } else {
            if (compteur > SumLettersBiggerWords) {
                SumLettersBiggerWords = compteur;
                BiggestWord = text.substr(i - compteur, compteur);
            }
            compteur = 0;
        }
    }
    return BiggestWord;
}
console.log(longestWord("to be or not to be"));
