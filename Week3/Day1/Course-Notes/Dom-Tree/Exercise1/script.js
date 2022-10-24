// For each of the questions, find 2 WAYS of accessing :
// 1. The div DOM node?
const divElement = document.body.firstElementChild;
const divElement2 = document.body.children[0];
console.log(divElement);
console.log(divElement2);
// 2. The ul DOM node?
const ulElement = document.body.children[1];
const ulElement2 = divElement.nextElementSibling;
console.log(ulElement);
console.log(ulElement2);
// 3. The second li (with Pete)?
const liElement = ulElement.children[1];
const liElement2 = ulElement.lastElementChild;
const liElement3 = ulElement2.children[1];
console.log(liElement);
console.log(liElement2);
console.log(liElement3);
