function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    let arrayMy=[];
    let arrayFriends=[]
    
    //Pousse les valeurs de chacun dans leur tableau respectif
    arrayMy.push(yourLeft);
    arrayMy.push(yourRight);
    arrayFriends.push(friendsLeft);
    arrayFriends.push(friendsRight);

    //Enregistre les valeurs les plus fortes et les valeurs les plus faibles de chacun
    let arrayMyMax = arrayMy.reduce(function(value,acc){
        return Math.max(value,acc);
    });
    let arrayFriendsMax = arrayFriends.reduce(function(value,acc){
        return Math.max(value,acc);
    });
    let arrayMyMin = arrayMy.reduce(function(value,acc){
        return Math.min(value,acc);
    });
    let arrayFriendsMin = arrayFriends.reduce(function(value,acc){
        return Math.min(value,acc);
    });
    
    //Test des valeurs les plus fortes et les plus faibles de chacun
    return (arrayMyMax == arrayFriendsMax && arrayFriendsMin == arrayMyMin);
}
console.log(areEquallyStrong(10, 15, 10, 15));