// Mini-Project

const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];

// function to create the search bar
function createSearchBar() {
    const headerDivElement = document.createElement('div')
    const h1Element = document.createElement("h1");
    const inputElement = document.createElement("input");
    headerDivElement.setAttribute("id", "searchBar");
    inputElement.setAttribute("type", "text");
    inputElement.setAttribute("placeholder", "Search Robots");
    inputElement.setAttribute("id", "inputSearch");
    const h1Text = document.createTextNode("ROBOFRIENDS");
    h1Element.append(h1Text);
    headerDivElement.append(h1Element, inputElement);
    document.body.prepend(headerDivElement);
}

// function to create the robots
function createRobots() {
    const containerDivElement = document.createElement("div");
    containerDivElement.setAttribute("id", "container");
    document.body.prepend(containerDivElement);
    robots.forEach(element => {
        const robotDivElement = document.createElement("div");
        const imageElement = document.createElement("img");
        const h3Element = document.createElement("h3");
        const paraElement = document.createElement("p");
        imageElement.setAttribute("src", element["image"]);
        const h3Text = document.createTextNode(element["name"]);
        const paraText = document.createTextNode(element["email"]);
        h3Element.append(h3Text);
        paraElement.append(paraText);
        robotDivElement.append(imageElement,h3Element,paraElement);
        containerDivElement.append(robotDivElement);
    })
}

createRobots(); // calling the createRobots function
createSearchBar(); // calling this after so it's first on the page because of prepend

// function to filter through the robots
const inputSearch = document.getElementById("inputSearch");
function findRobot() {
    const containerDivs = document.querySelectorAll("#container div");
    const h3Elements = document.getElementsByTagName("h3");
    const inputText = inputSearch.value.toUpperCase();
    for (let i = 0; i < h3Elements.length; i++) {
        const robotName = h3Elements[i].textContent;
        if (robotName.toUpperCase().startsWith(inputText)) {
            containerDivs[i].style.display = "flex"
        } else {
            containerDivs[i].style.display = "none"
        }
    }
}

inputSearch.addEventListener("keyup", findRobot);