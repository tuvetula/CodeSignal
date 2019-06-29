function deleteDigit(n) {
    let resultMax = 0;
    for (let i = 0; i < n.toString().length; i++) {

        let nString = n.toString().split("");
        nString.splice(i, 1);
        
        let result = parseInt(nString.join(""));
        if (result > resultMax) {
            resultMax = result;
        }
    }
    return resultMax;
}
console.log(deleteDigit(45732));


//Renvoi n avec seulement les 2 chiffres qui forment: la somme maximale de deux chiffres cote a cote
// function deleteDigit(n) {
//     let resultat
//     let nString=n.toString().split("");
//     for (let i = 0 ; i< nString.length ; i++){
//         nString[i] = parseInt(nString[i],10);
//     }
//     return calculMaxSumReturnArrayWithTwoInt(nString).join("");
// }
// function calculMaxSumReturnArrayWithTwoInt (array){
//     let resultat=0;
//     for(let i = 0 ; i < array.length-1 ; i++){
//         let sum=array[i]+array[i+1];
//         if (sum > resultat){
//             var finalArray=[];
//             finalArray.push(array[i]);
//             finalArray.push(array[i+1]);
//             resultat=sum;
//         }
//     }
//     return finalArray;
// }




// //Supprime le plus petit chiffre et renvoi n sans le plus petit chiffre
// function deleteDigit(n) {
//     let nStringWithoutMin=n.toString().split("").sort().slice(1);
//     let nString =n.toString().split("");
//     let result=[];

//     loop1: for (let i = 0 ; i < nString.length ; i++){

//         for(let j = 0 ; j < nStringWithoutMin.length ; j++){

//             if (nString[i]==nStringWithoutMin[j]){
//                 result.push(nStringWithoutMin[j]);
//                 nStringWithoutMin.splice(j,1);
//                 continue loop1;
//             }
//         }
//     }
//     return parseInt(result.join(""));
// }



//Renvoi le plus gros chiffre possible en supprimant un chiffre de n
// function deleteDigit(n) {
//         return parseInt(nStringWithoutMin=n.toString().split("").sort().slice(1).sort(function(a,b){
//             return b-a;
//         }).join(""));

// }


