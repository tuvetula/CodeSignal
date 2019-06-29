function areSimilar(a, b) {
    let nbSwap = 0;
    loop1:for (let i = 0; i < a.length; i++) {
        if (a[i] == b[i]) {
            continue;
        } else {
            for (let j = i; j < b.length; j++) {
                if (a[i] == b[j]) {
                    if (a[j] == b[i]) {
                        b[i] = a[i];
                        b[j] = a[j];
                        nbSwap += 1;
                        if (nbSwap > 1) {
                            return false;
                        }
                        continue loop1;
                    }
                }
            }
            return false;
        }
    }
    return true;
}
console.log(areSimilar([1, 2, 3], [2, 1, 3]));