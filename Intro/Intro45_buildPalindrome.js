function buildPalindrome(st) {

    function palindrome(string) {
        return string == string.split("").reverse().join("");
    }

    if (palindrome(st) == true) {
        return st;
        
    } else {
        let arrayStReverse = st.split("").reverse();
        let compteur = 0;
        
        for (let i = arrayStReverse.length - 1; i > 0; i--) {
            console.log("Boucle i= " + i);
            let arraySt = st.split("");
            
            for (let j = 0; j <= compteur; j++) {
                console.log("Boucle j= " + j);
                arraySt.push(arrayStReverse[i + j])
            }
            let newSt = arraySt.join("");

            if (palindrome(newSt) === true) {
                return newSt;
            }
            compteur++;
        }
    }
}
console.log(buildPalindrome("abdedc"));
