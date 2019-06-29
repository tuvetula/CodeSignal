function electionsWinners(votes, k) {
    
    let votesSort = votes.sort(function (a, b) {
        return a - b;
    });
    console.log(votesSort);

    let numberWinners = 0;

    for (let i = 0; i < votesSort.length; i++) {
        if (votesSort[i] + k > votesSort[votesSort.length - 1]) {
            numberWinners++;
        }
    }

    if (k == 0 && votesSort[votesSort.length - 1] != votesSort[votesSort.length - 2]) {
        numberWinners++;
    }
    
    return numberWinners;
}
console.log(electionsWinners([2, 3, 5, 6, 6, 4, 9, 9, 10, 5, 2], 0));