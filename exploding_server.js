
const servers = (arr) => {
    let min = Math.min(...arr);
    let count = 1;
    arr = arr.sort();
    length = arr.length + 1
    console.log(arr);
    if (min !== 1) {
        return 1
    }
    for (let i = 0; i < length; i++) {
        if (arr[i] === count) {
            count++
        } 
        else if (count === arr.length) {
            return arr.length + 1
        } else {
            return count
        }
    }
    
}
console.log(servers([5, 3, 1]));
console.log(servers([2, 3]));
console.log(servers([5, 4, 3, 1]));
console.log(servers([2, 1]));
console.log(servers([1, 2, 3]));
