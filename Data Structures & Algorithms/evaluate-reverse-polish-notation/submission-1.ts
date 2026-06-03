class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let stack = [];
        let symbols = ["+", "-", "*", "/"];

        for (let token of tokens) {
            if (!symbols.includes(token)) {
                stack.push(Number(token));
            } else {
                let a = stack.pop();
                let b = stack.pop();

                switch (token) {
                    case "+":
                        stack.push(b + a);
                        break;
                    case "-":
                        stack.push(b - a);
                        break;
                    case "*":
                        stack.push(b * a);
                        break;
                    case "/":
                        stack.push(Math.trunc(b / a));
                        break;
                }
            }
        }

        return stack.pop();
    }
}