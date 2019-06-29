function sortByHeight(a) {
    let minNumber;
    let maxNumber;
    for (let i = 0; i < a.length; i++) {
        if (a[i] != -1) {
            maxNumber = a[i];
            for (let j = i; j < a.length; j++) {
                if (a[i] > a[j] && a[j] != -1) {
                    maxNumber = a[i];
                    a[i] = a[j];
                    a[j] = maxNumber;
                }
            }
        }
    }
    return a;
}
console.log(sortByHeight([-1, 190, 170, 150, -1, -1, 160, 180]));