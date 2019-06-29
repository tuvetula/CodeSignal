function alternatingSums(a) {
    let tableau1 = [];
    let tableau2 = [];
    let finalTableau = [];
    //Dispatch des valeurs dans chaque tableau
    for (let i = 0; i < a.length; i += 2) {
        tableau1.push(a[i]);
        if (i + 1 < a.length) {
            tableau2.push(a[i + 1]);
        }else{
            tableau2.push(0);
        }
    }
    //somme du tableau1 et push dans le tableau final
    finalTableau.push(tableau1.reduce(function (acc, value) {
        return acc + value;
    }));
    //somme du tableau2 et push dans le tableau final
    finalTableau.push(tableau2.reduce(function (acc, value) {
        return acc + value;
    }));

    return finalTableau;
}
console.log(alternatingSums([50, 60, 60, 45, 70]));