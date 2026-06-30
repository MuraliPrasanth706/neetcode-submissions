class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        for(let row=0;row <9;row++){
            const seen=[]
            for(let col =0;col < 9;col++){
                let value = board[row][col];
                if(value !== "."){
                    if(seen.includes(value)){
                        return false
                    }
                    seen.push(value)
                }
            }
        }
        for(let col=0;col <9;col++){
            const seen=[]
            for(let row =0;row < 9;row++){
                let value = board[row][col];
                if(value !== "."){
                    if(seen.includes(value)){
                        return false
                    }
                    seen.push(value)
                }
            }
        }

        for(let boxRow =0;boxRow <9;boxRow+=3){
            for(let boxCol =0;boxCol <9;boxCol+=3){
                const seen=[]
                for(let row=0;row<3;row++){
                    for(let col=0;col<3;col++){
                        let boxValue = board[boxRow + row][boxCol + col];
                        if(boxValue !=="."){
                             if(seen.includes(boxValue)){
                               return false
                            }
                            seen.push(boxValue)
                        }
                    }
                }
            }
        }
        return true
    }
}
