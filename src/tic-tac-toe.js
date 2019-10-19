class TicTacToe {
    constructor() {
        this.currentPlayerSymbol = 'x';
        this.playField = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ]
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.playField[rowIndex][columnIndex] ==null) {

            this.playField[rowIndex][columnIndex] = this.currentPlayerSymbol;
            if (this.currentPlayerSymbol == 'x') {
                this.currentPlayerSymbol = 'o';
            } else {
                this.currentPlayerSymbol = 'x';
            }
        }
    }

    isFinished() {
        if (this.getWinner() || this.isDraw()) {
            return true
        }
        return false
    }

    getWinner() {
        if (this.playField[1][1] != null
            && (this.playField[0][0] == this.playField[1][1]
                && this.playField[1][1] == this.playField[2][2]) ||
            (this.playField[0][2] === this.playField[1][1]
                && this.playField[1][1] == this.playField[2][0])) {
            return this.playField[1][1];
        }
        for (let i = 0; i < 3; i++) {
            if (this.playField[0][i] != null
                && this.playField[0][i] == this.playField[1][i]
                && this.playField[1][i] == this.playField[2][i]) {
                return this.playField[0][i];
            }
            else if (this.playField[i][0] != null
                && this.playField[i][0] == this.playField[i][1]
                && this.playField[i][1] == this.playField[i][2]) {
                return this.playField[i][0];
            }
        }        
        return null;
    }

    noMoreTurns() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (!this.playField[i][j]) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        if (this.getWinner() == null && this.noMoreTurns()) {
            return true
        }
        return false
    }

    getFieldValue(rowIndex, colIndex) {
        return this.playField[rowIndex][colIndex]

    }
}

module.exports = TicTacToe;
