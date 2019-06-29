function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let startHeight = 0
    let compteur=0
    do {
        startHeight += upSpeed;
        compteur+=1;
        if (startHeight>=desiredHeight){
            return compteur;
        }
        startHeight-=downSpeed;

    }
    while (startHeight<desiredHeight)
}
console.log(growingPlant(100, 10, 910));