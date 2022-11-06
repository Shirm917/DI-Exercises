// Question 1
// Clean the room function:
//  Working on this

// // Given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these, into individual array that is ordered.
// // For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].

// const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

// function compareNumbers(a, b) {
//     return a - b;
// }
// // function sort(arr) {
// // }
// const sortedArray = array.sort(compareNumbers);

// // sort(array); // [1, 1, 1, 1, 2, 2, 2, 4, 5, 10, 20, 20, 391, 392, 591]

// function join() {
//     const arr = [];
//     let newArr = [];
//     let newArr2 = [];
//     for (let i = 0; i < sortedArray.length; i++) {
//         if (sortedArray[i] === sortedArray[i + 1]) {
//             // newArr3 = sortedArray.slice(0, i + 1);
//             newArr.push(sortedArray[i]);
//             // console.log(newArr);
//             // newArr2 = newArr.reduce((acc, num) => acc.concat(num), []);
//             // console.log(newArr2);
//             // arr.push(newArr);
//         } else if (sortedArray[i] === 391) {
//             newArr.push(sortedArray[i]);
//         } else {
//             arr.push(newArr);
//             newArr = [];
//             // continue;
//         }
//     }
//     console.log(arr);
//     // console.log(sortedArray);
// }

// join();

// // sortedArray[i] === sortedArray[i + 1] || sortedArray[i] === sortedArray[i - 1]
// // sortedArray.includes(sortedArray[i], i + 1)