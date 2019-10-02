class TicTacToe {
    constructor() {
        this.currentPlayerSymbol = 1 % 2;
        this.matrix = [[null, null, null],
                       [null, null, null],
                       [null, null, null]];
    }

    getCurrentPlayerSymbol() {
        if(this.currentPlayerSymbol % 2)
            return 'x';
        
        return 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.matrix[rowIndex][columnIndex] !== null)
           return;
        this.matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
        
        ++this.currentPlayerSymbol;
    }

    isFinished() {
        return this.noMoreTurns() || this.getWinner() !== null;
    }

    getWinner() {
        for(let i = 0; i < 3; ++i) {
            //check cols
            if(this.matrix[0][i] === this.matrix[1][i] && this.matrix[0][i] === this.matrix[2][i])
                return this.matrix[0][i];
            //check rows
            if(this.matrix[i][0] === this.matrix[i][1] && this.matrix[i][0] === this.matrix[i][2])
                 return this.matrix[i][0];
        }

        //check diagonals
        if((this.matrix[0][0] === this.matrix[1][1] && this.matrix[0][0] === this.matrix[2][2]) || 
           (this.matrix[0][2] === this.matrix[1][1] && this.matrix[0][2] === this.matrix[2][0]))
            return this.matrix[1][1];
        
        return null;
    }

    noMoreTurns() {
        for(let i = 0; i < 3; ++i)
            for(let j = 0; j < 3; ++j)
                if(this.matrix[i][j] === null)
                    return false;
        return true;
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
