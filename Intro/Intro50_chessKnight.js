function chessKnight(cell) {
    let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
    let numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];
    let result = 0;
    //Mise en tableau de cell
    let cellArray = cell.split("");
    //Récupération indices cell
    let indexLetters = letters.indexOf(cellArray[0]);
    let indexNumbers = numbers.indexOf(cellArray[1]);

    //Possibilité par rapport aux lettres
    if (indexLetters >= 2 && indexLetters <= 5) {
        if (indexNumbers >= 2 && indexNumbers <= 5) {
            return 8;
        } else if (indexNumbers == 1 || indexNumbers == 6) {
            return 6;
        } else {
            return 4;
        }
    } else if (indexLetters == 1 || indexLetters == 6) {
        if (indexNumbers >= 2 && indexNumbers <= 5) {
            return 6;
        } else if (indexNumbers == 1 || indexNumbers == 6) {
            return 4;
        } else {
            return 3;
        }
    } else {
        if (indexNumbers >= 2 && indexNumbers <= 5) {
            return 4;
        } else if (indexNumbers == 1 || indexNumbers == 6) {
            return 3;
        } else {
            return 2;
        }
    }
}
console.log(chessKnight("a1"));