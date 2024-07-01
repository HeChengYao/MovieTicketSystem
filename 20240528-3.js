function findBig(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    return Math.max(...arr);
}

console.log(findBig([15, 20, 32, 26, 7])); // 32
console.log(findBig([1, 30, 25, 47, 19, 51, 83, 75, 60])); // 83
console.log(findBig([-11, 0, -1, -14, -25, -29])); // 0
console.log(findBig([])); // undefined
