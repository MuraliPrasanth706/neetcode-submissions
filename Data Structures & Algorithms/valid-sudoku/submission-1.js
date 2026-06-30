class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        let rows = Array.from({length :9},()=>new Set())
        let cols = Array.from({length :9},()=>new Set())
        let boxes = Array.from({length :9},()=>new Set())

        for(let i=0;i<9;i++){
            for(let j=0;j<9;j++){
                let boardValue = board[i][j];
                if(boardValue !== "."){
                    let boxesValue = Math.floor(i /3) *3 + Math.floor(j/3);
                    if(rows[i].has(boardValue) || cols[j].has(boardValue) ||boxes[boxesValue].has(boardValue)){
                        return false
                    }
                    rows[i].add(boardValue);
                    cols[j].add(boardValue);
                    boxes[boxesValue].add(boardValue)
                }
            }
        }

        return true;
    }
}
