// push() method adds one or more elements to the end of an array and returns the new length of the array.
let array = [1, 2, 3];
array.push(4);  // Adds 4 to the end of the array
console.log(array);  // Output: [1, 2, 3, 4]

//pop() method removes the last element from an array and returns that element.
let array1 = [1, 2, 3, 4];
array.pop();  // Removes the last element (4)
console.log(array);  // Output: [1, 2, 3]

// shift() method removes the first element from an array and returns that element.
let array2 = [1, 2, 3, 4];
array.shift();  // Removes the first element (1)
console.log(array);  // Output: [2, 3, 4]

// unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

let array3 = [2, 3, 4];
array.unshift(1);  // Adds 1 to the beginning of the array
console.log(array);  // Output: [1, 2, 3, 4]

// splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

let array4 = [1, 2, 3, 4, 5];
array.splice(2, 1, 'a', 'b');  // Removes 1 element at index 2 and adds 'a' and 'b'
console.log(array);  // Output: [1, 2, 'a', 'b', 4, 5]

//slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will not be modified.

let array5 = [1, 2, 3, 4, 5];
let newArray = array.slice(1, 4);  // Creates a new array from index 1 to 3 (not including 4)
console.log(newArray);  // Output: [2, 3, 4]

//indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.  
let array6 = [1, 2, 3, 4, 5];
let index = array.indexOf(3);  // Finds the index of the element 3
console.log(index);  // Output: 2

//map() method creates a new array with the results of calling a provided function on every element in the calling array.

let array7 = [1, 2, 3, 4, 5];
let squaredArray = array.map(x => x * x);  // Squares each element in the array
console.log(squaredArray);  // Output: [1, 4, 9, 16, 25]

//filter() method creates a new array with all elements that pass the test implemented by the provided function.
let array8 = [1, 2, 3, 4, 5];
let filteredArray = array.filter(x => x > 2);  // Filters elements greater than 2
console.log(filteredArray);  // Output: [3, 4, 5]

//reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
let array9 = [1, 2, 3, 4, 5];
let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);  // Sum of all elements
console.log(sum);  // Output: 15