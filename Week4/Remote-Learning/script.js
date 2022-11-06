// Question 1
// Clean the room function:
//  Working on this

// // Given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these, into individual array that is ordered.
// // For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].

const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

function compareNumbers(a, b) {
    return a - b;
}
function sort(arr) {
}
const sortedArray = array.sort(compareNumbers);

sort(array); // [1, 1, 1, 1, 2, 2, 2, 4, 5, 10, 20, 20, 391, 392, 591]

function join2() {
    const arr1 = [];
    let filterArr;
    for (let i = 0; i < sortedArray.length + i; i++) {
        for (let j = 0; j < sortedArray.length; j++) {
            filterArr = sortedArray.filter((element, index, arr) => arr[index] === arr[0]);
        }
        if (filterArr.length < 2) {
            arr1.push(parseInt(filterArr));
        } else {
            arr1.push(filterArr);
        }
        sortedArray.splice(0, filterArr.length);
        filterArr = [];
    }
    console.log(arr1);
}

join2();
