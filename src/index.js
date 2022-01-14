

module.exports = function towelSort(matrix) {
    let newArr = [];
    for (let key in matrix) {
       key % 2 !== 0 ? newArr.push(...matrix[key].reverse()) : newArr.push(...matrix[key])
    }
    return newArr;
}
