function sudoku(grid){
    //Vérification sur lignes
    console.log("Verif sur lignes");
    //Nombre de lignes
    for (let lines = 0; lines < 9; lines++) {
        //Chiffres de 1 à 9
        loop2:for (let i = 1; i < 10; i++) {
            //Vérif presence sur ligne
            loop3:for (let j = 0; j < 9; j++) {
                if (i == grid[lines][j]) {
                    continue loop2;
                }else{
                    continue loop3;
                }
            }
            return false;
        }
    }

    //Vérification sur colonnes
    console.log("Verif sur colonnes")
    //Nombre de colonnes
    for (let column = 0 ; column < 9 ; column++){
        //Chiffres de 1 à 9
        loop5:for (let i = 1 ; i < 10 ; i++){
            //Vérif présence sur colonnes
            loop6:for (let columnLine = 0 ; columnLine < 9 ; columnLine++){
                if (i == grid[columnLine][column]){
                    continue loop5;
                }else{
                    continue loop6;
                }
            }
            return false;
        }
    }

    //Vérification sur square 3*3
    console.log("Verif square");
    //Lignes *3
    for (let i = 0 ; i < 9 ; i+=3){
        //Colonnes *3
        for (let j = 0 ; j < 9 ; j+=3){
            //Numbers
            loop9:for (let numbers=1 ; numbers < 10 ; numbers++){
                console.log("numbers= "+numbers);
                //Lignes dans square
                for (let k = i ; k < i+3 ; k++){
                    //Colonnes dans square
                    loop11:for (let l = j ; l < j+3 ; l++){
                        if(numbers == grid[k][l]){
                            continue loop9;
                        }else{
                            continue loop11;
                        }
                    }
                }
                return false;
            }
        }
    }
    return true;
}
console.log(sudoku([[1,3,2,5,4,6,9,8,7], 
    [4,6,5,8,7,9,3,2,1], 
    [7,9,8,2,1,3,6,5,4], 
    [9,2,1,4,3,5,8,7,6], 
    [3,5,4,7,6,8,2,1,9], 
    [6,8,7,1,9,2,5,4,3], 
    [5,7,6,9,8,1,4,3,2], 
    [2,4,3,6,5,7,1,9,8], 
    [8,1,9,3,2,4,7,6,5]]));