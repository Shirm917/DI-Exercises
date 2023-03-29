// Question 1
// Clean the room function:
//  Working on this

// // Given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these, into individual array that is ordered.
// // For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].

const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

function compareNumbers(a, b) {
    return a - b;
}
const sortedArray = array.sort(compareNumbers);

// sortedArray; // [1, 1, 1, 1, 2, 2, 2, 4, 5, 10, 20, 20, 391, 392, 591]

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

// Question 2:
// Write a javascript function that takes an array of numbers and a target number.

// The function should find two different numbers in the array that, when added together, give the target number.

// For example: answer([1,2,3], 4) should return [1,3]

function findNumbers(arr,targetNum) {
    const filteredArr = arr.filter(element => {
        return element < targetNum;
    });
    if (filteredArr.length === 2) {
        return filteredArr;
    } else {
        let total = targetNum
        for (const arrNum of filteredArr) {
            total -= arrNum;
        };
        const positiveTotal = Math.abs(total);
        const finalArr = filteredArr.filter(element => {
            return element !== positiveTotal;
        })
        return finalArr;
    };
};

findNumbers([4,4,9], 8);

// Write a function that converts HEX to RGB.

// Then Make that function auto-detect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.



function hexToRgb(hex) {
    const hexArr = hex.split("");
    hexArr.splice(0,1);
    const rgbArr = [];
    for (let i = 0; i < hexArr.length; i++) {
        if (i % 2 === 0) {
            const num = parseInt(`${hexArr[i]}${hexArr[i + 1]}`,16);
            rgbArr.push(num);
        };
    }
    return `rgb(${rgbArr[0]},${rgbArr[1]},${rgbArr[2]})`
};

console.log(hexToRgb("#d2d456"));

