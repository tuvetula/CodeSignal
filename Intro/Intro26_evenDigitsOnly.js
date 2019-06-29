function evenDigitsOnly(n) {
    let result = 0;
    let nb = n.toString();
    loop1:for (let i = 0 ; i < nb.length ; i++){
        if (nb[i]%2==0){
            result=true;
        }else{
            return false;
        }
    }
return result;
}