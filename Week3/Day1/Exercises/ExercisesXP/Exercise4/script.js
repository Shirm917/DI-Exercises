// The point of this challenge is to display a list of two books on your browser.

// In the body of the HTML page, create an empty div:
// <div class="listBooks"></div>
// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).
const allBooks = [{
    title: "Percy Jackson and the Lightning Thief",
    author: "Rick Riordan",
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1400602609l/28187.jpg",
    alreadyRead: true
}, {
    title: "Percy Jackson and the Sea of Monsters",
    author: "Rick Riordan",
    image: new URL("https://upload.wikimedia.org/wikipedia/en/4/46/PercySeamonsters.gif"),
    alreadyRead: true
}]
// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.
const divElement = document.body.firstElementChild;
const table = document.createElement("TABLE");
table.innerHTML = 
`<tbody>
    <tr>
        <th>Book Names</th>
        <th>Images</th>
    </tr>
    <tr>
        <td>${allBooks[0]["title"]} written by ${allBooks[0]["author"]}</td>
        <td><img></td>
    </tr>
    <tr>
        <td>${allBooks[1]["title"]} written by ${allBooks[1]["author"]}</td>
        <td><img></td>
    </tr>
</tbody>`
divElement.appendChild(table);
function imageElements() {
    const images = document.querySelectorAll("img");
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("src", `${allBooks[i]["image"]}`)
        images[i].style.width = "100px";
    }
}

imageElements();

const td = document.querySelectorAll("td");
td[0].setAttribute("class", `${allBooks[0]["alreadyRead"] ? "is-read": ""}`)
td[2].setAttribute("class", `${allBooks[1]["alreadyRead"] ? "is-read": ""}`)




    
