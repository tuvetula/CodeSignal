function arrayMaxConsecutiveSum(inputArray, k) {
    //     let maxSum=0;
    // for (let i = 0 ; i < inputArray.length-k+1 ; i++){
    //     console.log("boucle i="+i)
    //     let sum = 0; 
    //     for (let j = i ; j < i+k ; j++){
    //         sum += inputArray[j]; 
    //     }
    //     if (sum>maxSum){
    //         maxSum=sum;
    //     }
    // }
    // return maxSum;

    //ou

    // let maxSum=0;
    // for (let i = 0 ; i < inputArray.length-k+1 ; i++){
    //     let newArray = inputArray.slice(i,i+k);
    //     let sum = newArray.reduce((acc,value)=>acc+value);
    //     if (sum>maxSum){
    //         maxSum=sum;
    //     }
    //     }
    // return maxSum;
    // }

    //ou

    // let maxSum=0;
    // for (let i = 0 ; i < inputArray.length-k+1 ; i++){
    //     let sum = inputArray.slice(i,i+k).reduce((acc,value)=>acc+value);
    //        if (sum>maxSum){
    //            maxSum=sum;
    //        }
    //     }
    // return maxSum;
    // }

    //ou

    //somme des k premiers entiers
    var sumMax = 0;
    for (var i = 0; i < k; i++)
        sumMax += inputArray[i];
    
    var sum = sumMax;
    //sum - le premier nombre de l'ancien + le nouveau nombre
    for (var i = 1; i <= inputArray.length - k; i++) {
        sum = sum - inputArray[i - 1] + inputArray[i + k - 1];
        if (sum > sumMax) sumMax = sum;
    }
    return sumMax;
}


console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 3));