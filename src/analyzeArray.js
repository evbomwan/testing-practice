function average(array) {
    let sum = 0;
    let averageNumber = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    averageNumber = sum / array.length
    return averageNumber
}
function min(array) {
    let minNumber = Math.min(...array);
    return minNumber;
}
function max (array) {
    let maxNumber = Math.max(...array);
    return maxNumber;
}
function length(array) {
    let lengthArray = array.length;
    return lengthArray;
}
export default function analyzeArray(array) {
    let averageNumber = average(array);
    let minNumber = min(array);
    let maxNumber = max(array);
    let lengthArray = length(array);
    return {
        average: averageNumber,
        min: minNumber,
        max: maxNumber,
        length: lengthArray
    }
}

const object = analyzeArray([1,2,3]);
console.log(object);