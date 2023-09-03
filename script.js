// Given an array of numbers, write a function to find and return the largest number in the array.

// Write a function that calculates the factorial of a given positive integer using recursion.
// Write a  function that accepts an array and removes all duplicate elements from it
// Write a function that accepts an array and counts duplicates. Return and object where key is duplicated value and value is count of duplicates.
// Write a function that takes a sentence as input and returns the longest word in the sentence.
// Write a function that rotates the elements of an array to the right by a given number of steps.
// Write a function that counts the number of words in a given sentence.
// Write a function that takes a string as input and returns its reverse.

// 1)

const array = [2, 7, 12, 15, 14];

const highest = function (arr) {
  let num = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      num = arr[i];
    }
  }
  return num;
};

console.log(highest(array));

// 2)

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// 3)

function removeDuplicates(arr) {
  let uniqueElements = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueElements.indexOf(arr[i]) === -1) {
      uniqueElements.push(arr[i]);
    }
  }
  return uniqueElements;
}

// 4)

function countDuplicates(arr) {
  let duplicateCounts = {};
  for (let i = 0; i < arr.length; i++) {
    if (duplicateCounts[arr[i]]) {
      duplicateCounts[arr[i]] += 1;
    } else {
      duplicateCounts[arr[i]] = 1;
    }
  }
  return duplicateCounts;
}

// 5)

function longestWord(sentence) {
  const words = sentence.split(" ");

  let longestWord = "";

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

// 6)

function rotateArray(arr, steps) {
  // Step 1: Create a new array to store the rotated elements
  const rotatedArray = new Array(arr.length);
  // Step 2: Iterate over the elements of the original array
  for (let i = 0; i < arr.length; i++) {
    // Step 3: Calculate the index of the element in the rotated array
    const rotatedIndex = (i + steps) % arr.length;
    // Step 4: Assign the element to the correct index in the rotated array
    rotatedArray[rotatedIndex] = arr[i];
  }

  return rotatedArray;
}

console.log(rotateArray([2, 5, 6, 8], 3));

// 7)

function wordCount(sentence) {
  const words = sentence.split(" ");

  return words.length;
}

// 8)

function reverseString(str) {
  const characters = str.split("");

  characters.reverse();

  const reversedString = characters.join("");

  return reversedString;
}
