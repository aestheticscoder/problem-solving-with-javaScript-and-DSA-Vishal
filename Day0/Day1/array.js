// find the maximum element in an array
function findMaxElement(arr) {
  return Math.max(...arr);
}

let arr = [5, 9, 3, 2, 7];
let maxElement = findMaxElement(arr);
console.log(maxElement);

// // Find the minimum element in an array
function findMinElement(arr1) {
  return Math.min(...arr1);
}

let arr1 = [5, 9, 3, 2, 7];
let minElement = findMinElement(arr1);
console.log(minElement);

//   Find the sum of all elements in an array

function findSum(arr3) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

let arr3 = [1, 2, 3, 4, 5];
let sum = findSum(arr3);
console.log(sum);

//   Find the average of all elements in an array
function findAverage(arr4) {
  let sum = findSum(arr4);
  return sum / arr.length;
}

let arr4 = [1, 2, 3, 4, 5];
let average = findAverage(arr4);
console.log(average);

//   Find the sum of all even elements in an array
function findSumOfEven(arr5) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}

let arr5 = [1, 2, 3, 4, 5];
let sumOfEven = findSumOfEven(arr5);
console.log(sumOfEven);

//   Find the sum of all odd elements in an array

function findSumOfOdd(arr6) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum += arr[i];
    }
  }

  return sum;
}

let arr6 = [1, 2, 3, 4, 5];
let sumOfOdd = findSumOfOdd(arr6);
console.log(sumOfOdd);

//   find the number of even elements in an array
function countEvenElements(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }

  return count;
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenCount = countEvenElements(array);

console.log(evenCount);

//   find the number of odd elements in an array

function countOddElements(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      count++;
    }
  }

  return count;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const oddCount = countOddElements(numbers);
console.log("Number of odd elements:", oddCount);
