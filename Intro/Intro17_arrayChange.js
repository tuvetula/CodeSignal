function arrayChange(inputArray) {
    let compteur = 0;
    for (let i = 0; i < inputArray.length-1; i++) {
        if (inputArray[i] < inputArray[i + 1]) {
            continue;
        } else {
            compteur += inputArray[i] - inputArray[i+1] +1;
            inputArray[i + 1] += (inputArray[i] - inputArray[i + 1] + 1);
        }
    }
    return compteur;
}
console.log(arrayChange([-1000, 0, -2, 0]));

//ou (mais prends plus de temps et ne passe pas tout les tests dans code signal)

function arrayChange1(inputArray) {
    let compteur1 = 0;
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] < inputArray[i + 1]) {
            continue;
        } else {
            while (inputArray[i + 1] <= inputArray[i]) {
                inputArray[i + 1] += 1;
                compteur1 += 1;
            }
        }
    }
    return compteur1;
}
console.log(arrayChange1([-1000, 0, -2, 0]));