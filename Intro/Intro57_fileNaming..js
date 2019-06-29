function fileNaming(names) {
    for (let i = 0; i < names.length - 1; i++) {
        compteur = 1;
        for (let j = i + 1; j < names.length; j++) {
            if (names[i] == names[j]) {
                let temp = names[i] + "(" + compteur + ")";
                for (let k = 0; k < j; k++) {
                    if (names[k] == temp) {
                        compteur += 1;
                        temp = names[i] + "(" + compteur + ")";
                        console.log("temp= "+temp);
                    }
                    names[j] = temp;
                }
                compteur++;
            }
        }
        compteur = 1;
    }
    return names;
}