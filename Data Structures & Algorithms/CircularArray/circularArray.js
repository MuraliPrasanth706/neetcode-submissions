const circularArray = (arr) => {
   let sum=0;
   let ans=[];
    for (let i = 0; i < arr.length; i++) {
        let left = arr[(i-1+arr.length)%arr.length];
        let right = arr[(i +1)%arr.length];
        let data = Math.abs(right - left);
        ans.push(data);
        sum += (data ^ i);
    }
    return sum;
    
};

console.log(circularArray([1,2,3]));
