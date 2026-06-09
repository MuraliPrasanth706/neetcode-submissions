const missingKeyboards = (arr) => {
    let min = Infinity;
    let max = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        min = Math.min(min, arr[i]);
        max = Math.max(max, arr[i]);
    }

    return (max - min + 1) - arr.length;
};

console.log(missingKeyboards([10, 13, 12, 8]));
