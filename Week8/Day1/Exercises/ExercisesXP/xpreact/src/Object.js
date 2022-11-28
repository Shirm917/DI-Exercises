// Exercise 3
// Instructions
// Using the following object:

const user = {
    first_name: 'Bob',
    last_name: 'Dylan',
    fav_animals : ['Horse','Turtle','Elephant','Monkey']
};

// In the React App, render the first name and the last name of the user in two <h3>.
// In a separate Javascript file, create a new Component called UserFavoriteColors. Use props to pass the fav_animals array to the UserFavoriteColors component.
// In the UserFavoriteColors component, use the map function to create a new array of <li>‘s.
// Each <li> corresponds to one animal from the fav_animals array.
// Display the <li>‘s. Tip : You can use the second parameter of the map function as a key to uniquely identify each HTML item

function Object() {
    return (
        <div>
            <h3>{user.first_name}</h3>
            <h3>{user.last_name}</h3>
        </div>
    )
}

export default Object