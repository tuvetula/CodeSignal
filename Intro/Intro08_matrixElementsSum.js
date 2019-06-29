
let sum = 0;
function matrixElementsSum(matrix) {
    for (let i = 1; i <= matrix.length; i++) {
        for (let j = 0; j < (matrix[i - 1].length); j++) {
            if (i > 1) {
                if (matrix[i - 2][j] > 0) {
                    sum += matrix[i - 1][j];
                } else {
                    matrix[i - 1][j] = 0;
                }
            } else {
                sum += matrix[i - 1][j];
            }
        }
    }
    return sum;
}



console.log(matrixElementsSum([[1, 1, 1, 0],
[0, 5, 0, 1],
[2, 1, 3, 10]]));

