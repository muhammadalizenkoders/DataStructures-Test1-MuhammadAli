


//   Implement a function that splits an array into chunks of a given size. For example, given [1, 2, 3, 4, 5] and a size of 2, return [[1, 2], [3, 4], [5]]. Ensure the function handles edge cases like empty arrays or chunk sizes larger than the array length.
function chunks(arr, chunkS) {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkS) {
      const chunk = arr.slice(i, i + chunkS);
      result.push(chunk);
    }
    return result;
  }
const array = [1, 2, 3, 4, 5];
const chunkS = 2;
const chunkArr = chunks(array, chunkS);
console.log(chunkArr);

// Given an array of integers, write a function that finds the subarray with the maximum sum.(Hint: Use Kadane's Algorithm.)
function maxSum(arr) {
    let MSum = arr[0];
    let CSum = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      CSum = Math.max(arr[i], CSum + arr[i]);
      MSum = Math.max(MSum, CSum);
    }
  
    return MSum;
  }
  
  const arr = [8, 9, -4];
  const Sum = maxSum(arr);
  console.log(`Max subarray sum: ${Sum}`);

// Create a function that takes an array of integers and returns a new array containing only those elements that have a frequency greater than a given threshold.(For example, given [1, 2, 2, 3, 3, 3] and threshold 1, the output should be [2, 3].)
function freq(arr, thres) {
    const FMap = {};
    const result = [];

    for (const num of arr) {
      FMap[num] = (FMap[num] || 0) + 1;
    }

    for (const num in FMap) {
      if (FMap[num] > thres) {
        result.push(parseInt(num));
      }
    }

    return result;
  }
  const arr = [1, 2, 2, 3, 3, 3];
  const thres = 1;
  const result = freq(arr, thres);
  console.log(result);

// Write a function that rotates an array to the right by k positions. For example, rotating [1, 2, 3, 4, 5] by 2 positions results in [4, 5, 1, 2, 3].
function rotate(arr, k) {
    const n = arr.length;
    const rotateArr = [];

    for (let i = 0; i < n; i++) {
      const newIndex = (i + k) % n;
      rotateArr[newIndex] = arr[i];
    }

    return rotateArr;
  }
  const Arr = [1, 2, 3, 4, 5];
  const k = 2;
  const rotatedArr = rotate(Arr, k);
  console.log(rotatedArr);