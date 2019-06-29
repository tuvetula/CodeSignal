function depositProfit(deposit, rate, threshold) {
    let compteur = 0;
    while(deposit<threshold){
        deposit=deposit+(deposit*rate/100);
        compteur+=1
    }
    return compteur;
}
console.log(depositProfit(100,20,170));