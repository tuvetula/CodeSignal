function chessBoardCellColor(cell1, cell2) {
    
    //Fonction definition couleur
    function definitionCouleur(arg1){
        var regex = /(^[A|C|E|G][1|3|5|7])|(^[B|D|F|H][2|4|6|8])/
        if (regex.test(arg1)){
            return "black";
        }else{
            return "white";
        }
    }
    cell1 = definitionCouleur(cell1);
    cell2 = definitionCouleur(cell2);
    return (cell1 == cell2);
}
console.log(chessBoardCellColor("B3","H8"));